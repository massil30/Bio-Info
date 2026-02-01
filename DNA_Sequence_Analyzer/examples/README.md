# Example Sequences

## 📁 Learning Examples

This folder contains example FASTA files for learning and testing the DNA Sequence Analyzer.

---

## Files

### 1. example_simple_sequence.fasta
**Purpose:** Beginner-friendly example for first-time users

**Contents:** Green Fluorescent Protein (GFP) gene  
**Length:** ~720 base pairs  
**Source:** Aequorea victoria (jellyfish)  
**Complexity:** Simple, single ORF  

**What to Learn:**
- Basic sequence statistics
- Codon structure
- ORF detection
- Protein translation

**Expected Results:**
- GC Content: ~40%
- Main ORF: 1 (complete gene)
- Protein Length: ~238 amino acids
- Start Codon: Position varies
- Stop Codon: TAA at end

**Historical Note:** 
GFP won the Nobel Prize in Chemistry (2008) for its revolutionary impact on biological research as a fluorescent marker.

---

### 2. example_normal_sequence.fasta
**Purpose:** More complex sequence for intermediate users

**Contents:** Longer bacterial gene sequence  
**Length:** ~2,000+ base pairs  
**Complexity:** Multiple potential ORFs  

**What to Learn:**
- Complex sequence analysis
- Multiple reading frames
- Long ORF detection
- Statistical variation

**Expected Results:**
- GC Content: ~50%
- Multiple ORFs in different frames
- Longer protein sequences
- More complex codon patterns

**Use Case:**
Practice identifying the longest/most likely coding sequence among multiple ORFs.

---

### 3. example_mutated_sequence.fasta
**Purpose:** Paired with example_normal_sequence for mutation detection

**Contents:** Same gene with introduced mutations  
**Length:** Same as normal sequence  
**Mutations:** Contains point mutations  

**What to Learn:**
- Mutation detection
- Comparing sequences
- Understanding mutation types
- Protein impact analysis

**How to Use:**
1. Load `example_normal_sequence.fasta` as "Original"
2. Load `example_mutated_sequence.fasta` as "Mutated"
3. Run comparison analysis
4. Observe detected mutations

**Expected Results:**
- Small number of mutations detected
- Mix of transitions and transversions
- Possible protein changes

---

## How to Use These Files

### Method 1: File Upload
1. Open the DNA Analyzer application
2. Click "Choose File" button
3. Select desired example file
4. Sequence loads automatically

### Method 2: Copy & Paste
1. Open example file in text editor
2. Copy entire contents (including header)
3. Paste into application's text area
4. Click analyze button

---

## FASTA Format Explanation

All example files use standard FASTA format:

```
>Header_Line_Starting_With_Greater_Than
ATGCGATCGATCGATCG
TCGATCGATCGATCGAT
```

**Format Rules:**
- First line starts with `>` (header/description)
- Following lines contain DNA sequence
- Only letters A, T, C, G in sequence
- Case doesn't matter (converts to uppercase)
- Line breaks are ignored in sequence
- Spaces are ignored

---

## Learning Path

### Beginner Path
1. Start with `example_simple_sequence.fasta`
2. Analyze basic statistics
3. Explore codon breakdown
4. View protein translation
5. Try 3D viewer with GFP

### Intermediate Path
1. Analyze `example_normal_sequence.fasta`
2. Compare multiple ORFs
3. Identify most likely coding region
4. Understand GC content variation

### Advanced Path
1. Compare normal vs mutated sequences
2. Classify mutation types
3. Analyze protein impact
4. Map mutations to 3D structure

---

## Creating Your Own Examples

You can create custom FASTA files:

```
>My_Custom_Sequence
ATGAAACGCATTAGCACCACCATTACCACCACCATCACCATTACCACAGGT
AACGGTGCGGGCTGACGCGTACAGGAAACACAGAAAAAAGCCCGCACCTGA
```

**Tips:**
- Keep sequences focused (100-5000 bp ideal)
- Include complete ORFs (start with ATG, end with TAA/TAG/TGA)
- Validate sequence before using (only ATCG)
- Add descriptive headers for clarity

---

## Real Sequences

Want to analyze real genes? Get sequences from:

1. **NCBI GenBank**
   - https://www.ncbi.nlm.nih.gov/nucleotide/
   - Search for gene name
   - Download FASTA format
   - Paste into analyzer

2. **Ensembl**
   - https://www.ensembl.org/
   - Search genome database
   - Export sequence

3. **UniProt** (for protein-coding genes)
   - https://www.uniprot.org/
   - Get gene sequence
   - Convert to DNA if needed

---

## Troubleshooting

**Problem:** File won't load  
**Solution:** Ensure file is plain text (.fasta, .fa, .txt), not Word or PDF

**Problem:** "Invalid sequence" error  
**Solution:** Check for non-ATCG characters, remove if present

**Problem:** No ORFs found  
**Solution:** Sequence might not have complete ORF, or try reverse complement

**Problem:** Results seem wrong  
**Solution:** Verify FASTA format is correct (header starts with `>`)

---

## Quick Reference

| File | Type | Length | Complexity | Best For |
|------|------|--------|------------|----------|
| simple | GFP | ~720 bp | Low | Beginners |
| normal | Gene | ~2000 bp | Medium | Practice |
| mutated | Variant | ~2000 bp | Medium | Comparison |

---

**Ready to start analyzing?** Open `example_simple_sequence.fasta` first! 🧬
