// Função para calcular a área do triângulo com tipagem
function calcularAreaTriangulo(altura: number, base: number): number {
    const area = (base * altura) / 2;
    return area;
}

// Exibindo o resultado da função
console.log(`A área do triângulo é: ${calcularAreaTriangulo(10, 5)} unidades de área`);

// Outra solução com variáveis tipadas
let altura: number = 10;
let base: number = 5;
const area: number = (base * altura) / 2;
console.log(`A área do triângulo é: ${area} unidades de área`);
