
print("=== Movimentos de Peças no Xadrez ===
")

# Torre: Move-se 5 casas à direita
coluna = 'a'
linha = 1
print("Torre: Posição inicial (a1)")
for i in range(1, 6):
    coluna = chr(ord(coluna) + 1)
    print(f"Direita -> {coluna}{linha}")
print("
")

# Bispo: Move-se 5 casas na diagonal (cima e direita)
coluna = 'c'
linha = 1
print("Bispo: Posição inicial (c1)")
i = 1
while i <= 5:
    coluna = chr(ord(coluna) + 1)
    linha += 1
    print(f"Cima, Direita -> {coluna}{linha}")
    i += 1
print("
")

# Rainha: Move-se 7 casas à esquerda
coluna = 'h'
linha = 3
print("Rainha: Posição inicial (h3)")
for i in range(1, 8):
    coluna = chr(ord(coluna) - 1)
    print(f"Esquerda -> {coluna}{linha}")
print("
")

# Cavalo: Move-se 2 casas para baixo e 1 à esquerda
coluna = 'f'
linha = 8
print("Cavalo: Posição inicial (f8)")
for i in range(1, 3):
    linha -= 1
    print(f"Baixo -> {coluna}{linha}")
    if i == 2:
        coluna = chr(ord(coluna) - 1)
        print(f"Esquerda -> {coluna}{linha}")
