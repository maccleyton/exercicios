
import os

LINHAS = 10
COLUNAS = 10
HABILIDADESLIN = 5
HABILIDADESCOL = 5

tabuleiro = [[0 for _ in range(COLUNAS)] for _ in range(LINHAS)]
matrizCone = [[0 for _ in range(HABILIDADESCOL)] for _ in range(HABILIDADESLIN)]
matrizCruz = [[0 for _ in range(HABILIDADESCOL)] for _ in range(HABILIDADESLIN)]
matrizOctaedro = [[0 for _ in range(HABILIDADESCOL)] for _ in range(HABILIDADESLIN)]

def cone(show):
    for i in range(HABILIDADESLIN):
        for j in range(HABILIDADESCOL):
            if i == 0 and j == 2:
                matrizCone[i][j] = 1
            elif i == 1 and 1 <= j <= 3:
                matrizCone[i][j] = 1
            elif i == 2 and 0 <= j <= 4:
                matrizCone[i][j] = 1
            else:
                matrizCone[i][j] = 0
    if show:
        print("Habilidade -> Cone de Fogo 🔥")
        for row in matrizCone:
            print(' '.join(map(str, row)))

def cruz(show):
    for i in range(HABILIDADESLIN):
        for j in range(HABILIDADESCOL):
            matrizCruz[i][j] = 1 if i == 2 or j == 2 else 0
    if show:
        print("Habilidade -> Cruzada 💥")
        for row in matrizCruz:
            print(' '.join(map(str, row)))

def octaedro(show):
    centro = HABILIDADESLIN // 2
    for i in range(HABILIDADESLIN):
        for j in range(HABILIDADESCOL):
            matrizOctaedro[i][j] = 1 if abs(i - centro) + abs(j - centro) <= 2 else 0
    if show:
        print("Habilidade -> Octaedro 🔷")
        for row in matrizOctaedro:
            print(' '.join(map(str, row)))

def inicializarTabuleiro():
    for i in range(LINHAS):
        for j in range(COLUNAS):
            tabuleiro[i][j] = 0

def exibirTabuleiro():
    print("
Tabuleiro de Batalha Naval:
")
    header = '   ' + ' '.join(chr(65 + i) for i in range(COLUNAS))
    print(header)
    for i in range(LINHAS):
        print(f"{i+1:2} " + ' '.join(map(str, tabuleiro[i])))

def aplicarHabilidade(linha, coluna, habilidade):
    centroLinha = HABILIDADESLIN // 2
    centroColuna = HABILIDADESCOL // 2
    for i in range(HABILIDADESLIN):
        for j in range(HABILIDADESCOL):
            if habilidade[i][j] == 1:
                alvoLinha = linha + i - centroLinha
                alvoColuna = coluna + j - centroColuna
                if 0 <= alvoLinha < LINHAS and 0 <= alvoColuna < COLUNAS:
                    tabuleiro[alvoLinha][alvoColuna] = 5

def instrucoes():
    print("Instruções do Jogo:
1. Escolha uma habilidade para atacar.
2. A habilidade afetará uma área específica.
3. Objetivo: atingir navios inimigos.
")
    input("Pressione ENTER para voltar...")

def iniciar():
    print("============Menu de Habilidades============")
    print("1. Cone de Fogo 🔥
2. Cruzada 💥
3. Octaedro 🔷
4. Sair")
    opcao = int(input("Escolha uma opção: "))
    linha = LINHAS // 2
    coluna = COLUNAS // 2
    inicializarTabuleiro()
    if opcao == 1:
        cone(True)
        aplicarHabilidade(linha, coluna, matrizCone)
    elif opcao == 2:
        cruz(True)
        aplicarHabilidade(linha, coluna, matrizCruz)
    elif opcao == 3:
        octaedro(True)
        aplicarHabilidade(linha, coluna, matrizOctaedro)
    elif opcao == 4:
        return
    exibirTabuleiro()
    input("Pressione ENTER para voltar...")

def menu():
    while True:
        print("
* Seja Bem-Vindo ao Jogo de Batalha Naval *
")
        print("1. Iniciar Jogo
2. Instruções
3. Sair do Jogo")
        opcao = int(input("Escolha uma opção: "))
        if opcao == 1:
            iniciar()
        elif opcao == 2:
            instrucoes()
        elif opcao == 3:
            print("Obrigado por jogar!")
            break
        else:
            print("Opção inválida!")

inicializarTabuleiro()
menu()
