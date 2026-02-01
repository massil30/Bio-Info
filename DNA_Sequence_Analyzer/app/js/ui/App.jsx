// UI layer: Main App (DNAAnalyzer)
const { useState } = React;

(function attachApp() {
  const parseFasta = (DNA.Core && DNA.Core.parseFasta) || ((x) => ({ header: '', sequence: '' }));
  const validateSequence = (DNA.Core && DNA.Core.validateSequence) || (() => false);
  const calculateStats = (DNA.Domain && DNA.Domain.calculateStats) || (() => ({}));
  const reverseComplement = (DNA.Domain && DNA.Domain.reverseComplement) || (() => '');
  const splitIntoCodons = (DNA.Domain && DNA.Domain.splitIntoCodons) || (() => []);
  const findORFs = (DNA.Domain && DNA.Domain.findORFs) || (() => []);
  const translateToProtein = (DNA.Domain && DNA.Domain.translateToProtein) || (() => '');
  const detectMutations = (DNA.Domain && DNA.Domain.detectMutations) || (() => []);
  const analyzeMutationImpact = (DNA.Domain && DNA.Domain.analyzeMutationImpact) || (() => ({}));

  const ProteinViewer = (DNA.UI && DNA.UI.ProteinViewer) || (() => null);

  function DNAAnalyzer() {
    const [activeTab, setActiveTab] = useState('single');
    const [singleInput, setSingleInput] = useState('');
    const [seq1Input, setSeq1Input] = useState('');
    const [seq2Input, setSeq2Input] = useState('');
    const [singleResults, setSingleResults] = useState(null);
    const [comparisonResults, setComparisonResults] = useState(null);
    const [error, setError] = useState('');

    const analyzeSingleSequence = () => {
      setError('');
      setSingleResults(null);
      try {
        const { header, sequence } = parseFasta(singleInput);
        if (!sequence) throw new Error('No sequence found. Please provide a valid FASTA format.');
        if (!validateSequence(sequence)) throw new Error('Invalid sequence. Only A, T, C, G nucleotides are allowed.');
        const stats = calculateStats(sequence);
        const revComp = reverseComplement(sequence);
        const codons = splitIntoCodons(sequence);
        const orfs = findORFs(sequence);
        const proteins = orfs.map((orf) => ({ ...orf, protein: translateToProtein(orf.sequence) }));
        setSingleResults({ header, sequence, stats, revComp, codons, orfs: proteins });
      } catch (err) {
        setError(err.message);
      }
    };

    const compareSequences = () => {
      setError('');
      setComparisonResults(null);
      try {
        const seq1Data = parseFasta(seq1Input);
        const seq2Data = parseFasta(seq2Input);
        if (!seq1Data.sequence || !seq2Data.sequence) throw new Error('Both sequences are required for comparison.');
        if (!validateSequence(seq1Data.sequence) || !validateSequence(seq2Data.sequence))
          throw new Error('Invalid sequences. Only A, T, C, G nucleotides are allowed.');

        const mutations = detectMutations(seq1Data.sequence, seq2Data.sequence);
        const mutationRate = (
          (mutations.length / Math.max(seq1Data.sequence.length, seq2Data.sequence.length)) * 100
        ).toFixed(2);

        const orfs1 = findORFs(seq1Data.sequence);
        const orfs2 = findORFs(seq2Data.sequence);
        const protein1 = orfs1.length > 0 ? translateToProtein(orfs1[0].sequence) : '';
        const protein2 = orfs2.length > 0 ? translateToProtein(orfs2[0].sequence) : '';
        const impact = analyzeMutationImpact(seq1Data.sequence, seq2Data.sequence);

        const mutationCounts = {
          transition: mutations.filter((m) => m.classification === 'transition').length,
          transversion: mutations.filter((m) => m.classification === 'transversion').length,
          insertion: mutations.filter((m) => m.classification === 'insertion').length,
          deletion: mutations.filter((m) => m.classification === 'deletion').length,
        };

        setComparisonResults({
          seq1: seq1Data.sequence,
          seq2: seq2Data.sequence,
          mutations,
          mutationRate,
          mutationCounts,
          orfs1,
          orfs2,
          protein1,
          protein2,
          impact,
        });
      } catch (err) {
        setError(err.message);
      }
    };

    const handleFileUpload = (e, setter) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => setter(event.target.result);
        reader.readAsText(file);
      }
    };

    return (
      <div className="app-container">
        <div className="header">
          <h1>DNA Sequence Analyzer</h1>
          <p>Bioinformatics Analysis & Mutation Detection System</p>
        </div>

        <div className="tabs">
          <button className={`tab ${activeTab === 'single' ? 'active' : ''}`} onClick={() => setActiveTab('single')}>
            Single Sequence Analysis
          </button>
          <button className={`tab ${activeTab === 'compare' ? 'active' : ''}`} onClick={() => setActiveTab('compare')}>
            Mutation Detection
          </button>
          <button className={`tab ${activeTab === '3d' ? 'active' : ''}`} onClick={() => setActiveTab('3d')}>
            3D Protein Viewer
          </button>
        </div>

        {error && <div className="error-message">⚠️ {error}</div>}

        {activeTab === 'single' && (
          <div>
            <div className="card">
              <h2 className="card-title">Input DNA Sequence</h2>
              <div className="input-group">
                <label>FASTA Format Sequence</label>
                <textarea
                  value={singleInput}
                  onChange={(e) => setSingleInput(e.target.value)}
                  placeholder=">Sequence_Name&#10;ATGCGATCGATCG..."
                />
              </div>
              <div className="input-group">
                <label>Or Upload FASTA File</label>
                <div className="file-input-wrapper">
                  <input type="file" id="single-file" accept=".fasta,.fa,.txt" onChange={(e) => handleFileUpload(e, setSingleInput)} />
                  <label htmlFor="single-file" className="file-input-label">📁 Choose File</label>
                </div>
              </div>
              <button onClick={analyzeSingleSequence}>🧬 Analyze Sequence</button>
            </div>

            {singleResults && (
              <>
                <div className="card">
                  <h2 className="card-title">Basic Statistics</h2>
                  <div className="stats-grid">
                    <div className="stat-card"><div className="stat-value">{singleResults.stats.length}</div><div className="stat-label">Length (bp)</div></div>
                    <div className="stat-card"><div className="stat-value nucleotide-A">{singleResults.stats.counts.A}</div><div className="stat-label">Adenine (A)</div></div>
                    <div className="stat-card"><div className="stat-value nucleotide-T">{singleResults.stats.counts.T}</div><div className="stat-label">Thymine (T)</div></div>
                    <div className="stat-card"><div className="stat-value nucleotide-C">{singleResults.stats.counts.C}</div><div className="stat-label">Cytosine (C)</div></div>
                    <div className="stat-card"><div className="stat-value nucleotide-G">{singleResults.stats.counts.G}</div><div className="stat-label">Guanine (G)</div></div>
                    <div className="stat-card"><div className="stat-value">{singleResults.stats.gc}%</div><div className="stat-label">GC Content</div></div>
                    <div className="stat-card"><div className="stat-value">{singleResults.stats.at}%</div><div className="stat-label">AT Content</div></div>
                    <div className="stat-card"><div className="stat-value">{singleResults.orfs.length}</div><div className="stat-label">ORFs Found</div></div>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">Reverse Complement</h2>
                  <div className="sequence-display">
                    {singleResults.revComp.split('').map((base, i) => (
                      <span key={i} className={`nucleotide-${base}`}>{base}</span>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">Codon Analysis</h2>
                  <div className="sequence-display">
                    {singleResults.codons.map((codon, i) => {
                      let className = 'codon';
                      if (codon === 'ATG') className += ' start-codon';
                      if (['TAA', 'TAG', 'TGA'].includes(codon)) className += ' stop-codon';
                      return (
                        <span key={i} className={className}>
                          {codon.split('').map((base, j) => (
                            <span key={j} className={`nucleotide-${base}`}>{base}</span>
                          ))}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {singleResults.orfs.length > 0 && (
                  <div className="card">
                    <h2 className="card-title">Open Reading Frames & Proteins</h2>
                    <div className="orf-list">
                      {singleResults.orfs.map((orf, i) => (
                        <div key={i} className="orf-item">
                          <div><strong>ORF {i + 1}</strong> (Frame {orf.frame})</div>
                          <div>Position: {orf.start} - {orf.end} ({orf.length} bp)</div>
                          <div>DNA: {orf.sequence}</div>
                          <div className="protein-sequence">Protein: {orf.protein}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {activeTab === 'compare' && (
          <div>
            <div className="grid-2">
              <div className="card">
                <h2 className="card-title">Original Sequence</h2>
                <div className="input-group">
                  <label>FASTA Format</label>
                  <textarea value={seq1Input} onChange={(e) => setSeq1Input(e.target.value)} placeholder=">Original_Sequence&#10;ATGCGATCG..." />
                </div>
                <div className="input-group">
                  <label>Or Upload File</label>
                  <div className="file-input-wrapper">
                    <input type="file" id="seq1-file" accept=".fasta,.fa,.txt" onChange={(e) => handleFileUpload(e, setSeq1Input)} />
                    <label htmlFor="seq1-file" className="file-input-label">📁 Choose File</label>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="card-title">Mutated Sequence</h2>
                <div className="input-group">
                  <label>FASTA Format</label>
                  <textarea value={seq2Input} onChange={(e) => setSeq2Input(e.target.value)} placeholder=">Mutated_Sequence&#10;ATGCGATCG..." />
                </div>
                <div className="input-group">
                  <label>Or Upload File</label>
                  <div className="file-input-wrapper">
                    <input type="file" id="seq2-file" accept=".fasta,.fa,.txt" onChange={(e) => handleFileUpload(e, setSeq2Input)} />
                    <label htmlFor="seq2-file" className="file-input-label">📁 Choose File</label>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={compareSequences} style={{ width: '100%', marginTop: '1rem' }}>🔬 Compare & Detect Mutations</button>

            {comparisonResults && (
              <>
                <div className="card">
                  <h2 className="card-title">Mutation Overview</h2>
                  <div className="stats-grid">
                    <div className="stat-card"><div className="stat-value">{comparisonResults.mutations.length}</div><div className="stat-label">Total Mutations</div></div>
                    <div className="stat-card"><div className="stat-value">{comparisonResults.mutationRate}%</div><div className="stat-label">Mutation Rate</div></div>
                    <div className="stat-card"><div className="stat-value nucleotide-C">{comparisonResults.mutationCounts.transition}</div><div className="stat-label">Transitions</div></div>
                    <div className="stat-card"><div className="stat-value nucleotide-T">{comparisonResults.mutationCounts.transversion}</div><div className="stat-label">Transversions</div></div>
                    <div className="stat-card"><div className="stat-value nucleotide-G">{comparisonResults.mutationCounts.insertion}</div><div className="stat-label">Insertions</div></div>
                    <div className="stat-card"><div className="stat-value nucleotide-A">{comparisonResults.mutationCounts.deletion}</div><div className="stat-label">Deletions</div></div>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">Sequence Alignment</h2>
                  <div className="alignment-view">
                    <div className="alignment-line">
                      Seq1: {comparisonResults.seq1.split('').map((base, i) => {
                        const isMutation = comparisonResults.mutations.some((m) => m.position === i);
                        return (
                          <span key={i} className={isMutation ? 'mutation' : ''}>
                            <span className={`nucleotide-${base}`}>{base}</span>
                          </span>
                        );
                      })}
                    </div>
                    <div className="alignment-line">
                      {comparisonResults.seq1.split('').map((base, i) => {
                        const mutation = comparisonResults.mutations.find((m) => m.position === i);
                        return <span key={i} className={mutation ? 'mismatch' : 'match'}>{mutation ? '*' : '|'}</span>;
                      })}
                    </div>
                    <div className="alignment-line">
                      Seq2: {comparisonResults.seq2.split('').map((base, i) => {
                        const isMutation = comparisonResults.mutations.some((m) => m.position === i);
                        return (
                          <span key={i} className={isMutation ? 'mutation' : ''}>
                            <span className={`nucleotide-${base}`}>{base}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">Mutation Details</h2>
                  <div className="mutation-list">
                    {comparisonResults.mutations.slice(0, 20).map((mutation, i) => (
                      <div key={i} className="mutation-item">
                        <span className={`mutation-type ${mutation.classification}`}>{mutation.classification}</span>
                        Position {mutation.position}: {mutation.original} → {mutation.mutated}
                      </div>
                    ))}
                    {comparisonResults.mutations.length > 20 && (
                      <div className="mutation-item">... and {comparisonResults.mutations.length - 20} more mutations</div>
                    )}
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">Protein Impact Analysis</h2>
                  <div className="success-message">
                    <span className={`impact-badge ${comparisonResults.impact.type}`}>{comparisonResults.impact.type}</span>
                    {comparisonResults.impact.description}
                  </div>

                  <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Protein Comparison</h3>
                  <div className="grid-2">
                    <div>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Original Protein</h4>
                      <div className="protein-sequence">{comparisonResults.protein1 || 'No protein translated'}</div>
                      <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Length: {comparisonResults.protein1.length} amino acids</div>
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Mutated Protein</h4>
                      <div className="protein-sequence">{comparisonResults.protein2 || 'No protein translated'}</div>
                      <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Length: {comparisonResults.protein2.length} amino acids</div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">ORF Comparison</h2>
                  <div className="grid-2">
                    <div>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Original ORFs</h4>
                      <div className="stat-value">{comparisonResults.orfs1.length}</div>
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Mutated ORFs</h4>
                      <div className="stat-value">{comparisonResults.orfs2.length}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === '3d' && (
          <ProteinViewer
            proteinSequence={(singleResults && singleResults.orfs && singleResults.orfs[0] && singleResults.orfs[0].protein) || (comparisonResults && comparisonResults.protein1) || ''}
            mutations={(comparisonResults && comparisonResults.mutations) || []}
          />
        )}
      </div>
    );
  }

  window.DNA = window.DNA || {};
  DNA.UI = DNA.UI || {};
  DNA.UI.DNAAnalyzer = DNAAnalyzer;
})();
