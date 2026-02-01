// Data layer: Protein metadata and IDs
window.DNA = window.DNA || {};
DNA.Data = DNA.Data || {};

// Role: Store reference protein data (names, sources, PDB IDs) for 3D visualization and analysis
// Used by: 3D protein viewer to display known protein structures
DNA.Data.PROTEIN_DATABASE = {
  HBA: {
    name: 'Hemoglobin subunit alpha',
    organism: 'Homo sapiens',
    pdbId: '1A3N',
    uniprot: 'P69905',
    description: 'Oxygen transport protein, alpha-thalassemia mutations',
  },
  HBB: {
    name: 'Hemoglobin subunit beta',
    organism: 'Homo sapiens',
    pdbId: '1HBS',
    uniprot: 'P68871',
    description: 'Sickle cell disease (Glu6Val mutation)',
  },
  INS: {
    name: 'Insulin',
    organism: 'Homo sapiens',
    pdbId: '1MSO',
    uniprot: 'P01308',
    description: 'Blood glucose regulation hormone',
  },
  P53: {
    name: 'Tumor protein p53 (DNA binding domain)',
    organism: 'Homo sapiens',
    pdbId: '1TSR',
    uniprot: 'P04637',
    description: 'Tumor suppressor, most mutated gene in cancer',
  },
  GFP: {
    name: 'Green fluorescent protein',
    organism: 'Aequorea victoria',
    pdbId: '1EMA',
    uniprot: 'P42212',
    description: 'Nobel Prize-winning fluorescent marker',
  },
  LYZ: {
    name: 'Lysozyme C',
    organism: 'Homo sapiens',
    pdbId: '1LYZ',
    uniprot: 'P00698',
    description: 'Antibacterial enzyme, first protein structure solved',
  },
};
