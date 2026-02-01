# Mutation Test Files - Analysis Guide

## Overview
These two FASTA files contain a fragment of the human hemoglobin beta chain gene with intentional mutations to test the DNA analyzer's mutation detection capabilities.

---

## Files Created

1. **test_mutation_original.fasta** - Wild-type sequence (normal)
2. **test_mutation_mutated.fasta** - Sequence with multiple mutations

---

## Documented Mutations

The mutated sequence contains **3 specific mutations** at different positions to demonstrate various mutation types and their protein impacts:

### Mutation 1: Position 24
- **Location**: Codon 8
- **Original**: GAG (Glutamic acid, E)
- **Mutated**: GTG (Valine, V)
- **Type**: Transversion (A → T)
- **Classification**: Missense mutation
- **Protein Impact**: Amino acid change (E→V)
- **Biological Significance**: This is the famous **Sickle Cell mutation** (HBB c.20A>T)
  - One of the most studied mutations in human genetics
  - Causes sickle cell disease when homozygous
  - Provides malaria resistance when heterozygous

### Mutation 2: Position 114
- **Location**: Codon 38
- **Original**: CTG (Leucine, L)
- **Mutated**: TTG (Leucine, L)
- **Type**: Transition (C → T)
- **Classification**: Silent (synonymous) mutation
- **Protein Impact**: None - same amino acid produced
- **Biological Significance**: Demonstrates genetic code redundancy
  - Both CTG and TTG code for Leucine
  - DNA changes but protein remains identical
  - May still affect mRNA stability or translation speed

### Mutation 3: Position 398
- **Location**: Codon 133
- **Original**: AAA (Lysine, K)
- **Mutated**: AAG (Lysine, K)
- **Type**: Transition (A → G)
- **Classification**: Silent (synonymous) mutation
- **Protein Impact**: None - same amino acid produced
- **Biological Significance**: Another example of codon redundancy
  - Both AAA and AAG code for Lysine
  - Common polymorphism with no clinical significance

---

## Expected Analysis Results

When you load these files into the DNA analyzer:

### Mutation Overview
- **Total Mutations**: 3
- **Mutation Rate**: ~0.68% (3 mutations / 444 bp × 100)
- **Transitions**: 2 (C→T, A→G)
- **Transversions**: 1 (A→T)
- **Insertions**: 0
- **Deletions**: 0

### Mutation Classification Breakdown
- **Transition/Transversion Ratio**: 2:1 (typical for natural mutations)
- **Silent Mutations**: 2
- **Missense Mutations**: 1
- **Nonsense Mutations**: 0
- **Frameshift Mutations**: 0

### Protein Impact
- **Overall Impact**: Missense mutation (due to position 24 change)
- **Amino Acid Change**: 1 (Glutamic acid → Valine at position 8)
- **Protein Length**: Unchanged (147 amino acids)
- **Functional Impact**: Moderate (sickle cell mutation)

---

## How to Test

### Step 1: Load the Files
1. Open the DNA Analyzer application
2. Navigate to the "Mutation Detection" tab
3. Upload `test_mutation_original.fasta` in the left panel (Original Sequence)
4. Upload `test_mutation_mutated.fasta` in the right panel (Mutated Sequence)

### Step 2: Run Comparison
1. Click "🔬 Compare & Detect Mutations"
2. Wait for analysis to complete (should be instant)

### Step 3: Verify Results
Check that the application correctly identifies:

✅ **3 total mutations detected**
- Position 24: A → T (transversion)
- Position 114: C → T (transition)
- Position 398: A → G (transition)

✅ **Mutation classification**
- 2 transitions
- 1 transversion
- Ratio of ~2:1

✅ **Protein impact**
- 1 amino acid change (position 8: E → V)
- Overall classification: Missense mutation
- 2 silent mutations not affecting protein

✅ **Alignment visualization**
- Sequences aligned properly
- Mutations highlighted in red
- Match symbols (|) for identical positions
- Mismatch symbols (*) for mutations

---

## Biological Context

### Hemoglobin Beta Chain
- **Gene**: HBB (chromosome 11)
- **Protein**: Beta-globin subunit of hemoglobin
- **Function**: Oxygen transport in red blood cells
- **Length**: 147 amino acids (441 bp coding sequence)

