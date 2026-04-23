import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const distancia: number = parseInt(lines.shift()!);
const tempo: number = distancia * 2;

console.log(`${tempo} minutos`);
