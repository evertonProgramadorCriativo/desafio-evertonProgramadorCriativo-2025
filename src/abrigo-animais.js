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
                throw new Error('Brinquedo duplicado não é permitido');
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
      // feat: Implementar verificação de ordem de brinquedos com processo detalhado
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

}

const abrigo = new AbrigoAnimais();

// Exemplo 1: Verificação normal (sucesso)
console.log("EXEMPLO 1 ---");
const brinquedos1 = ['RATO', 'BOLA', 'LASER', 'CAIXA'];
const resultado1 = abrigo.verificarOrdemBrinquedos(brinquedos1, ['RATO', 'BOLA', 'LASER']);
console.log("Resultado:", resultado1);

// Exemplo 2: Verificação normal (falha na ordem)
console.log("\n EXEMPLO 2 -------");
const brinquedos2 = ['BOLA', 'RATO', 'LASER'];
const resultado2 = abrigo.verificarOrdemBrinquedos(brinquedos2, ['RATO', 'BOLA', 'LASER']);
console.log("Resultado:", resultado2);

export { AbrigoAnimais as AbrigoAnimais };