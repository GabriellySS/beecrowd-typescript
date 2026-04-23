import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const [x1, y1] = lines.shift()!.split(" ").map(Number);
const [x2, y2] = lines.shift()!.split(" ").map(Number);

const distancia: number = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2),
);

console.log(distancia.toFixed(4));
