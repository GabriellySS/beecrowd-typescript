import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const vendedor: string = lines.shift()!;
const salario: number = parseFloat(lines.shift()!);
const totalVendas: number = parseFloat(lines.shift()!);

const comissao: number = totalVendas * 0.15;
const salarioComComissao: number = salario + comissao;

console.log(`TOTAL = R$ ${salarioComComissao.toFixed(2)}`);
