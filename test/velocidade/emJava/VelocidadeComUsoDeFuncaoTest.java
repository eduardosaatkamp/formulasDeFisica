package test.velocidade.emJava;

import org.junit.Test;
import velocidade.emJava.VelocidadeComUsoDeFuncao;

import static org.junit.Assert.assertEquals;

public class VelocidadeComUsoDeFuncaoTest {
    @Test
public void testCalcularVelocidade() {
        double distancia = 100;
        double tempo = 10;
        double expectedVelocidade = 10;
        double actualVelocidade = VelocidadeComUsoDeFuncao.calcularVelocidade(distancia, tempo);
        assertEquals(expectedVelocidade, actualVelocidade, 0.001);
    }
}


