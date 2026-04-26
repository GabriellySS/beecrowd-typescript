import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const notasEmCentavos: number[] = [10000, 5000, 2000, 1000, 500, 200];
const moedas: number[] = [100, 50, 25, 10, 5, 1];
let valorEmCentavos: number = Math.round(Number(lines.shift()!) * 100);

console.log("NOTAS:");
for (let i = 0; i < notasEmCentavos.length; i++) {
    const notasQtd = Math.floor(valorEmCentavos / notasEmCentavos[i]);
    valorEmCentavos = valorEmCentavos % notasEmCentavos[i];
    console.log(
        `${notasQtd} nota(s) de R$ ${(notasEmCentavos[i] / 100).toFixed(2)}`,
    );
}

console.log("MOEDAS:");
for (let i = 0; i < moedas.length; i++) {
    const moedasQtd = Math.floor(valorEmCentavos / moedas[i]);
    valorEmCentavos = valorEmCentavos % moedas[i];
    console.log(`${moedasQtd} moeda(s) de R$ ${(moedas[i] / 100).toFixed(2)}`);
}
