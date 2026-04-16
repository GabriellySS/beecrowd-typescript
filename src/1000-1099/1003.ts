import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const A: number = parseInt(lines.shift()!);
const B: number = parseInt(lines.shift()!);

const SOMA: number = A + B;

console.log(`SOMA = ${SOMA}`);
