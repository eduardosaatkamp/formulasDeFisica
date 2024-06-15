<?php
// Fórmula da velocidade: v = s / t

// Variáveis
$distancia = 100; // Distância em metros
$tempo = 10; // Tempo em segundos

// Cálculo da velocidade
define("VELOCIDADE", ($distancia/$tempo));

// Exibindo o resultado
echo "A velocidade é: " . VELOCIDADE . " m/s";
