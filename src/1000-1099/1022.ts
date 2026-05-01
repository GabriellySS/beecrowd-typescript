import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const qtdCasosDeTeste = Number(lines.shift());

function calcularMDC(a: number, b: number) {
    a = Math.abs(a);
    b = Math.abs(b);

    //algoritmo de euclides
    while (b > 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}

for (let i = 0; i < qtdCasosDeTeste; i++) {
    const caso = lines[i].split(" ");
    const N1 = Number(caso[0]);
    const D1 = Number(caso[2]);
    const operador = caso[3];
    const N2 = Number(caso[4]);
    const D2 = Number(caso[6]);

    let numerador: number = 0;
    let denominador: number = 0;

    switch (operador) {
        case "+":
            numerador = N1 * D2 + N2 * D1;
            denominador = D1 * D2;
            break;

        case "-":
            numerador = N1 * D2 - N2 * D1;
            denominador = D1 * D2;
            break;

        case "*":
            numerador = N1 * N2;
            denominador = D1 * D2;
            break;

        case "/":
            numerador = N1 * D2;
            denominador = N2 * D1;
            break;

        default:
            break;
    }

    const maximoDivisorComum = calcularMDC(numerador, denominador);

    const numeradorSimplificado = numerador / maximoDivisorComum;
    const denominadorSimplifico = denominador / maximoDivisorComum;

    console.log(
        `${numerador}/${denominador} = ${numeradorSimplificado}/${denominadorSimplifico}`,
    );
}
