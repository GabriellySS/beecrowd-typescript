import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const [valorA, valorB, valorC] = lines.shift()!.split(" ").map(Number);

const maiorAB: number = (valorA + valorB + Math.abs(valorA - valorB)) / 2;
const maiorABC: number = (maiorAB + valorC + Math.abs(maiorAB - valorC)) / 2;

console.log(`${maiorABC} eh o maior`);
