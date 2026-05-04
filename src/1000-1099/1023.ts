import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

let cidadeContador = 1;
let cursor = 0;

while (true) {
    const N = Number(lines[cursor++]);
    if (N === 0) break;

    const consumos = new Array(201).fill(0);
    let totalPessoasCidade = 0;
    let totalConsumoCidade = 0;

    if (cidadeContador > 1) {
        console.log("");
    }

    console.log(`Cidade# ${cidadeContador}:`);

    for (let i = 0; i < N; i++) {
        const linha = lines[cursor++];
        const imovel = linha.split(" ");
        const qtdPessoas = Number(imovel[0]);
        const consumoTotal = Number(imovel[1]);

        const mediaIndividual = Math.floor(consumoTotal / qtdPessoas);
        consumos[mediaIndividual] = consumos[mediaIndividual] + qtdPessoas;

        totalPessoasCidade = totalPessoasCidade + qtdPessoas;
        totalConsumoCidade = totalConsumoCidade + consumoTotal;
    }

    let consumoConsole = "";

    for (let i = 0; i < consumos.length; i++) {
        if (consumos[i] > 0) {
            consumoConsole = consumoConsole + `${consumos[i]}-${i} `;
        }
    }

    console.log(consumoConsole.trim());

    const mediaConsumoCidade = (
        totalConsumoCidade / totalPessoasCidade
    ).toFixed(3);

    const mediaConsumoCidade2Decimais = mediaConsumoCidade.substring(
        0,
        mediaConsumoCidade.length - 1,
    );

    console.log(`Consumo medio: ${mediaConsumoCidade2Decimais} m3.`);

    cidadeContador++;
}
