# tp1.py Transformer ADN vers ARN
def adn_to_arn():
    adn = input("Enter ADN sequence: ")
#Methode 1 
    print("ADN =", adn)
    arn = adn.upper().replace("T", "U")
    print("ARN =", arn)

#Methode 2
    seq = adn.upper()
    trans = str.maketrans({'A': 'U', 'T': 'A', 'C': 'G', 'G': 'C'})
    arn2 = seq.translate(trans)
    print("ARN2 =", arn2)
    return adn

adn_to_arn()

def percentage():
    val = adn_to_arn()
    length = len(val)
    count_C = val.count('C')
    count_G = val.count('G')
    print('ADN = ' , val )
    print('ADN Length = ' , val )
    print('C = ' , count_C )
    print('G = ' , count_G )
    p_C=count_C*100/length
    p_G=count_G*100/length
    print('C% = ' , p_C )
    print('G% = ' , p_G )


#percentage()



def protein():
    arn = input("Enter ARN sequence: ").upper()  # RNA input

    rna_codon_table = {
        "UUU": "F", "UUC": "F", "UUA": "L", "UUG": "L",
        "UCU": "S", "UCC": "S", "UCA": "S", "UCG": "S",
        "UAU": "Y", "UAC": "Y",
        "UAA": "STOP", "UAG": "STOP", "UGA": "STOP",
        "UGU": "C", "UGC": "C",
        "UGG": "W",
        "CUU": "L", "CUC": "L", "CUA": "L", "CUG": "L",
        "CCU": "P", "CCC": "P", "CCA": "P", "CCG": "P",
        "CAU": "H", "CAC": "H",
        "CAA": "Q", "CAG": "Q",
        "CGA": "R", "CGC": "R", "CGG": "R", "CGU": "R",
        "AUU": "I", "AUC": "I", "AUA": "I",
        "AUG": "M",
        "ACU": "T", "ACC": "T", "ACA": "T", "ACG": "T",
        "AAU": "N", "AAC": "N",
        "AAA": "K", "AAG": "K",
        "AGU": "S", "AGC": "S",
        "AGA": "R", "AGG": "R",
        "GUU": "V", "GUC": "V", "GUA": "V", "GUG": "V",
        "GCU": "A", "GCC": "A", "GCA": "A", "GCG": "A",
        "GAU": "D", "GAC": "D",
        "GAA": "E", "GAG": "E",
        "GGU": "G", "GGC": "G", "GGG": "G", "GGA": "G",
    }

    protein_seq = ""
    for i in range(0, len(arn), 3):
        codon = arn[i:i+3]
        if len(codon) < 3:
            break  # ignore incomplete codons at the end
        amino_acid = rna_codon_table.get(codon, "")
        if amino_acid == "STOP":
            print("Translation stopped at codon", codon)
            break
        protein_seq += amino_acid

    print("Protein sequence:", protein_seq)

# Run the function
protein()
