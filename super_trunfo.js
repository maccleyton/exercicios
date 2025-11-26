// "Super Trunfo" de cidades em JavaScript

function input(msg) {
  const resp = prompt(msg);
  return resp === null ? "" : resp;
}

function main() {
  // Dados das cidades
  let estado1, estado2;
  let codCarta1, codCarta2;
  let cidade1, cidade2;
  let populacao1, populacao2;
  let pontosTuristicos1, pontosTuristicos2;
  let area1, area2;
  let pib1, pib2;
  let densidade1, densidade2;
  let pibPerCapita1, pibPerCapita2;
  let superPoder1, superPoder2;

  let opcao, atributo1, atributo2;
  let soma1, soma2; // não usados, preservados se quiser evoluir
  let pontos1 = 0, pontos2 = 0;
  let valor1_atrib1 = 0, valor2_atrib1 = 0, valor1_atrib2 = 0, valor2_atrib2 = 0;

  // Entrada da primeira cidade
  estado1 = input("Digite o estado da primeira cidade (letra): ").trim();
  estado1 = estado1.charAt(0) || "";

  codCarta1 = input("Digite o código da carta da primeira cidade: ").trim();
  cidade1 = input("Digite o nome da primeira cidade (sem espaços): ").trim();

  populacao1 = parseInt(input("Digite o número de habitantes da primeira cidade: "), 10);
  area1 = parseFloat(input("Digite a área da primeira cidade: "));
  pib1 = parseFloat(input("Digite o PIB (em milhares) da primeira cidade: "));
  pontosTuristicos1 = parseInt(input("Digite o número de pontos turísticos da primeira cidade: "), 10);
  console.log("");

  densidade1 = populacao1 / area1;
  pibPerCapita1 = (pib1 * 1000.0) / populacao1;

  // Segunda cidade
  estado2 = input("Digite o estado da segunda cidade (letra): ").trim();
  estado2 = estado2.charAt(0) || "";

  codCarta2 = input("Digite o código da carta da segunda cidade: ").trim();
  cidade2 = input("Digite o nome da segunda cidade (sem espaços): ").trim();

  populacao2 = parseInt(input("Digite o número de habitantes da segunda cidade: "), 10);
  area2 = parseFloat(input("Digite a área da segunda cidade: "));
  pib2 = parseFloat(input("Digite o PIB (em milhares) da segunda cidade: "));
  pontosTuristicos2 = parseInt(input("Digite o número de pontos turísticos da segunda cidade: "), 10);
  console.log("");

  densidade2 = populacao2 / area2;
  pibPerCapita2 = (pib2 * 1000.0) / populacao2;

  superPoder1 = populacao1 + area1 + pib1 + pontosTuristicos1 + pibPerCapita1 + 1.0 / densidade1;
  superPoder2 = populacao2 + area2 + pib2 + pontosTuristicos2 + pibPerCapita2 + 1.0 / densidade2;

  console.log("Comparação dos atributos:");
  console.log("1. Iniciar jogo...");
  console.log("2. Ver regras.");
  console.log("3. Sair.");
  opcao = parseInt(input("Escolha uma opção: "), 10) || 0;
  console.log("");

  switch (opcao) {
    case 1:
      console.log("Iniciando o jogo...\n");
      console.log("## Selecione o 1º atributo para comparar ##");
      console.log("1. População");
      console.log("2. Área");
      console.log("3. PIB");
      console.log("4. Pontos Turísticos");
      console.log("5. Densidade Demográfica");
      console.log("6. PIB per Capita");
      console.log("7. Super Poder");
      atributo1 = parseInt(input("Escolha um atributo: "), 10) || 0;
      console.log("");

      // Menu dinâmico do 2º atributo
      console.log("## Selecione o 2º atributo para comparar ##");
      if (atributo1 !== 1) console.log("1. População");
      if (atributo1 !== 2) console.log("2. Área");
      if (atributo1 !== 3) console.log("3. PIB");
      if (atributo1 !== 4) console.log("4. Pontos Turísticos");
      if (atributo1 !== 5) console.log("5. Densidade Demográfica");
      if (atributo1 !== 6) console.log("6. PIB per Capita");
      if (atributo1 !== 7) console.log("7. Super Poder");
      atributo2 = parseInt(input("Escolha um atributo: "), 10) || 0;
      console.log("");

      if (atributo1 === atributo2) {
        console.log("Atributos iguais não são permitidos! Favor reiniciar o jogo.");
        return;
      }

      // ---- 1º atributo ----
      switch (atributo1) {
        case 1:
          valor1_atrib1 = populacao1; valor2_atrib1 = populacao2;
          console.log(`\nComparando População entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: População");
          console.log(`${cidade1}: ${populacao1} habitantes`);
          console.log(`${cidade2}: ${populacao2} habitantes`);

          if (valor1_atrib1 > valor2_atrib1) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib1 < valor2_atrib1) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 2:
          valor1_atrib1 = area1; valor2_atrib1 = area2;
          console.log(`\nComparando Área Territorial entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: Área Territorial");
          console.log(`${cidade1}: ${area1.toFixed(2)} km²`);
          console.log(`${cidade2}: ${area2.toFixed(2)} km²`);

          if (valor1_atrib1 > valor2_atrib1) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib1 < valor2_atrib1) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 3:
          valor1_atrib1 = pib1; valor2_atrib1 = pib2;
          console.log(`\nComparando PIB entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: PIB");
          console.log(`${cidade1}: ${pib1.toFixed(2)} (milhares) reais`);
          console.log(`${cidade2}: ${pib2.toFixed(2)} (milhares) reais`);

          if (valor1_atrib1 > valor2_atrib1) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib1 < valor2_atrib1) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 4:
          valor1_atrib1 = pontosTuristicos1; valor2_atrib1 = pontosTuristicos2;
          console.log(`\nComparando Pontos Turísticos entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: Pontos Turísticos");
          console.log(`${cidade1}: ${pontosTuristicos1} pontos turísticos`);
          console.log(`${cidade2}: ${pontosTuristicos2} pontos turísticos`);

          if (valor1_atrib1 > valor2_atrib1) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib1 < valor2_atrib1) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 5:
          // menor densidade vence
          valor1_atrib1 = densidade1; valor2_atrib1 = densidade2;
          console.log(`\nComparando Densidade Demográfica entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: Densidade Demográfica");
          console.log(`${cidade1}: ${densidade1.toFixed(2)} hab/km²`);
          console.log(`${cidade2}: ${densidade2.toFixed(2)} hab/km²`);

          if (valor1_atrib1 < valor2_atrib1) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib1 > valor2_atrib1) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 6:
          valor1_atrib1 = pibPerCapita1; valor2_atrib1 = pibPerCapita2;
          console.log(`\nComparando PIB per Capita entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: PIB per Capita");
          console.log(`${cidade1}: ${pibPerCapita1.toFixed(2)}`);
          console.log(`${cidade2}: ${pibPerCapita2.toFixed(2)}`);

          if (valor1_atrib1 > valor2_atrib1) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib1 < valor2_atrib1) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 7:
          valor1_atrib1 = superPoder1; valor2_atrib1 = superPoder2;
          console.log(`\nComparando Super Poder entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: Super Poder");
          console.log(`${cidade1}: ${superPoder1.toFixed(2)}`);
          console.log(`${cidade2}: ${superPoder2.toFixed(2)}`);

          if (valor1_atrib1 > valor2_atrib1) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib1 < valor2_atrib1) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        default:
          console.log("Opção inválida para o 1º atributo!");
          return;
      }

      // ---- 2º atributo ----
      switch (atributo2) {
        case 1:
          valor1_atrib2 = populacao1; valor2_atrib2 = populacao2;
          console.log(`\nComparando População entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: População");
          console.log(`${cidade1}: ${populacao1} habitantes`);
          console.log(`${cidade2}: ${populacao2} habitantes`);

          if (valor1_atrib2 > valor2_atrib2) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib2 < valor2_atrib2) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 2:
          valor1_atrib2 = area1; valor2_atrib2 = area2;
          console.log(`\nComparando Área Territorial entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: Área Territorial");
          console.log(`${cidade1}: ${area1.toFixed(2)} km²`);
          console.log(`${cidade2}: ${area2.toFixed(2)} km²`);

          if (valor1_atrib2 > valor2_atrib2) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib2 < valor2_atrib2) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 3:
          valor1_atrib2 = pib1; valor2_atrib2 = pib2;
          console.log(`\nComparando PIB entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: PIB");
          console.log(`${cidade1}: ${pib1.toFixed(2)} (milhares) reais`);
          console.log(`${cidade2}: ${pib2.toFixed(2)} (milhares) reais`);

          if (valor1_atrib2 > valor2_atrib2) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib2 < valor2_atrib2) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 4:
          valor1_atrib2 = pontosTuristicos1; valor2_atrib2 = pontosTuristicos2;
          console.log(`\nComparando Pontos Turísticos entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: Pontos Turísticos");
          console.log(`${cidade1}: ${pontosTuristicos1} pontos turísticos`);
          console.log(`${cidade2}: ${pontosTuristicos2} pontos turísticos`);

          if (valor1_atrib2 > valor2_atrib2) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib2 < valor2_atrib2) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 5:
          valor1_atrib2 = densidade1; valor2_atrib2 = densidade2;
          console.log(`\nComparando Densidade Demográfica entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: Densidade Demográfica");
          console.log(`${cidade1}: ${densidade1.toFixed(2)} hab/km²`);
          console.log(`${cidade2}: ${densidade2.toFixed(2)} hab/km²`);

          if (valor1_atrib2 < valor2_atrib2) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib2 > valor2_atrib2) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 6:
          valor1_atrib2 = pibPerCapita1; valor2_atrib2 = pibPerCapita2;
          console.log(`\nComparando PIB per Capita entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: PIB per Capita");
          console.log(`${cidade1}: ${pibPerCapita1.toFixed(2)}`);
          console.log(`${cidade2}: ${pibPerCapita2.toFixed(2)}`);

          if (valor1_atrib2 > valor2_atrib2) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib2 < valor2_atrib2) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        case 7:
          valor1_atrib2 = superPoder1; valor2_atrib2 = superPoder2;
          console.log(`\nComparando Super Poder entre ${cidade1} e ${cidade2}`);
          console.log("Atributo: Super Poder");
          console.log(`${cidade1}: ${superPoder1.toFixed(2)}`);
          console.log(`${cidade2}: ${superPoder2.toFixed(2)}`);

          if (valor1_atrib2 > valor2_atrib2) {
            pontos1 += 3;
            console.log(`Vencedor: Carta 1 (${cidade1})`);
          } else if (valor1_atrib2 < valor2_atrib2) {
            pontos2 += 3;
            console.log(`Vencedor: Carta 2 (${cidade2})`);
          } else {
            pontos1 += 1; pontos2 += 1;
            console.log("Empate!");
          }
          break;

        default:
          console.log("Opção inválida para o 2º atributo!");
          return;
      }

      console.log("\n=== Resultado da Rodada ===");
      console.log(`${cidade1} vs ${cidade2}\n`);
      console.log(`Atributo 1: ${valor1_atrib1.toFixed(2)} | ${valor2_atrib1.toFixed(2)}`);
      console.log(`Atributo 2: ${valor1_atrib2.toFixed(2)} | ${valor2_atrib2.toFixed(2)}\n`);
      console.log("Pontos:");
      console.log(`${cidade1}: ${pontos1}`);
      console.log(`${cidade2}: ${pontos2}\n`);

      if (pontos1 > pontos2) {
        console.log(`${cidade1} venceu a rodada!`);
      } else if (pontos2 > pontos1) {
        console.log(`${cidade2} venceu a rodada!`);
      } else {
        console.log("Empate na rodada!");
      }

      break;

    case 2:
      console.log("1. Regra geral: vence a carta com o maior valor no atributo escolhido.");
      console.log("2. Densidade demográfica: vence a carta com o menor valor.");
      break;

    case 3:
      console.log("Saindo do jogo...");
      break;

    default:
      console.log("Opção inválida!");
  }
}

// Chamada principal (no navegador, por exemplo, em <script> no final da página)
main();
