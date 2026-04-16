import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const notaA: number = parseFloat(lines.shift()!);
const notaB: number = parseFloat(lines.shift()!);
const pesoNotaA: number = 3.5;
const pesoNotaB: number = 7.5;

const somaNotas: number = notaA * pesoNotaA + notaB * pesoNotaB;
const media: number = somaNotas / (pesoNotaA + pesoNotaB);

console.log(`MEDIA = ${media.toFixed(5)}`);
