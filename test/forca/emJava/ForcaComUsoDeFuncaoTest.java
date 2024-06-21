package test.forca.emJava;
import forca.emJava.ForcaComUsoDeFuncao;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class ForcaComUsoDeFuncaoTest {

    @Test
    public void testCalcularForca() {
        // Fórmula da força: F = m * a

        // Variáveis
        double massa = 10; // Massa em kg
        double aceleracao = 5; // Aceleração em m/s^2
        double expectedForca = 50; // Força esperada em N

        double actualForca = ForcaComUsoDeFuncao.calcularForca(massa, aceleracao);

        assertEquals(expectedForca, actualForca, 0.001);
    }
}