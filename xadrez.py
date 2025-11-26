# Movimentação de peças de xadrez em Python

def main():
    # Torre
    i = 1
    coluna = 'a'
    linha = 1
    print("Torre: Posição inicial (a1)")
    while i <= 5:
        coluna = chr(ord(coluna) + 1)
        print(f"Direita -> {coluna}{linha}")
        i += 1
    print()

    # Bispo
    i = 1
    coluna = 'c'
    linha = 1
    print("Bispo: Posição inicial (c1)")
    while True:
        coluna = chr(ord(coluna) + 1)
        linha += 1
        print(f"Cima, Direita -> {coluna}{linha}")
        i += 1
        if i > 5:
            break
    print()

    # Rainha
    coluna = 'h'
    linha = 3
    print("Rainha: Posição inicial (h3)")
    for i in range(1, 8):
        coluna = chr(ord(coluna) - 1)
        print(f"Esquerda -> {coluna}{linha}")
    print()

    # Cavalo
    coluna = 'f'
    linha = 8
    print("Cavalo: Posição inicial (f8)")
    for i in range(1, 3):
        linha -= 1
        print(f"Baixo -> {coluna}{linha}")

        j = i
        while j == 2:  # executa apenas na segunda iteração
            coluna = chr(ord(coluna) - 1)
            print(f"Esquerda -> {coluna}{linha}")
            j += 1
    print()


if __name__ == "__main__":
    main()
