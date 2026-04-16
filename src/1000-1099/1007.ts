import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const A: number = parseInt(lines.shift()!);
const B: number = parseInt(lines.shift()!);
const C: number = parseInt(lines.shift()!);
const D: number = parseInt(lines.shift()!);

const diferenca: number = A * B - C * D;

console.log(`DIFERENCA = ${diferenca}`);
