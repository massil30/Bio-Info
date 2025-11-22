# tp1.py Transformer ADN vers ARN
def adn_to_arn():
    adn = input("Enter ADN sequence: ")
    print("ADN =", adn)

    arn = adn.upper().replace("T", "U")
    print("ARN =", arn)

adn_to_arn()
