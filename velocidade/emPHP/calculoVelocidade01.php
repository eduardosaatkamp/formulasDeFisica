<?php
// Fórmula da velocidade: v = s / t

function calcularVelocidade($distancia, $tempo) {
    $velocidade = $distancia / $tempo;
    return $velocidade;
}

// Exibindo o resultado
echo "A velocidade é: " . calcularVelocidade(100, 10) . " m/s";
