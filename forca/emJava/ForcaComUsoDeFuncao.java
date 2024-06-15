package forca.emJava;

public class ForcaComUsoDeFuncao {

    public static double calcularForca(double massa, double aceleracao) {
        return massa * aceleracao;
    }

    public static void main(String[] args) {
        System.out.println("Forca = " + calcularForca(10, 5) + "N");
    }
}
