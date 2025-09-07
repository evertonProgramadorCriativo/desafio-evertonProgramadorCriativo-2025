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

    // Processa todas as adoções seguindo as regras do sistema
    processarAdocoes(brinquedos1, brinquedos2, animaisOrdem) {
        console.log(`\n PROCESSANDO ADOCOES:`);
        console.log(`  Pessoa 1: [${brinquedos1.join(', ')}]`);
        console.log(`  Pessoa 2: [${brinquedos2.join(', ')}]`);
        console.log(`  Animais: [${animaisOrdem.join(', ')}]`);

        let adocoesPessoa1 = []; // Lista de animais adotados pela pessoa 1
        let adocoesPessoa2 = []; // Lista de animais adotados pela pessoa 2
        let animaisAbrigo = [];  // Lista de animais que ficaram no abrigo

        const totalAnimais = animaisOrdem.length;
        console.log(`  Total de animais: ${totalAnimais}`);

        // Processa cada animal na ordem especificada
        animaisOrdem.forEach((nomeAnimal, index) => {
            console.log(`\n  PROCESSANDO ANIMAL ${index + 1}/${totalAnimais}: ${nomeAnimal}`);

            const animal = this.animais[nomeAnimal];
            console.log(`    Tipo: ${animal.tipo}, Brinquedos: [${animal.brinquedos.join(', ')}]`);

            // Verifica se cada pessoa pode adotar este animal
            console.log(`    Verificando PESSOA 1...`);
            const pessoa1Pode = this.pessoaPodeAdotar(brinquedos1, animal, nomeAnimal, totalAnimais);

            console.log(`    Verificando PESSOA 2...`);
            const pessoa2Pode = this.pessoaPodeAdotar(brinquedos2, animal, nomeAnimal, totalAnimais);

            console.log(`    RESULTADO: P1=${pessoa1Pode ? 'PODE' : 'NAO PODE'}, P2=${pessoa2Pode ? 'PODE' : 'NAO PODE'}`);

            // Aplica as regras de decisão para determinar onde o animal vai
            if (pessoa1Pode && pessoa2Pode) {
                // Regra 4: Se ambas podem adotar, vai para o abrigo
                console.log(`    REGRA 4: Ambas podem adotar -> ${nomeAnimal} vai para o ABRIGO`);
                animaisAbrigo.push(`${nomeAnimal} - abrigo`);
            } else if (pessoa1Pode && adocoesPessoa1.length < 3) {
                // Pessoa 1 pode adotar e ainda não atingiu o limite de 3 animais
                console.log(`    PESSOA 1 adota ${nomeAnimal} (${adocoesPessoa1.length + 1}/3)`);
                adocoesPessoa1.push(`${nomeAnimal} - pessoa 1`);
            } else if (pessoa2Pode && adocoesPessoa2.length < 3) {
                // Pessoa 2 pode adotar e ainda não atingiu o limite de 3 animais
                console.log(`    PESSOA 2 adota ${nomeAnimal} (${adocoesPessoa2.length + 1}/3)`);
                adocoesPessoa2.push(`${nomeAnimal} - pessoa 2`);
            } else {
                // Nenhuma pessoa pode adotar ou ambas atingiram o limite
                const motivo = pessoa1Pode ? 'limite de 3 atingido P1' : pessoa2Pode ? 'limite de 3 atingido P2' : 'nenhuma pessoa pode adotar';
                console.log(`    ${nomeAnimal} vai para ABRIGO (${motivo})`);
                animaisAbrigo.push(`${nomeAnimal} - abrigo`);
            }
        });

        console.log(`\n RESULTADO ANTES DA REGRA DOS GATOS:`);
        console.log(`  Pessoa 1 (${adocoesPessoa1.length}): [${adocoesPessoa1.join(', ')}]`);
        console.log(`  Pessoa 2 (${adocoesPessoa2.length}): [${adocoesPessoa2.join(', ')}]`);
        console.log(`  Abrigo (${animaisAbrigo.length}): [${animaisAbrigo.join(', ')}]`);

        // Aplica a regra especial dos gatos após processar todas as adoções
        const resultadoComRegrasGatos = this.aplicarRegraGatos(adocoesPessoa1, adocoesPessoa2, animaisAbrigo);

        console.log(`\nRESULTADO FINAL APOS REGRA DOS GATOS:`);
        console.log(`  Pessoa 1 (${resultadoComRegrasGatos.adocoesPessoa1.length}): [${resultadoComRegrasGatos.adocoesPessoa1.join(', ')}]`);
        console.log(`  Pessoa 2 (${resultadoComRegrasGatos.adocoesPessoa2.length}): [${resultadoComRegrasGatos.adocoesPessoa2.join(', ')}]`);
        console.log(`  Abrigo (${resultadoComRegrasGatos.animaisAbrigo.length}): [${resultadoComRegrasGatos.animaisAbrigo.join(', ')}]`);

        // Combina e ordena alfabeticamente o resultado final
        const resultado = [
            ...resultadoComRegrasGatos.adocoesPessoa1,
            ...resultadoComRegrasGatos.adocoesPessoa2,
            ...resultadoComRegrasGatos.animaisAbrigo
        ].sort();

        console.log(`\n LISTA FINAL ORDENADA: [${resultado.join(', ')}]`);
        return resultado;
    }

    //  método principal do sistema
    encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
        // Exibe cabeçalho inicial do sistema
          console.log(`------------------------------------------------`);
          console.log(`------------------------------------------------`);
        console.log(`INICIANDO SISTEMA DE ADOÇÃO DE ANIMAIS`);

        try {
            // Converte as entradas de texto em listas estruturadas
            const brinquedos1 = this.parseBrinquedos(brinquedosPessoa1);
            const brinquedos2 = this.parseBrinquedos(brinquedosPessoa2);
            const animaisOrdem = this.parseAnimais(ordemAnimais);

            // Verifica se os brinquedos e animais informados são válidos
            this.validarBrinquedos(brinquedos1);
            this.validarBrinquedos(brinquedos2);
            this.validarAnimais(animaisOrdem);

            // Executa o processo principal de adoção,
            // associando pessoas a animais de acordo com os brinquedos
            const resultado = this.processarAdocoes(brinquedos1, brinquedos2, animaisOrdem);

            // Exibe mensagem de sucesso após processamento
              console.log(`------------------------------------------------`);
              console.log(`------------------------------------------------`);
            console.log(`SISTEMA EXECUTADO COM SUCESSO!`);


            // Retorna lista de adoções realizadas
            return { lista: resultado };

        } catch (error) {
            // Exibe mensagem de erro caso alguma etapa falhe
            console.log(`------------------------------------------------`);
            console.log(`------------------------------------------------`); 
            console.log(`ERRO NO SISTEMA: ${error.message}`);
             

            // Retorna erro no formato de objeto
            return { erro: error.message };
        }
    }

}

