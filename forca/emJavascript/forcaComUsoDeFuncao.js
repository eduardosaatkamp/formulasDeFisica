// Função para calcular a força
function calcularForca(massa, aceleracao) {
    return massa * aceleracao;
}

// Chamando a função para calcular a força
const forca = calcularForca(massa, aceleracao);

// Variáveis
let massa = 10; // Massa em kg
let aceleracao = 5; // Aceleração em m/s^2

// Exibindo o resultado
console.log("Força = " + forca + "N");

/* 
 
// Função para calcular a força
function calcularForca(massa, aceleracao) {
    return massa * aceleracao; }    

// Exibindo o resultado
console.log("Força = " + calcularForca(5, 10) + "N");

 */