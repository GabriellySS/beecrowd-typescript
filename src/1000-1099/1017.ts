import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const tempoEmHoras: number = Number(lines.shift()!);
const velocidadeMedia: number = Number(lines.shift()!);
const kmPorLitro: number = 12;

const distanciaPercorrida: number = velocidadeMedia * tempoEmHoras;
const combustivelNecessario: number = distanciaPercorrida / kmPorLitro;

console.log(combustivelNecessario.toFixed(3));