const abrigo = new AbrigoAnimais();

// Todos Animais 

const resultado4 = abrigo.encontraPessoas(
    "RATO,BOLA,LASER,NOVELO",
    "CAIXA,SKATE,RATO,BOLA", 
    "Rex,Mimi,Fofo,Zero,Bola,Bebe,Loco"  // Todos os animais
);
console.log("Resultado:", resultado4);

// Outros Testes
/**
 * 
// teste Normal

const resultado1 = abrigo.encontraPessoas(
    "RATO,BOLA",          // Brinquedos Pessoa 1
    "LASER,CAIXA",        // Brinquedos Pessoa 2  
    "Rex,Mimi,Fofo"       // Ordem dos animais
);
console.log("Resultado:", resultado1);

// Teste com Conflito de Gatos

const resultado2 = abrigo.encontraPessoas(
    "RATO,BOLA,LASER",    // Pessoa 1 tem vários brinquedos
    "RATO,BOLA,CAIXA",    // Pessoa 2 também tem
    "Mimi,Fofo,Zero"      // Apenas gatos (vai dar conflito!)
);
console.log("Resultado:", resultado2);

// brinquedo inválido

const resultado3 = abrigo.encontraPessoas(
    "RATO,BOLA",          // Brinquedos normais
    "AVIÃO,CAIXA",        // AVIÃO não é brinquedo válido! 
    "Rex,Mimi"            // Animais
);
console.log("Resultado:", resultado3);

 */

export { AbrigoAnimais as AbrigoAnimais };