### The Sickle Cell Mutation
The mutation at position 24 (GAG→GTG) is historically significant:
- **Discovery**: Linus Pauling (1949) - first "molecular disease"
- **Frequency**: Common in African, Mediterranean, Middle Eastern populations
- **Effect**: Hydrophilic glutamic acid replaced by hydrophobic valine
- **Consequence**: Hemoglobin polymerizes under low oxygen, causing red blood cells to sickle
- **Inheritance**: Autosomal recessive
- **Heterozygote advantage**: Protection against malaria

### Silent Mutations
The two silent mutations demonstrate:
- **Codon redundancy**: Multiple codons can code for the same amino acid
- **Third position wobble**: Changes at the 3rd codon position often don't affect amino acid
- **No protein change**: DNA sequence varies but protein sequence identical
- **Potential effects**: May affect RNA stability, translation speed, or splicing

---

## Testing Scenarios

### Scenario 1: Basic Mutation Detection
**Goal**: Verify the analyzer detects all mutations
**Expected**: 3 mutations found at positions 24, 114, 398

### Scenario 2: Classification Accuracy
**Goal**: Check transition vs. transversion classification
**Expected**: 2 transitions, 1 transversion correctly labeled

### Scenario 3: Protein Impact Analysis
**Goal**: Test silent vs. missense identification
**Expected**: 2 silent + 1 missense, overall impact = missense

### Scenario 4: Alignment Visualization
**Goal**: Visual representation correctness
**Expected**: Proper alignment with highlighted mutations

### Scenario 5: Statistical Accuracy
**Goal**: Verify mutation rate calculation
**Expected**: ~0.68% mutation rate (3/444 × 100)

---

## Advanced Testing

### Create Your Own Variants

You can modify these files to test additional scenarios:

**Test Nonsense Mutation:**
- Change codon from sense to stop (e.g., TGG → TGA)
- Should detect nonsense mutation
- Protein translation should terminate early

**Test Frameshift:**
- Insert or delete 1-2 nucleotides (not multiples of 3)
- Should detect frameshift mutation
- Protein sequence should differ dramatically downstream

**Test Multiple Missense:**
- Change several codons to different amino acids
- Should detect multiple missense mutations
- Protein sequence should show multiple changes

**Test Insertion:**
- Add 3 nucleotides (maintains frame)
- Should detect as insertion
- Protein gains one amino acid

**Test Deletion:**
- Remove 3 nucleotides (maintains frame)
- Should detect as deletion
- Protein loses one amino acid

---

## Troubleshooting

### Issue: Mutations not detected
**Solution**: Ensure both files are properly formatted FASTA and contain only A, T, C, G

### Issue: Wrong mutation count
**Solution**: Check files are loaded in correct panels (original vs. mutated)

### Issue: Incorrect position numbers
**Solution**: Positions are 0-indexed (first nucleotide = position 0)

### Issue: Protein impact seems wrong
**Solution**: Verify the genetic code table is correct and ORF detection is working

---

## Educational Value

These test files demonstrate:

1. **Real-world mutation**: Sickle cell disease mutation
2. **Multiple mutation types**: Transition, transversion, silent, missense
3. **Genetic code redundancy**: Silent mutations show codon wobble
4. **Clinical relevance**: Connection to actual genetic disease
5. **Population genetics**: Balanced polymorphism (malaria resistance)

---

## References

1. **Sickle Cell Mutation**
   - Pauling et al. (1949) "Sickle Cell Anemia: A Molecular Disease"
   - HBB Gene - NCBI Gene ID: 3043
   - ClinVar: rs334 (c.20A>T, p.Glu7Val)

2. **Hemoglobin Structure**
   - PDB: 1HBS (Deoxy Hemoglobin S)
   - UniProt: P68871 (HBB_HUMAN)

3. **Population Genetics**
   - Allison (1954) "Protection afforded by sickle-cell trait against malaria"
   - WHO data on sickle cell distribution

---

## Quick Reference

**Sequence Length**: 444 bp (148 codons)
**GC Content**: ~50%
**Complete ORF**: Yes (starts with ATG, ends with TAA)
**Protein Product**: 147 amino acids (excluding stop codon)

**Mutation Summary Table**:
| Position | Original | Mutated | Type | Classification | Impact |
|----------|----------|---------|------|----------------|--------|
| 24 | A | T | Substitution | Transversion | Missense (E→V) |
| 114 | C | T | Substitution | Transition | Silent (L→L) |
| 398 | A | G | Substitution | Transition | Silent (K→K) |

---

**Ready to test mutation detection! Load both files and compare.** 🧬
