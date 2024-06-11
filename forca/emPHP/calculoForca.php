<?php
// Fórmula da força: F = m * a

// Função para calcular a força
function calcularForca($massa, $aceleracao) {
    return $massa * $aceleracao;
}

// Variáveis
$massa = 10; // Massa em kg
$aceleracao = 5; // Aceleração em m/s^2

// Cálculo da força usando a função
$forca = calcularForca($massa, $aceleracao);

// Exibindo o resultado
echo "A força é: " . $forca . " N\n";
