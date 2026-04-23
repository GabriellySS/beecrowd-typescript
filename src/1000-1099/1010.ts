import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const [codPeca1, qtdPeca1, valorPeca1] = lines.shift()!.split(" ").map(Number);
const [codPeca2, qtdPeca2, valorPeca2] = lines.shift()!.split(" ").map(Number);

const total: number = qtdPeca1 * valorPeca1 + qtdPeca2 * valorPeca2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
