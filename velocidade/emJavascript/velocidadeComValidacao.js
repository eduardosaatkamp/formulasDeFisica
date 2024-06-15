function calcularVelocidade(distancia, tempo) {
    try {
        if (typeof distancia !== 'number' || typeof tempo !== 'number') {
            throw new Error('Os parâmetros devem ser números.');
        }

        if (tempo === 0) {
            throw new Error('O tempo não pode ser zero.');
        }

        if ( distancia < 0 ||  tempo < 0) {
            throw new Error('O valor não pode ser negativo.');
        }

        return distancia / tempo;
    } catch (error) {
        return `Erro: ${error.message}`;
    }
}

console.log("Velocidade = " + calcularVelocidade(100, 10) + " m/s");
console.log("Velocidade = " + calcularVelocidade(100, 0) + " m/s");
console.log("Velocidade = " + calcularVelocidade(100, "10") 
+ " m/s");
console.log("Velocidade = " + calcularVelocidade(-100, 10) + " m/s");
