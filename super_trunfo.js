
const readline = require('readline-sync');

function main() {
    console.log("=== Super Trunfo ===
");

    // Entrada de dados para duas cidades
    let estado1 = readline.question("Digite o estado da primeira cidade: ");
    let codCarta1 = readline.question("Digite o código da carta da primeira cidade: ");
    let cidade1 = readline.question("Digite o nome da primeira cidade: ");
    let populacao1 = parseInt(readline.question("Digite o número de habitantes da primeira cidade: "));
    let area1 = parseFloat(readline.question("Digite a área da primeira cidade: "));
    let pib1 = parseFloat(readline.question("Digite o PIB (em milhares) da primeira cidade: "));
    let pontosTuristicos1 = parseInt(readline.question("Digite o número de pontos turísticos da primeira cidade: "));

    let densidade1 = populacao1 / area1;
    let pibPerCapita1 = (pib1 * 1000) / populacao1;

    let estado2 = readline.question("Digite o estado da segunda cidade: ");
    let codCarta2 = readline.question("Digite o código da carta da segunda cidade: ");
    let cidade2 = readline.question("Digite o nome da segunda cidade: ");
    let populacao2 = parseInt(readline.question("Digite o número de habitantes da segunda cidade: "));
    let area2 = parseFloat(readline.question("Digite a área da segunda cidade: "));
    let pib2 = parseFloat(readline.question("Digite o PIB (em milhares) da segunda cidade: "));
    let pontosTuristicos2 = parseInt(readline.question("Digite o número de pontos turísticos da segunda cidade: "));

    let densidade2 = populacao2 / area2;
    let pibPerCapita2 = (pib2 * 1000) / populacao2;

    let superPoder1 = populacao1 + area1 + pib1 + pontosTuristicos1 + pibPerCapita1 + (1 / densidade1);
    let superPoder2 = populacao2 + area2 + pib2 + pontosTuristicos2 + pibPerCapita2 + (1 / densidade2);

    console.log("
Comparaçao dos atributos:
1. Iniciar jogo...
2. Ver regras.
3. Sair.");
    let opcao = parseInt(readline.question("Escolha uma opção: "));

    if (opcao === 1) {
        console.log("Iniciando o jogo...");
        console.log("## Selecione o 1º atributo para comparar ##");
        console.log("1. População
2. Área
3. PIB
4. Pontos Turísticos
5. Densidade Demográfica
6. PIB per Capita
7. Super Poder");
        let atributo1 = parseInt(readline.question("Escolha um atributo: "));

        console.log("## Selecione o 2º atributo para comparar ##");
        let atributo2 = parseInt(readline.question("Escolha um atributo diferente do primeiro: "));

        if (atributo1 === atributo2) {
            console.log("Atributos iguais não são permitidos! Favor reiniciar o jogo.");
            return;
        }

        let pontos1 = 0, pontos2 = 0;

        function compara(attr, nome) {
            let v1, v2;
            switch(attr) {
                case 1: v1 = populacao1; v2 = populacao2; break;
                case 2: v1 = area1; v2 = area2; break;
                case 3: v1 = pib1; v2 = pib2; break;
                case 4: v1 = pontosTuristicos1; v2 = pontosTuristicos2; break;
                case 5: v1 = densidade1; v2 = densidade2; break;
                case 6: v1 = pibPerCapita1; v2 = pibPerCapita2; break;
                case 7: v1 = superPoder1; v2 = superPoder2; break;
            }
            console.log(`
Comparando ${nome}: ${cidade1} (${v1}) vs ${cidade2} (${v2})`);
            if (attr === 5) { // densidade menor vence
                if (v1 < v2) { pontos1 += 3; console.log(`Vencedor: ${cidade1}`); }
                else if (v2 < v1) { pontos2 += 3; console.log(`Vencedor: ${cidade2}`); }
                else { pontos1++; pontos2++; console.log("Empate!"); }
            } else {
                if (v1 > v2) { pontos1 += 3; console.log(`Vencedor: ${cidade1}`); }
                else if (v2 > v1) { pontos2 += 3; console.log(`Vencedor: ${cidade2}`); }
                else { pontos1++; pontos2++; console.log("Empate!"); }
            }
        }

        compara(atributo1, "Atributo 1");
        compara(atributo2, "Atributo 2");

        console.log("
=== Resultado da Rodada ===");
        console.log(`${cidade1}: ${pontos1} pontos
${cidade2}: ${pontos2} pontos`);
        if (pontos1 > pontos2) console.log(`${cidade1} venceu a rodada!`);
        else if (pontos2 > pontos1) console.log(`${cidade2} venceu a rodada!`);
        else console.log("Empate na rodada!");

    } else if (opcao === 2) {
        console.log("1. Regra geral: vence a carta com o maior valor no atributo escolhido.
2. Densidade demográfica: vence a carta com o menor valor.");
    } else {
        console.log("Saindo do jogo...");
    }
}

main();
