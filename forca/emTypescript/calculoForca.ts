// Fórmula da força: F = m * a

// Função para calcular a força
function calcularForca(massa: number, aceleracao: number): number {
    return massa * aceleracao;
}

// Variáveis
let massa: number = 10; // Massa em kg
let aceleracao: number = 5; // Aceleração em m/s^2

// Cálculo da força usando a função
let forca: number = calcularForca(massa, aceleracao);

// Exibindo o resultado
console.log("A força é:", forca, "N");
