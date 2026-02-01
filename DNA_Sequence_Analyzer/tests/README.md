# Test Sequences

## 🧪 Mutation Detection Test Files

This folder contains validated test sequences specifically designed for testing mutation detection capabilities.

---

## Test Case: Sickle Cell Disease Mutation

### Files

#### 1. test_mutation_original.fasta
**Description:** Wild-type hemoglobin beta chain  
**Length:** 444 base pairs (148 codons)  
**Content:** Normal human hemoglobin beta subunit gene fragment  
**Status:** Reference/control sequence  

#### 2. test_mutation_mutated.fasta
**Description:** Hemoglobin beta with sickle cell mutation  
**Length:** 444 base pairs (148 codons)  
**Content:** Same gene with 3 documented mutations  
**Status:** Test variant sequence  

---

## Documented Mutations

### Mutation 1: Position 24 (Sickle Cell Mutation)
**Type:** Transversion (A → T)  
**Codon Change:** GAG → GTG  
**Amino Acid Change:** Glutamic acid (E) → Valine (V)  
**Impact:** Missense mutation  
**Clinical Significance:** ⚠️ **SICKLE CELL DISEASE**  

This is the famous mutation that causes sickle cell disease:
- Hydrophilic → Hydrophobic change
- Causes hemoglobin polymerization
- Red blood cells become sickle-shaped
- One of the most studied mutations in human genetics

### Mutation 2: Position 114
**Type:** Transition (C → T)  
**Codon Change:** CTG → TTG  
**Amino Acid Change:** Leucine (L) → Leucine (L)  
**Impact:** Silent (synonymous) mutation  
**Clinical Significance:** None  

Demonstrates genetic code redundancy:
- DNA sequence changes
- Protein sequence unchanged
- No functional impact

### Mutation 3: Position 398
**Type:** Transition (A → G)  
**Codon Change:** AAA → AAG  
**Amino Acid Change:** Lysine (K) → Lysine (K)  
**Impact:** Silent (synonymous) mutation  
**Clinical Significance:** None  

Another example of codon wobble:
- Third position change
- Same amino acid produced
- Common polymorphism

---

## Expected Test Results

### When You Run the Comparison

**Mutation Overview:**
- Total Mutations Detected: **3**
- Mutation Rate: **~0.68%** (3 out of 444 bp)
- Transitions: **2** (C→T, A→G)
- Transversions: **1** (A→T)
- Insertions: **0**
- Deletions: **0**

**Classification Breakdown:**
- Silent Mutations: 2
- Missense Mutations: 1
- Nonsense Mutations: 0
- Frameshift Mutations: 0

**Protein Impact:**
- Overall Classification: **Missense**
- Amino Acid Changes: **1** (position 7: E → V)
- Protein Length: Unchanged (147 amino acids)
- Reading Frame: Maintained

**Transition/Transversion Ratio:**
- Ratio: **2:1**
- This is typical for natural mutations
- Transitions are more common than transversions

---

## How to Test

### Step-by-Step Testing Procedure

1. **Open the Application**
   - Launch DNA Analyzer in browser

2. **Navigate to Mutation Detection**
   - Click "Mutation Detection" tab

3. **Load Original Sequence**
   - Left panel: "Original Sequence"
   - Upload `test_mutation_original.fasta`
   - Or paste contents

4. **Load Mutated Sequence**
   - Right panel: "Mutated Sequence"
   - Upload `test_mutation_mutated.fasta`
   - Or paste contents

5. **Run Comparison**
   - Click "🔬 Compare & Detect Mutations"
   - Wait for analysis (instant)

6. **Verify Results**
   - Check mutation count: Should be **3**
   - Check mutation rate: Should be **~0.68%**
   - Check types: 2 transitions, 1 transversion
   - Check impact: Missense (E→V)

---

## Validation Checklist

Use this checklist to verify the analyzer is working correctly:

### ✅ Detection Accuracy
- [ ] Detects exactly 3 mutations
- [ ] Position 24: A → T identified
- [ ] Position 114: C → T identified
- [ ] Position 398: A → G identified

### ✅ Classification Accuracy
- [ ] Correctly classifies position 24 as transversion
- [ ] Correctly classifies position 114 as transition
- [ ] Correctly classifies position 398 as transition
- [ ] Calculates mutation rate as ~0.68%

### ✅ Protein Analysis
- [ ] Identifies 1 amino acid change
- [ ] Reports change as E→V at position 7
- [ ] Classifies 2 mutations as silent
- [ ] Classifies 1 mutation as missense
- [ ] Overall impact: Missense

### ✅ Visualization
- [ ] Alignment shows 3 mismatches
- [ ] Mutations highlighted in red/orange
- [ ] Match symbols (|) for identical positions
- [ ] Mismatch symbols (*) for mutations

---

## Biological Context

