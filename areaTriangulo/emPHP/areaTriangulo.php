<?php
function calcularArea($base, $altura) {
    define("AREA_TRIANGULO", ($base * $altura) / 2);
    return AREA_TRIANGULO;
}

$altura = 10; 
$base = 5; 

echo "A área do triângulo é: " . calcularArea($base, $altura) . " unidades de área\n";
