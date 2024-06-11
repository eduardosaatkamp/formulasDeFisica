// Função para calcular a área do triângulo com tipagem
function calcularAreaTriangulo(altura, base) {
    var area = (base * altura) / 2;
    return area;
}
// Exibindo o resultado da função
console.log("A \u00E1rea do tri\u00E2ngulo \u00E9: ".concat(calcularAreaTriangulo(10, 5), " unidades de \u00E1rea"));
// Outra solução com variáveis tipadas
var altura = 10;
var base = 5;
var area = (base * altura) / 2;
console.log("A \u00E1rea do tri\u00E2ngulo \u00E9: ".concat(area, " unidades de \u00E1rea"));
