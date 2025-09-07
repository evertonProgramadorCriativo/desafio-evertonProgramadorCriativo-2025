class AbrigoAnimais {
    constructor() {
        // Base de dados dos animais com seus brinquedos favoritos
        this.animais = {
            'Rex': { tipo: 'cão', brinquedos: ['RATO', 'BOLA'] },
            'Mimi': { tipo: 'gato', brinquedos: ['BOLA', 'LASER'] },
            'Fofo': { tipo: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER'] },
            'Zero': { tipo: 'gato', brinquedos: ['RATO', 'BOLA'] },
            'Bola': { tipo: 'cão', brinquedos: ['CAIXA', 'NOVELO'] },
            'Bebe': { tipo: 'cão', brinquedos: ['LASER', 'RATO', 'BOLA'] },
            'Loco': { tipo: 'jabuti', brinquedos: ['SKATE', 'RATO'] }
        };

        // Lista de brinquedos válidos
        this.brinquedosValidos = ['RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE'];
    }
    // CONVERTE  parseBrinquedos(brinquedosStr) uma string de brinquedos em um array limpo
    // Exemplo: "RATO, BOLA, LASER" → ["RATO", "BOLA", "LASER"]

    parseBrinquedos(brinquedosStr) {
        console.log(`\n ENTRADA parseBrinquedos: "${brinquedosStr}"`)

        // Divide a string por vírgulas, remove espaços em branco e filtra valores vazios
        const resultado = brinquedosStr.split(',')
            .map(b => b.trim())
            .filter(b => b);

        console.log(` SAÍDA parseBrinquedos: [${resultado.join(', ')}]`)
        return resultado;
    }

    // CONVERTE parseAnimais(animaisStr) uma string de nomes de animais em um array limpo
    // Exemplo: "Rex, Mimi, Fofo" → ["Rex", "Mimi", "Fofo"]

    parseAnimais(animaisStr) {
        console.log(`\ENTRADA parseAnimais: "${animaisStr}"`)

        // Divide a string por vírgulas, remove espaços em branco e filtra valores vazios
        const resultado = animaisStr.split(',')
            .map(a => a.trim())
            .filter(a => a);

        console.log(` SAÍDA parseAnimais: [${resultado.join(', ')}]`)
        return resultado;
    }

    // FUNÇÃO DE VALIDAÇÃO DE BRINQUEDOS 
    validarBrinquedos(brinquedos) {
        console.log(`\n VALIDANDO BRINQUEDOS: [${brinquedos.join(', ')}]`);

        const brinquedosUnicos = new Set();

        for (const brinquedo of brinquedos) {
            console.log(` Verificando: ${brinquedo}`);

            // Se não está na lista válida → ERRO
            if (!this.brinquedosValidos.includes(brinquedo)) {
                console.log(`   ERRO: Brinquedo "${brinquedo}" não é válido`);
                console.log(`   Brinquedos válidos: [${this.brinquedosValidos.join(', ')}]`);
                throw new Error('Brinquedo inválido');
            }
            // Se está duplicado → ERRO  
            if (brinquedosUnicos.has(brinquedo)) {
                console.log(`  ERRO: Brinquedo "${brinquedo}" está duplicado`);
                throw new Error('Brinquedo inválido');
            }
            // Se é válido e único → OK
            brinquedosUnicos.add(brinquedo);
            console.log(`   "${brinquedo}" - OK`);
        }

        console.log(` VALIDAÇÃO BRINQUEDOS: Todos os ${brinquedos.length} brinquedos são válidos`);
        return true;
    }
    // FUNÇÃO DE VALIDAÇÃO DE ANIMAIS

    validarAnimais(animais) {
        console.log(`\n VALIDANDO ANIMAIS: [${animais.join(', ')}]`);

        const animaisUnicos = new Set();

        for (const animal of animais) {
            console.log(` Verificando: ${animal}`);
            // Animal inexistente
            if (!this.animais[animal]) {
                console.log(` ERRO: Animal "${animal}" não existe na base de dados`);
                console.log(`  Animais disponíveis: [${Object.keys(this.animais).join(', ')}]`);
                throw new Error('Animal inválido');
            }
            // Animal duplicado
            if (animaisUnicos.has(animal)) {
                console.log(`  ERRO: Animal "${animal}" está duplicado`);
                throw new Error('Animal inválido');
            }
            // Animal válido e único

            const info = this.animais[animal];
            animaisUnicos.add(animal);
            console.log(`   "${animal}" (${info.tipo}) - Brinquedos: [${info.brinquedos.join(', ')}]`);
        }

        console.log(` VALIDAÇÃO ANIMAIS: Todos os ${animais.length} animais são válidos`);
        return true;
    }
    //  Implementar verificação de ordem de brinquedos
    verificarOrdemBrinquedos(brinquedosPessoa, brinquedosAnimais) {
        console.log(`\n VERIFICANDO ORDEM DE BRINQUEDOS:`);
        console.log(`   Pessoa tem: [${brinquedosPessoa.join(', ')}]`);
        console.log(`   Animal precisa: [${brinquedosAnimais.join(', ')}]`);

        // Variável que controla a posição atual de busca nos brinquedos da pessoa
        let indicePessoa = 0;

        // Percorre todos os brinquedos que o animal precisa 
        for (let i = 0; i < brinquedosAnimais.length; i++) {
            const brinquedoAnimal = brinquedosAnimais[i];
            console.log(`\n  Procurando "${brinquedoAnimal}" (${i + 1}/${brinquedosAnimais.length})`);
            console.log(` Buscando a partir da posição ${indicePessoa}`);

            // Variável que indica se o brinquedo foi encontrado
            let encontrado = false;

            // Percorre os brinquedos da pessoa a partir da posição atual
            for (let j = indicePessoa; j < brinquedosPessoa.length; j++) {
                console.log(` Posição ${j}: "${brinquedosPessoa[j]}"`);

                // Verifica se o brinquedo da pessoa é o mesmo que o animal precisa
                if (brinquedosPessoa[j] === brinquedoAnimal) {
                    indicePessoa = j + 1;
                    encontrado = true;
                    console.log(`ENCONTRADO na posição ${j}! Próxima busca a partir da posição ${indicePessoa}`);
                    break;
                }
            }
            // Caso o brinquedo não tenha sido encontrado
            if (!encontrado) {
                console.log(`NÃO ENCONTRADO: "${brinquedoAnimal}" não foi encontrado na ordem correta`);
                console.log(`ORDEM INCORRETA: Falha ao encontrar "${brinquedoAnimal}"`);
                return false;
            }
        }

        console.log(`ORDEM CORRETA: Todos os brinquedos foram encontrados na sequência adequada`);
        return true;
    }

    // Implementar regra especial do Loco 
    pessoaPodeAdotar(brinquedosPessoa, animal, nomeAnimal, totalAnimais) {
        console.log(`\n VERIFICANDO SE PESSOA PODE ADOTAR ${nomeAnimal}:`);
        console.log(` Animal: ${nomeAnimal} (${animal.tipo})`);
        console.log(` Precisa de: [${animal.brinquedos.join(', ')}]`);
        console.log(` Pessoa tem: [${brinquedosPessoa.join(', ')}]`);
        console.log(` Total de animais: ${totalAnimais}`);

        // Regra especial para Loco
        if (nomeAnimal === 'Loco' && totalAnimais > 1) {
            console.log(` REGRA ESPECIAL DO LOCO: Como há ${totalAnimais} animais (> 1), Loco não se importa com a ordem!`);

            const temTodosBrinquedos = animal.brinquedos.every(brinquedo => {
                const tem = brinquedosPessoa.includes(brinquedo);
                console.log(`"{brinquedo}": ${tem ? ' TEM' : ' NÃO TEM'}`);
                return tem;
            });

            const resultado = temTodosBrinquedos;
            console.log(` RESULTADO LOCO: ${resultado ? ' PODE ADOTAR' : ' NÃO PODE ADOTAR'}`);
            return resultado;
        }

        // Regra geral para outros animais
        console.log(` REGRA GERAL: Verificando ordem dos brinquedos...`);
        const podeAdotar = this.verificarOrdemBrinquedos(brinquedosPessoa, animal.brinquedos);
        console.log(` RESULTADO: ${podeAdotar ? 'PODE ADOTAR' : ' NÃO PODE ADOTAR'}`);
        return podeAdotar;
    }

    // A Função aplicarRegragatosAplica: se duas pessoas adotam gatos que compartilham brinquedos,
    // todos os gatos são devolvidos ao abrigo para evitar conflitos
    aplicarRegraGatos(adocoesPessoa1, adocoesPessoa2, animaisAbrigo) {
        console.log(`\n APLICANDO REGRA DOS GATOS:`);

        // Encontrar gatos adotados por cada pessoa
        const gatosP1 = adocoesPessoa1.filter(adocao => {
            const nomeAnimal = adocao.split(' - ')[0]; // Extrai o nome do animal da string de adoção
            const ehGato = this.animais[nomeAnimal].tipo === 'gato'; // Verifica se é um gato
            if (ehGato) console.log(`  Pessoa 1 tem gato: ${nomeAnimal}`);
            return ehGato;
        });

        const gatosP2 = adocoesPessoa2.filter(adocao => {
            const nomeAnimal = adocao.split(' - ')[0];
            const ehGato = this.animais[nomeAnimal].tipo === 'gato';
            if (ehGato) console.log(`  Pessoa 2 tem gato: ${nomeAnimal}`);
            return ehGato;
        });

        console.log(`  Pessoa 1: ${gatosP1.length} gatos, Pessoa 2: ${gatosP2.length} gatos`);

        // Verificar conflito apenas se ambas pessoas têm gatos
        if (gatosP1.length > 0 && gatosP2.length > 0) {
            console.log(`  AMBAS PESSOAS TEM GATOS - Verificando conflito de brinquedos...`);

            const brinquedosGatosP1 = new Set(); //  armazenar brinquedos únicos
            const brinquedosGatosP2 = new Set();

            // Coletar brinquedos dos gatos da pessoa 1
            gatosP1.forEach(adocao => {
                const nomeAnimal = adocao.split(' - ')[0];
                console.log(`    Gatos P1 - ${nomeAnimal}: [${this.animais[nomeAnimal].brinquedos.join(', ')}]`);
                this.animais[nomeAnimal].brinquedos.forEach(b => brinquedosGatosP1.add(b));
            });

            // Coletar brinquedos dos gatos da pessoa 2
            gatosP2.forEach(adocao => {
                const nomeAnimal = adocao.split(' - ')[0];
                console.log(`    Gatos P2 - ${nomeAnimal}: [${this.animais[nomeAnimal].brinquedos.join(', ')}]`);
                this.animais[nomeAnimal].brinquedos.forEach(b => brinquedosGatosP2.add(b));
            });

            console.log(`  Brinquedos gatos P1: [${[...brinquedosGatosP1].join(', ')}]`);
            console.log(`  Brinquedos gatos P2: [${[...brinquedosGatosP2].join(', ')}]`);

            // Verificar se há brinquedos em comum entre os gatos das duas pessoas
            const brinquedosConflito = [...brinquedosGatosP1].filter(b => brinquedosGatosP2.has(b));
            const temConflito = brinquedosConflito.length > 0;

            if (temConflito) {
                console.log(`  CONFLITO DETECTADO! Brinquedos em comum: [${brinquedosConflito.join(', ')}]`);
                console.log(`  MOVENDO TODOS OS GATOS PARA O ABRIGO...`);

                const todosGatos = [...gatosP1, ...gatosP2];
                const novosAdocoesPessoa1 = [...adocoesPessoa1]; // Cria cópias para não modificar originais
                const novosAdocoesPessoa2 = [...adocoesPessoa2];
                const novosAnimaisAbrigo = [...animaisAbrigo];

                // Remove todos os gatos das listas de adoção e move para o abrigo
                todosGatos.forEach(gatoAdocao => {
                    const nomeAnimal = gatoAdocao.split(' - ')[0];
                    console.log(`    Movendo ${nomeAnimal} para o abrigo`);

                    // Remover das listas de adoção das pessoas
                    const indexP1 = novosAdocoesPessoa1.findIndex(a => a.startsWith(nomeAnimal));
                    if (indexP1 !== -1) novosAdocoesPessoa1.splice(indexP1, 1);

                    const indexP2 = novosAdocoesPessoa2.findIndex(a => a.startsWith(nomeAnimal));
                    if (indexP2 !== -1) novosAdocoesPessoa2.splice(indexP2, 1);

                    // Adicionar ao abrigo se não estiver lá
                    if (!novosAnimaisAbrigo.some(a => a.startsWith(nomeAnimal))) {
                        novosAnimaisAbrigo.push(`${nomeAnimal} - abrigo`);
                    }
                });

                console.log(`  REGRA DOS GATOS APLICADA: ${todosGatos.length} gatos movidos para abrigo`);
                return {
                    adocoesPessoa1: novosAdocoesPessoa1,
                    adocoesPessoa2: novosAdocoesPessoa2,
                    animaisAbrigo: novosAnimaisAbrigo
                };
            } else {
                console.log(`  SEM CONFLITO: Gatos podem ficar com suas respectivas pessoas`);
            }
        } else {
            console.log(`  SEM CONFLITO: Apenas uma pessoa (ou nenhuma) tem gatos`);
        }

        return { adocoesPessoa1, adocoesPessoa2, animaisAbrigo };
    }
}

const abrigo = new AbrigoAnimais();

/* 
// Cenário onde ambas pessoas têm gatos com brinquedos em comum
const adocoesP1 = ['Mimi - pessoa 1', 'Rex - pessoa 1']; // Mimi é gato
const adocoesP2 = ['Fofo - pessoa 2', 'Bola - pessoa 2']; // Fofo é gato
const animaisAbrigo = ['Zero - abrigo'];

console.log(" CONFLITO DE BRINQUEDOS ---------");
const resultado1 = abrigo.aplicarRegraGatos(adocoesP1, adocoesP2, animaisAbrigo);
console.log("Resultado:", resultado1);
*/

// Cenário onde gatos têm brinquedos diferentes
const adocoesP1 = ['Mimi - pessoa 1']; // Mimi: ['BOLA', 'LASER']
const adocoesP2 = ['Zero - pessoa 2']; // Zero: ['RATO', 'BOLA'] 
const animaisAbrigo = [];

console.log("\n SEM CONFLITO (brinquedos diferentes) ---------");
const resultado2 = abrigo.aplicarRegraGatos(adocoesP1, adocoesP2, animaisAbrigo);
console.log("Resultado:", resultado2);

export { AbrigoAnimais as AbrigoAnimais };