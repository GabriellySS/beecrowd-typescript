import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const N: number = Number(lines.shift()!);

function conversaoDeTempo(valor: number) {
    let segundos: number;
    let minutos: number;
    let horas: number;

    if (valor >= 60) {
        minutos = Math.trunc(valor / 60);
        segundos = valor % 60;
    } else {
        segundos = valor;
        minutos = 0;
    }

    if (minutos >= 60) {
        horas = Math.trunc(minutos / 60);
        minutos = minutos % 60;
    } else {
        horas = 0;
    }

    console.log(`${horas}:${minutos}:${segundos}`);
}

conversaoDeTempo(N);
