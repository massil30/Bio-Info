// UI layer: 3D Protein Viewer component
const { useState, useEffect, useRef } = React;

(function attachProteinViewer() {
  const PROTEIN_DATABASE = (window.DNA && DNA.Data && DNA.Data.PROTEIN_DATABASE) || {};

  function ProteinViewer({ proteinSequence, mutations = [] }) {
    const viewerRef = useRef(null);
    const stageRef = useRef(null);
    const [selectedProtein, setSelectedProtein] = useState('');
    const [loading, setLoading] = useState(false);
    const [viewerReady, setViewerReady] = useState(false);
    const [representation, setRepresentation] = useState('cartoon');
    const [colorScheme, setColorScheme] = useState('chainid');

    useEffect(() => {
      if (!selectedProtein || !viewerRef.current) return;
      setLoading(true);
      setViewerReady(false);
      if (stageRef.current) {
        stageRef.current.removeAllComponents();
      } else {
        stageRef.current = new NGL.Stage(viewerRef.current, { backgroundColor: '#1a1f2e' });
      }
      const stage = stageRef.current;
      const proteinInfo = PROTEIN_DATABASE[selectedProtein];
      const pdbUrl = `https://files.rcsb.org/download/${proteinInfo.pdbId}.pdb`;

      stage
        .loadFile(pdbUrl, { defaultRepresentation: false })
        .then((component) => {
          component.addRepresentation(representation, { colorScheme: colorScheme, quality: 'high' });
          if (mutations.length > 0 && mutations.length < 50) {
            const aaPositions = mutations
              .map((m) => Math.floor(m.position / 3))
              .filter((pos) => pos > 0 && pos < 500);
            if (aaPositions.length > 0) {
              const sele = aaPositions.map((pos) => `${pos}`).join(' or ');
              component.addRepresentation('ball+stick', { sele, colorScheme: 'element', scale: 2.0 });
            }
          }
          component.autoView();
          stage.viewerControls.zoom(0.8);
          setLoading(false);
          setViewerReady(true);
        })
        .catch((error) => {
          console.error('Error loading structure:', error);
          setLoading(false);
          alert(
            `Failed to load structure for ${proteinInfo.name}.\n\nError: ${error.message}\n\nThis may be due to:\n1. Network connectivity issues\n2. RCSB PDB server being temporarily unavailable\n3. Browser CORS restrictions\n\nPlease try:\n- Refreshing the page\n- Checking your internet connection\n- Trying a different protein\n- Using a modern browser (Chrome, Firefox, Edge)`
          );
        });

      return () => {
        if (stageRef.current) stageRef.current.removeAllComponents();
      };
    }, [selectedProtein]);

    const changeRepresentation = (newRep) => {
      setRepresentation(newRep);
      if (stageRef.current && viewerReady) {
        stageRef.current.eachComponent((comp) => {
          comp.removeAllRepresentations();
          comp.addRepresentation(newRep, { colorScheme: colorScheme, quality: 'high' });
        });
      }
    };

    const changeColorScheme = (newScheme) => {
      setColorScheme(newScheme);
      if (stageRef.current && viewerReady) {
        stageRef.current.eachComponent((comp) => {
          comp.removeAllRepresentations();
          comp.addRepresentation(representation, { colorScheme: newScheme, quality: 'high' });
        });
      }
    };

    const resetView = () => {
      if (stageRef.current) stageRef.current.autoView();
    };

    const toggleSpin = () => {
      if (stageRef.current) stageRef.current.setSpin(!stageRef.current.parameters.spin);
    };

    return (
      <div className="card">
        <h2 className="card-title">3D Protein Structure Visualization</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
          Select a known protein to visualize its 3D structure from the RCSB Protein Data Bank.
          These are experimentally-determined structures that allow interactive exploration of protein architecture and mutation effects.
        </p>

        <div className="protein-options">
          {Object.entries(PROTEIN_DATABASE).map(([id, info]) => (
            <div key={id} className={`protein-option ${selectedProtein === id ? 'selected' : ''}`} onClick={() => setSelectedProtein(id)}>
              <h4>{info.name}</h4>
              <p>{info.description}</p>
              <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--accent)' }}>PDB: {info.pdbId} | {info.organism}</p>
            </div>
          ))}
        </div>

        {selectedProtein && (
          <>
            <div className="protein-viewer-container">
              <div ref={viewerRef} style={{ width: '100%', height: '100%' }} />
              {loading && (
                <div className="loading-overlay">
                  <div className="spinner"></div>
                  <div className="loading-text">Loading 3D structure from RCSB PDB...</div>
                </div>
              )}
              {viewerReady && (
                <>
                  <div className="viewer-controls">
                    <div style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Representation</div>
                    <button className="viewer-control-btn" onClick={() => changeRepresentation('cartoon')}>Cartoon</button>
                    <button className="viewer-control-btn" onClick={() => changeRepresentation('ball+stick')}>Ball & Stick</button>
                    <button className="viewer-control-btn" onClick={() => changeRepresentation('surface')}>Surface</button>
                    <button className="viewer-control-btn" onClick={() => changeRepresentation('ribbon')}>Ribbon</button>
                    <button className="viewer-control-btn" onClick={() => changeRepresentation('spacefill')}>Space Fill</button>

                    <div style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Color Scheme</div>
                    <button className="viewer-control-btn" onClick={() => changeColorScheme('chainid')}>By Chain</button>
                    <button className="viewer-control-btn" onClick={() => changeColorScheme('element')}>By Element</button>
                    <button className="viewer-control-btn" onClick={() => changeColorScheme('residueindex')}>By Position</button>
                    <button className="viewer-control-btn" onClick={() => changeColorScheme('bfactor')}>By B-factor</button>

                    <div style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Controls</div>
                    <button className="viewer-control-btn" onClick={resetView}>Reset View</button>
                    <button className="viewer-control-btn" onClick={toggleSpin}>Toggle Spin</button>
                  </div>

                  <div className="viewer-info">
                    <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--accent)' }}>{PROTEIN_DATABASE[selectedProtein].name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Source: RCSB Protein Data Bank<br />
                      PDB ID: {PROTEIN_DATABASE[selectedProtein].pdbId}<br />
                      UniProt: {PROTEIN_DATABASE[selectedProtein].uniprot}<br />
                      Organism: {PROTEIN_DATABASE[selectedProtein].organism}
                    </div>
                    <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>💡 Use mouse to rotate, scroll to zoom</div>
                  </div>

                  {mutations.length > 0 && (
                    <div className="mutation-markers">
                      <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--accent)' }}>Mutation Sites</div>
                      {mutations.map((mut, i) => (
                        <div key={i} className="mutation-marker-item">
                          <div className="mutation-marker-color" style={{ background: 'var(--error)' }}></div>
                          <span>Position {mut.position}: {mut.original}→{mut.mutated}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--bg-input)', borderRadius: '8px', fontSize: '0.875rem' }}>
              <strong>Interactive Features:</strong>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <li>Rotate: Left mouse button + drag</li>
                <li>Zoom: Scroll wheel or right mouse + drag</li>
                <li>Pan: Middle mouse button + drag or Ctrl + left mouse + drag</li>
                <li>Change representation and color scheme using controls on the right</li>
                <li>Mutation sites are highlighted in the structure when detected</li>
              </ul>
            </div>

            <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0, 217, 255, 0.1)', border: '1px solid var(--accent)', borderRadius: '8px', fontSize: '0.875rem' }}>
              <strong style={{ color: 'var(--accent)' }}>About RCSB Protein Data Bank:</strong>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                The RCSB Protein Data Bank (PDB) is the world's largest repository of experimentally-determined 3D protein structures. These structures are determined using X-ray crystallography, NMR spectroscopy, and cryo-electron microscopy. The PDB contains over 200,000 structures and is freely accessible to researchers worldwide. The structures shown here represent real experimental data that has been validated and published in scientific literature.
              </p>
            </div>
          </>
        )}
      </div>
    );
  }

  window.DNA = window.DNA || {};
  DNA.UI = DNA.UI || {};
  DNA.UI.ProteinViewer = ProteinViewer;
})();
