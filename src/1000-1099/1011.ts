import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const raio: number = parseInt(lines.shift()!);
const pi: number = 3.14159;

const volume: number = (4.0 / 3) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);
