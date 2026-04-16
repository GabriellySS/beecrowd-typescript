# 🐝 Beecrowd Solutions - TypeScript

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Este repositório contém minhas resoluções para os desafios da plataforma [Beecrowd](https://www.beecrowd.com.br/). O objetivo é fortalecer os fundamentos de lógica de programação, algoritmos e estruturas de dados utilizando **TypeScript**.

---

## 📁 Estrutura do Projeto

Para manter a organização com o crescimento do número de exercícios, os arquivos estão agrupados por centenas:

```text
src/
├── 1000-1099/
│   ├── 1001.ts
│   └── 1002.ts
├── 1100-1199/
└── ...
stdin.txt  # Arquivo para simular a entrada de dados do Beecrowd
```

## 🚀 Como Executar

### 1. Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados.

### 2. Instalação

No terminal, instale as dependências necessárias:

```bash
npm install
```

### 3. Testando um Problema

Cole os dados de exemplo do problema no arquivo stdin.txt.
Execute o comando apontando para o arquivo desejado:

```bash
npx ts-node src/1000-1099/1001.ts < stdin.txt
```

## 📝 Padronização (Template)

Para garantir que o código funcione no ambiente do Beecrowd (Node.js), utilizo o seguinte padrão de leitura via stdin:

```typescript
import * as fs from "fs";

const input = fs.readFileSync(0, "utf8");
const lines = input.split(/\r?\n/);

function main() {
    // Exemplo de leitura:
    // const A = parseInt(lines.shift()!);
    // Sua lógica aqui
}

main();
```

## 📊 Progresso

| Faixa de IDs | Resolvidos |
| :----------- | ---------: |
| 1000 - 1099  | 🟢 2 / 100 |
| 1100 - 1199  | ⚪ 0 / 100 |

## 🎨 Sobre mim

Sou Designer em transição para o Desenvolvimento Front-end. Este repositório faz parte da minha jornada de estudos para dominar a lógica por trás das interfaces.

📫 Conecte-se comigo: [Gabrielly Santos](https://www.linkedin.com/in/gabriellyss/)
