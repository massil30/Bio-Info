# DNA Sequence Analysis & Mutation Detection System

A comprehensive bioinformatics web application for analyzing DNA sequences, detecting mutations, and predicting protein sequences.

![DNA Analyzer](https://img.shields.io/badge/Bioinformatics-DNA%20Analysis-blue)
![Version](https://img.shields.io/badge/version-1.0-green)
![License](https://img.shields.io/badge/license-Educational-orange)

---

## 📋 Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Usage Guide](#usage-guide)
- [Input Format](#input-format)
- [Example Workflows](#example-workflows)
- [Understanding Results](#understanding-results)
- [Technical Details](#technical-details)
- [Troubleshooting](#troubleshooting)
- [Educational Resources](#educational-resources)

---

## ✨ Features

### Part 1: Single Sequence Analysis
- ✅ **Sequence Validation** - Ensures only valid nucleotides (A, T, C, G)
- ✅ **Basic Statistics** - Length, nucleotide counts, GC%, AT%
- ✅ **Reverse Complement** - Generates complementary strand
- ✅ **Codon Analysis** - Splits into triplets, identifies start/stop codons
- ✅ **ORF Detection** - Finds open reading frames in all three frames
- ✅ **Protein Translation** - Converts DNA to amino acid sequences

### Part 2: Mutation Detection
- ✅ **Sequence Comparison** - Aligns and compares two sequences
- ✅ **Mutation Classification** - Identifies transitions, transversions, insertions, deletions
- ✅ **Mutation Rate** - Calculates percentage of mutations
- ✅ **ORF Comparison** - Compares open reading frames before/after mutation
- ✅ **Protein Impact** - Analyzes silent, missense, nonsense, frameshift mutations

### Part 3: Visualization
- ✅ **Color-Coded Display** - Each nucleotide has distinct color
- ✅ **Alignment View** - Shows matches and mutations
- ✅ **Interactive Interface** - Modern, responsive design
- ✅ **Statistical Dashboard** - Visual metrics and charts

### Part 4: 3D Protein Visualization (Advanced Feature)
- ✅ **AlphaFold Integration** - AI-predicted protein structures
- ✅ **Interactive 3D Viewer** - Powered by NGL Viewer
- ✅ **Multiple Representations** - Cartoon, Ball & Stick, Surface, Ribbon, Space Fill
- ✅ **Color Schemes** - By Chain, Element, Position, B-factor
- ✅ **Mutation Highlighting** - Visual markers for mutation sites
- ✅ **6 Pre-loaded Proteins** - Including Hemoglobin, Insulin, p53, GFP
- ✅ **Interactive Controls** - Rotate, zoom, pan, spin

---

## 🚀 Quick Start

### Option 1: Direct Browser Access
1. Open `dna-analyzer.html` in any modern web browser
2. No installation or server required!

### Option 2: Local Server (Optional)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Then open http://localhost:8000/dna-analyzer.html
```

---

## 📖 Usage Guide

### Single Sequence Analysis

#### Step 1: Input Your Sequence
**Method A: Copy & Paste**
```
>My_Sequence_Name
ATGCGATCGATCGATCGATCG
```

**Method B: Upload File**
- Click "Choose File"
- Select a .fasta, .fa, or .txt file
- Sequence loads automatically

#### Step 2: Analyze
- Click "🧬 Analyze Sequence"
- Results appear instantly below

#### Step 3: Review Results
- **Statistics**: Length, nucleotide counts, GC/AT content
- **Reverse Complement**: Complementary DNA strand
- **Codons**: Visual representation with start/stop highlighting
- **ORFs**: All detected open reading frames
- **Proteins**: Translated amino acid sequences

### Mutation Detection

#### Step 1: Input Two Sequences
- **Original Sequence** (left panel)
- **Mutated Sequence** (right panel)

#### Step 2: Compare
- Click "🔬 Compare & Detect Mutations"
- Analysis runs automatically

#### Step 3: Review Results
- **Mutation Overview**: Total mutations, mutation rate, classification
- **Alignment View**: Visual comparison with highlighting
- **Mutation Details**: Position-by-position changes
- **Protein Impact**: Effect on amino acid sequence

---

## 📝 Input Format

### FASTA Format
```
>Sequence_Header_Name
ATGCGATCGATCGATCG
ATCGATCGATCGATCGA
```

### Rules
- Header line starts with `>`
- Sequence on following lines
- Only A, T, C, G nucleotides
- Case insensitive (converted to uppercase)
- Whitespace ignored

### Valid Example
```
>Human_BRCA1_Fragment
ATGTTGTGTTGGATCCGCCAAGGAGTTAGTACATAGGCTGTGTGAGAGTTTATTAGGCCA
GTTTTTATTTGTTGTTTATTGGATGATGAAATGAATAGAGTTATTTTGTTTGGTTTTGA
```

### Invalid Examples
❌ Contains invalid characters: `ATGCN` (N is not valid)  
❌ Missing header: Just sequence without `>`  
❌ Mixed characters: `ATGC123` (numbers not valid)

---

## 🔬 Example Workflows

### Workflow 1: Basic Gene Analysis
**Goal:** Analyze a gene to find coding regions

1. Load `example_simple_sequence.fasta` (GFP gene)
2. Click "Analyze Sequence"
3. Check statistics for GC content (~40% for GFP)
4. Review ORFs - should find main coding region
5. Examine translated protein sequence

**Expected Results:**
- Length: ~700 bp
- GC Content: ~40%
- ORFs: 1 main ORF starting with ATG
- Protein: ~238 amino acids

### Workflow 2: Mutation Impact Study
**Goal:** Understand how a mutation affects protein

1. Load `example_normal_sequence.fasta` as original
2. Load `example_mutated_sequence.fasta` as mutated
3. Click "Compare & Detect Mutations"
4. Review mutation classification
5. Check protein impact analysis

**Expected Results:**
- Mutations: 1-2 substitutions
- Type: Transition or transversion
- Impact: Silent, missense, or nonsense
- Protein change: May or may not differ

### Workflow 3: Custom Sequence Testing
**Goal:** Test your own sequences

1. Create FASTA file with your sequence
2. Upload or paste into application
3. Run single analysis first to validate
4. Create variant with specific mutations
5. Compare to study mutation effects

### Workflow 4: 3D Protein Structure Exploration
**Goal:** Visualize protein structure in 3D

1. Navigate to "3D Protein Viewer" tab
2. Select a protein (e.g., Hemoglobin Beta for sickle cell)
3. Wait for AlphaFold structure to load
4. Use mouse to rotate and explore
5. Try different representations (Cartoon, Ball & Stick, Surface)
6. Change color schemes to understand different properties
7. If you've detected mutations, see them highlighted in 3D

**Expected Experience:**
- Interactive 3D structure from AlphaFold
- Multiple visualization modes
- Smooth rotation and zooming
- Mutation sites highlighted (if applicable)
- Educational protein information

---

## 📊 Understanding Results

### Statistics Panel

**Length**: Total base pairs in sequence
- Short: <100 bp (primers, probes)
- Medium: 100-10,000 bp (genes)
- Long: >10,000 bp (genomic regions)

**Nucleotide Counts**: Individual A, T, C, G frequencies
- Should sum to total length
- Ratios vary by organism and region

**GC Content**: (G + C) / Total × 100
- Bacteria: 25-75%
- Human genome average: 41%
- Gene-rich regions: Higher GC
- AT-rich regions: Often regulatory

**AT Content**: (A + T) / Total × 100
- Complement to GC content
- Always: GC% + AT% = 100%

### ORF Results

**Position**: Start and end coordinates (0-indexed)
**Frame**: 0, 1, or 2 (reading frame offset)
**Length**: Size in base pairs
**DNA Sequence**: The actual ORF nucleotides
**Protein Sequence**: Translated amino acids

**Interpreting ORFs:**
- Multiple ORFs: Possible overlapping genes
- Long ORFs (>300 bp): Likely protein-coding
- Short ORFs (<100 bp): Often false positives
- Frame matters: Same DNA, different proteins

### Mutation Classification

**Transition**: Purine ↔ Purine or Pyrimidine ↔ Pyrimidine
- A ↔ G (most common)
- C ↔ T (very common, especially at CpG sites)
- ~65% of all mutations

**Transversion**: Purine ↔ Pyrimidine
- A ↔ C or A ↔ T
- G ↔ C or G ↔ T
- ~35% of all mutations

**Insertion**: Extra nucleotide(s) added
- Can cause frameshift if not multiple of 3
- May disrupt protein structure

**Deletion**: Nucleotide(s) removed
- Can cause frameshift if not multiple of 3
- May create premature stop codon

### Protein Impact Types

**Silent (Synonymous)**
- DNA changed, protein unchanged
- Due to genetic code redundancy
- Example: GAA → GAG (both = Glutamate)
- Usually no functional effect

**Missense (Non-synonymous)**
- DNA changed, amino acid changed
- May or may not affect function
- Example: GAA → GTA (Glu → Val)
- Conservative vs. non-conservative changes matter

**Nonsense**
- Creates premature stop codon
- Results in truncated protein
- Example: TAT → TAA (Tyr → Stop)
- Usually severe functional impact

**Frameshift**
- Insertion/deletion not divisible by 3
- All downstream amino acids changed
- Often creates premature stop
- Usually severe functional impact

---

## 🔧 Technical Details

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Performance
- **Recommended**: Sequences up to 100,000 bp
- **Maximum tested**: 1,000,000 bp
- **Response time**: <1 second for typical genes

### Technologies Used
- React 18 (UI framework)
- JavaScript ES6+ (Logic)
- CSS3 (Styling)
- HTML5 File API (File upload)

### Algorithms
- **ORF Detection**: Linear scan, O(n) complexity
- **Translation**: Genetic code lookup, O(n/3)
- **Mutation Detection**: Position-by-position comparison, O(n)
- **All operations**: Optimized for speed and accuracy

---

## 🐛 Troubleshooting

### Common Issues

**Problem**: "Invalid sequence" error
- **Cause**: Non-ATCG characters in sequence
- **Solution**: Remove spaces, numbers, or other characters
- **Check**: Only A, T, C, G allowed

**Problem**: No ORFs found
- **Cause**: No start codon (ATG) or no valid stop codon
- **Solution**: Verify sequence is in correct orientation
- **Note**: Not all sequences contain ORFs

**Problem**: File upload doesn't work
- **Cause**: Wrong file format or encoding
- **Solution**: Save as plain text (.txt, .fasta, .fa)
- **Check**: File should be text, not Word or PDF

**Problem**: Protein sequence is short
- **Cause**: Early stop codon in sequence
- **Solution**: This may be correct - verify sequence
- **Note**: Some genes have short proteins

**Problem**: Mutation rate is 0% when comparing
- **Cause**: Sequences are identical
- **Solution**: Verify you loaded different sequences
- **Check**: Compare sequence lengths

**Problem**: Too many mutations detected
- **Cause**: Sequences may be unrelated
- **Solution**: Ensure sequences are variants of same gene
- **Note**: Compare similar sequences for best results

### Getting Help

If you encounter issues:
1. Check sequence format (FASTA)
2. Verify nucleotides (only ATCG)
3. Try example files first
4. Review error messages carefully

---

## 📚 Educational Resources

### Understanding DNA
- **DNA**: Deoxyribonucleic acid, genetic material
- **Nucleotides**: A (Adenine), T (Thymine), C (Cytosine), G (Guanine)
- **Base Pairing**: A-T and C-G (Watson-Crick)
- **Double Helix**: Two complementary strands

### Central Dogma
```
DNA → RNA → Protein
(Transcription → Translation)
```

### Genetic Code
- **Codons**: Three-nucleotide units
- **64 total**: 61 code amino acids, 3 are stop signals
- **Start codon**: ATG (Methionine)
- **Stop codons**: TAA, TAG, TGA

### Reading Frames
- **Frame 0**: Start at position 0
- **Frame 1**: Start at position 1
- **Frame 2**: Start at position 2
- Different frames = different proteins!

### Mutation Biology
- **Spontaneous**: ~10⁻⁹ per base per generation
- **UV light**: Causes thymine dimers
- **Chemicals**: Various mechanisms
- **Replication errors**: DNA polymerase mistakes

### Real-World Applications
- **Medicine**: Cancer mutation analysis
- **Forensics**: DNA fingerprinting
- **Agriculture**: Crop improvement
- **Evolution**: Phylogenetic studies
- **Biotechnology**: Protein engineering

---

## 📖 Glossary

**Amino Acid**: Building blocks of proteins (20 types)  
**Codon**: Three nucleotides coding for one amino acid  
**Complement**: Opposite strand (A↔T, C↔G)  
**FASTA**: Text format for biological sequences  
**Frameshift**: Mutation changing reading frame  
**GC Content**: Percentage of G and C nucleotides  
**Gene**: DNA sequence coding for a protein  
**Genetic Code**: Codon-to-amino-acid mapping  
**Missense**: Mutation changing amino acid  
**Nonsense**: Mutation creating stop codon  
**Nucleotide**: DNA building block (A, T, C, or G)  
**ORF**: Open Reading Frame (potential gene)  
**Silent**: Mutation not changing amino acid  
**Start Codon**: ATG (begins translation)  
**Stop Codon**: TAA, TAG, or TGA (ends translation)  
**Transition**: Purine↔Purine or Pyrimidine↔Pyrimidine  
**Translation**: DNA/RNA → Protein  
**Transversion**: Purine↔Pyrimidine  

---

## 🎓 Learning Exercises

### Exercise 1: Basic Analysis
1. Load `example_simple_sequence.fasta`
2. Find the GC content
3. How many ORFs are detected?
4. What is the protein sequence length?

### Exercise 2: Understanding Mutations
1. Create two sequences differing by one nucleotide
2. Compare them in mutation detection mode
3. Is it a transition or transversion?
4. Does it affect the protein? (Silent vs. missense?)

### Exercise 3: Frame Shift
1. Take any sequence
2. Insert one nucleotide near the start
3. Compare original vs. modified
4. Observe the frameshift impact on protein

### Exercise 4: Reverse Complement
1. Input a sequence
2. Get its reverse complement
3. Analyze both separately
4. Do they have the same ORFs? Why or why not?

### Exercise 5: Real Gene Analysis
1. Go to NCBI GenBank
2. Find a gene of interest
3. Copy its FASTA sequence
4. Analyze in this application
5. Compare with database annotation

---

## 📄 License

This project is developed for educational purposes as part of a bioinformatics course. Free to use for learning and research.

---

## 👥 Support

For questions about bioinformatics concepts, refer to:
- NCBI Learning Center
- Khan Academy (Genetics)
- Nature Education (Scitable)

For technical issues with the application, review:
- This README
- Technical Report
- Example files

---

## 🔮 Development Status

Completed features:
- ✅ 3D protein structure visualization
- ✅ AlphaFold database integration
- ✅ Interactive molecular viewer
- ✅ Multiple representation modes
- ✅ Mutation highlighting in 3D

Planned features:
- [ ] Multiple sequence alignment
- [ ] BLAST database search
- [ ] Export to PDF/CSV
- [ ] Phylogenetic tree generation
- [ ] Batch processing
- [ ] Custom PDB file upload

---

## 📊 Example Datasets Included

1. **example_simple_sequence.fasta**
   - GFP (Green Fluorescent Protein)
   - Well-characterized gene
   - Good for learning

2. **example_normal_sequence.fasta**
   - Longer coding sequence
   - Multiple ORFs
   - Complex analysis

3. **example_mutated_sequence.fasta**
   - Contains mutations
   - For comparison analysis
   - Demonstrates impact types

---

**Version**: 1.0  
**Last Updated**: January 23, 2026  
**Project Type**: Educational Bioinformatics Application

---

## Quick Reference Card

### Keyboard Shortcuts
- `Tab`: Navigate between input fields
- `Ctrl/Cmd + V`: Paste sequence
- `Enter`: Submit analysis (when in text area)

### File Format Quick Check
```
✅ Correct:
>Sequence_Name
ATGCGATCG

❌ Incorrect:
Sequence without header
ATGCN (invalid character)
ATG CGA (spaces in sequence)
```

### Color Code
- 🔵 **Cyan**: Adenine (A)
- 🔴 **Red**: Thymine (T)
- 🟢 **Teal**: Cytosine (C)
- 🟡 **Yellow**: Guanine (G)
- 🟣 **Purple**: Protein/Amino acids

---

**Ready to analyze DNA? Open the application and start exploring!** 🧬