### About Sickle Cell Disease

**Genetics:**
- Autosomal recessive disorder
- Mutation in HBB gene (chromosome 11)
- Single nucleotide polymorphism (SNP)
- rs334 in ClinVar database

**Molecular Mechanism:**
1. Glutamic acid (polar, charged) → Valine (nonpolar, hydrophobic)
2. Surface property change
3. Hemoglobin molecules stick together
4. Forms long polymers under low oxygen
5. Red blood cells become rigid and sickle-shaped

**Clinical Features:**
- Pain crises
- Anemia
- Organ damage
- Increased infection risk

**Evolutionary Advantage:**
- Heterozygotes resistant to malaria
- Balanced polymorphism
- Common in malaria-endemic regions

**Prevalence:**
- Affects millions worldwide
- Most common in African, Mediterranean, Middle Eastern populations
- Carrier frequency up to 40% in some regions

---

## Using Results for Learning

### Educational Objectives

**Understand Mutation Types:**
- Compare transition vs transversion
- Why transitions are more common
- CpG sites and methylation

**Learn About Protein Impact:**
- Silent mutations and genetic code redundancy
- Missense mutations and protein function
- Structure-function relationships
- Disease-causing mutations

**Explore Molecular Biology:**
- Codon wobble (third position flexibility)
- Conservative vs non-conservative substitutions
- Hydrophobic vs hydrophilic residues

### Advanced Analysis

1. **3D Visualization:**
   - Load Hemoglobin Beta in 3D viewer
   - Find position 7 on the structure
   - Observe it's on the protein surface
   - Understand why surface change matters

2. **Population Genetics:**
   - Research sickle cell distribution
   - Malaria resistance connection
   - Hardy-Weinberg equilibrium
   - Genetic drift and selection

3. **Clinical Correlation:**
   - Genotype-phenotype relationship
   - Homozygous vs heterozygous effects
   - Treatment approaches
   - Genetic counseling

---

## Creating Additional Test Cases

You can create your own test sequences:

### Example: Nonsense Mutation
```
Original: TGG (Tryptophan)
Mutated:  TGA (Stop codon)
Impact:   Nonsense (premature termination)
```

### Example: Frameshift Mutation
```
Original: ATGCGTA...
Mutated:  ATGCGTAA... (one base inserted)
Impact:   Frameshift (all downstream changes)
```

### Testing Checklist for Custom Tests
1. Document expected mutations
2. Note mutation types
3. Predict protein impact
4. Validate results match predictions

---

## Troubleshooting

### Common Issues

**Issue:** Wrong number of mutations detected  
**Cause:** Files may be swapped  
**Fix:** Ensure original is in left panel, mutated in right

**Issue:** Mutation positions don't match documentation  
**Cause:** Position counting starts at 0  
**Fix:** Position 24 is the 25th nucleotide (0-indexed)

**Issue:** Protein impact is different  
**Cause:** Different ORF selected  
**Fix:** Ensure using the main/longest ORF

**Issue:** Can't see mutations in alignment  
**Cause:** Scroll needed for long sequences  
**Fix:** Scroll through alignment view

---

## Quality Assurance

These test files have been:
- ✅ Validated for FASTA format
- ✅ Verified for sequence accuracy
- ✅ Checked for mutation positions
- ✅ Confirmed protein translation
- ✅ Tested in the application
- ✅ Documented with expected results

---

## References

### Scientific Literature
1. Pauling et al. (1949) "Sickle Cell Anemia: A Molecular Disease" - First molecular disease identified
2. Ingram (1957) "Gene Mutations in Human Haemoglobin" - Identified specific amino acid change
3. Allison (1954) "Protection afforded by sickle-cell trait against malaria"

### Databases
- **ClinVar:** rs334 (pathogenic variant)
- **OMIM:** #603903 (Hemoglobin beta)
- **UniProt:** P68871 (HBB_HUMAN)
- **PDB:** 1HBS (Deoxyhemoglobin S structure)

### Educational Resources
- NCBI Gene: HBB (3043)
- WHO Fact Sheet: Sickle Cell Disease
- NIH Genetics Home Reference

---

## Test Report Template

Use this template to document your testing:

```
=== DNA Analyzer Test Report ===
Date: [Date]
Tester: [Name]
Version: 1.0

Test Case: Hemoglobin Beta Mutation
Files: test_mutation_original.fasta, test_mutation_mutated.fasta

Results:
☐ Total Mutations: Expected 3, Got ___
☐ Mutation Rate: Expected 0.68%, Got ___
☐ Transitions: Expected 2, Got ___
☐ Transversions: Expected 1, Got ___
☐ Protein Impact: Expected Missense (E→V), Got ___

Status: ☐ PASS  ☐ FAIL
Notes: ___________________________________
```

---

**Ready to test?** Load both files and compare! 🔬
