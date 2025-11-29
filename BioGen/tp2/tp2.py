

def read_fasta(path):
    sequences = {}
    current_id = None
    current_seq = []

    with open(path, "r") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue

            if line.startswith(">"):      # Header
                if current_id:
                    sequences[current_id] = "".join(current_seq)
                current_id = line[1:]     # Remove '>'
                current_seq = []
            else:
                current_seq.append(line)

        # Add the last sequence
        if current_id:
            sequences[current_id] = "".join(current_seq)

    return sequences






def adn_to_arn(adn):
    
  
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


def read_and_convert():
    adn =read_fasta("sequence.fasta")
    for seq in adn.values():
        print(seq)
        adn_to_arn(seq)
    
read_and_convert()
    