// Fórmula da força: F = m * a
// Função para calcular a força
function calcularForca(massa, aceleracao) {
    return massa * aceleracao;
}
// Variáveis
var massa = 10; // Massa em kg
var aceleracao = 5; // Aceleração em m/s^2
// Cálculo da força usando a função
var forca = calcularForca(massa, aceleracao);
// Exibindo o resultado
console.log("A força é:", forca, "N");
