package velocidade.emJava;

public class VelocidadeComUsoDeFuncao {
    public static double calcularVelocidade(double distancia, double tempo) {
        return distancia / tempo;
    }

    public static void main(String[] args) {
        System.out.println("Velocidade = " + calcularVelocidade(100, 10) + " m/s");
}
}

