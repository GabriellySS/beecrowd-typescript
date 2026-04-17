import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const funcionarioNumero: number = parseInt(lines.shift()!);
const horasTrabalhadas: number = parseInt(lines.shift()!);
const valorHora: number = parseFloat(lines.shift()!);

const salario: number = horasTrabalhadas * valorHora;

console.log(`NUMBER = ${funcionarioNumero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
