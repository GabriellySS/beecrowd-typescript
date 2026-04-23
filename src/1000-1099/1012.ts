import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const [A, B, C] = lines.shift()!.split(" ").map(Number);
const pi: number = 3.14159;

const areaTrianguloRetangulo: number = (A * C) / 2;
const areaCirculo: number = pi * Math.pow(C, 2);
const areaTrapezio: number = ((A + B) * C) / 2;
const areaQuadrado: number = B * B;
const areaRetangulo: number = A * B;

console.log(`TRIANGULO: ${areaTrianguloRetangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
