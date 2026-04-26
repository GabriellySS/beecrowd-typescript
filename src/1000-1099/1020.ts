import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

const idadeEmDias = Number(lines.shift()!);

function idade(dias: number) {
    let anos: number = 0;
    let meses: number = 0;

    if (dias >= 365) {
        anos = Math.trunc(dias / 365);
        dias = dias % 365;
    }

    if (dias >= 30) {
        meses = Math.trunc(dias / 30);
        dias = dias % 30;
    }

    console.log(`${anos} ano(s)`);
    console.log(`${meses} mes(es)`);
    console.log(`${dias} dia(s)`);
}

idade(idadeEmDias);
