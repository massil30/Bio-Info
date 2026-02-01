// Domain layer: Mutation detection and impact analysis
window.DNA = window.DNA || {};
DNA.Domain = DNA.Domain || {};

// Role: Compare two DNA sequences and identify all mutations (substitutions, insertions, deletions)
// Used by: Mutation detection tab to find differences and classify mutation types
DNA.Domain.detectMutations = function detectMutations(seq1, seq2) {
  const mutations = [];
  const maxLength = Math.max(seq1.length, seq2.length);
  for (let i = 0; i < maxLength; i++) {
    const base1 = seq1[i] || '-';
    const base2 = seq2[i] || '-';
    if (base1 !== base2) {
      let type = 'substitution';
      let classification = '';
      if (base1 === '-') {
        type = 'insertion';
        classification = 'insertion';
      } else if (base2 === '-') {
        type = 'deletion';
        classification = 'deletion';
      } else {
        const purines = ['A', 'G'];
        const pyrimidines = ['C', 'T'];
        if (
          (purines.includes(base1) && purines.includes(base2)) ||
          (pyrimidines.includes(base1) && pyrimidines.includes(base2))
        ) {
          classification = 'transition';
        } else {
          classification = 'transversion';
        }
      }
      mutations.push({ position: i, original: base1, mutated: base2, type, classification });
    }
  }
  return mutations;
};

// Role: Classify the biological impact of mutations (silent, missense, nonsense, frameshift)
// Used by: Mutation detection to assess whether mutations affect protein function
DNA.Domain.analyzeMutationImpact = function analyzeMutationImpact(seq1, seq2) {
  const protein1 = DNA.Domain.translateToProtein(seq1);
  const protein2 = DNA.Domain.translateToProtein(seq2);
  if (protein1 === protein2) return { type: 'silent', description: 'No change in protein sequence' };
  if (protein2.includes('*') && !protein1.includes('*'))
    return { type: 'nonsense', description: 'Premature stop codon introduced' };
  if (protein1.length !== protein2.length)
    return { type: 'frameshift', description: 'Frameshift mutation affecting protein length' };
  return { type: 'missense', description: 'Amino acid sequence changed' };
};
