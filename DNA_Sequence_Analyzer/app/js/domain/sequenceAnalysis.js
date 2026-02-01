// Domain layer: Sequence analysis operations
window.DNA = window.DNA || {};
DNA.Domain = DNA.Domain || {};
DNA.Core = DNA.Core || {};

// Role: Calculate nucleotide composition statistics (counts, GC%, AT%)
// Used by: Single sequence analysis to display basic sequence properties
DNA.Domain.calculateStats = function calculateStats(sequence) {
  const length = sequence.length;
  const counts = {
    A: (sequence.match(/A/g) || []).length,
    T: (sequence.match(/T/g) || []).length,
    C: (sequence.match(/C/g) || []).length,
    G: (sequence.match(/G/g) || []).length,
  };

  const gc = ((counts.G + counts.C) / length * 100).toFixed(2);
  const at = ((counts.A + counts.T) / length * 100).toFixed(2);

  return { length, counts, gc, at };
};

// Role: Generate reverse complement of DNA sequence (for 3' to 5' analysis)
// Used by: Single sequence analysis to show complementary strand orientation
DNA.Domain.reverseComplement = function reverseComplement(sequence) {
  const complement = { A: 'T', T: 'A', C: 'G', G: 'C' };
  return sequence
    .split('')
    .reverse()
    .map((base) => complement[base])
    .join('');
};

// Role: Split DNA sequence into triplet codons for translation
// Used by: Codon analysis display and ORF detection to parse reading frames
DNA.Domain.splitIntoCodons = function splitIntoCodons(sequence) {
  const codons = [];
  for (let i = 0; i < sequence.length; i += 3) {
    const codon = sequence.substring(i, i + 3);
    if (codon.length === 3) codons.push(codon);
  }
  return codons;
// Role: Identify Open Reading Frames (ORFs) - DNA segments starting with ATG and ending with stop codons
// Used by: ORF analysis, protein translation to find viable coding regions
};

DNA.Domain.findORFs = function findORFs(sequence) {
  const orfs = [];
  const startCodon = 'ATG';
  const stopCodons = ['TAA', 'TAG', 'TGA'];

  for (let frame = 0; frame < 3; frame++) {
    let i = frame;
    while (i < sequence.length - 2) {
      const codon = sequence.substring(i, i + 3);
      if (codon === startCodon) {
        let j = i + 3;
        let orfSequence = startCodon;
        while (j < sequence.length - 2) {
          const nextCodon = sequence.substring(j, j + 3);
          orfSequence += nextCodon;
          if (stopCodons.includes(nextCodon)) {
            orfs.push({
              start: i,
              end: j + 3,
              frame: frame,
              sequence: orfSequence,
              length: orfSequence.length,
            });
            break;
          }
          j += 3;
        }
        i = j;
      }
      i += 3;
    }
  }
  return orfs;
// Role: Convert DNA sequence to amino acid sequence using genetic code
// Used by: Protein comparison, mutation impact analysis, 3D visualization
};

DNA.Domain.translateToProtein = function translateToProtein(sequence) {
  const codons = DNA.Domain.splitIntoCodons(sequence);
  let protein = '';
  for (let codon of codons) {
    const aa = DNA.Core.GENETIC_CODE[codon];
    if (aa === '*') break;
    if (aa) protein += aa;
  }
  return protein;
};
