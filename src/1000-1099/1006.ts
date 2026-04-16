import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const A: number = parseFloat(lines.shift()!);
const B: number = parseFloat(lines.shift()!);
const C: number = parseFloat(lines.shift()!);

const somaNotas: number = A * 2 + B * 3 + C * 5;
const media: number = somaNotas / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);
