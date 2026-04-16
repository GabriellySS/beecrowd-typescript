import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const a: number = parseInt(lines.shift()!);
const b: number = parseInt(lines.shift()!);

const PROD: number = a * b;

console.log(`PROD = ${PROD}`);
