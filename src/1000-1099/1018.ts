import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const cedulas: number[] = [100, 50, 20, 10, 5, 2, 1];
let valor: number = Number(lines.shift()!);

console.log(valor);

for (let i = 0; i < cedulas.length; i++) {
    const notas = Math.trunc(valor / cedulas[i]);
    valor = valor % cedulas[i];
    console.log(`${notas} nota(s) de R$ ${cedulas[i]},00`);
}
