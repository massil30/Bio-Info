// Core layer: FASTA parsing and validation
window.DNA = window.DNA || {};
DNA.Core = DNA.Core || {};

// Role: Parse FASTA format input strings into structured header and sequence data
// Used by: UI input parsing and file upload handling
DNA.Core.parseFasta = function parseFasta(input) {
  const lines = (input || '').trim().split('\n');
  let sequence = '';
  let header = '';

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    if (line.startsWith('>')) {
      header = line.substring(1);
    } else {
      sequence += line.toUpperCase();
    }
  }

  return { header, sequence };
};

// Role: Validate that DNA sequences contain only valid nucleotides (A, T, C, G)
// Used by: Input validation before analysis to catch malformed sequences
DNA.Core.validateSequence = function validateSequence(sequence) {
  const validNucleotides = /^[ATCG]+$/;
  return validNucleotides.test(sequence || '');
};
