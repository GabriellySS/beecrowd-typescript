import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const pi: number = 3.14159;
const raio: number = parseFloat(lines.shift()!);
const area: number = pi * Math.pow(raio, 2);

console.log(`A=${area.toFixed(4)}`);
