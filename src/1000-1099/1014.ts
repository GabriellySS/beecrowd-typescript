import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const distanciaEmKm: number = parseInt(lines.shift()!);
const combustivelEmLitro: number = parseFloat(lines.shift()!);

const consumoMedio: number = distanciaEmKm / combustivelEmLitro;

console.log(`${consumoMedio.toFixed(3)} km/l`);
