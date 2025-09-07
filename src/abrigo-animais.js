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

}

const abrigo = new AbrigoAnimais();



// Teste do validarBrinquedos() - CASOS VÁLIDOS
console.log(" TESTES VÁLIDOS ---");
try {
    abrigo.validarBrinquedos(['BOLA', 'RATO']);
    abrigo.validarBrinquedos(['LASER', 'CAIXA', 'NOVELO']);
} catch (e) {
    console.log('Erro:', e.message);
}

// Teste do validarBrinquedos() - CASOS INVÁLIDOS
console.log("\n TESTES INVÁLIDOS ------");
try {
    abrigo.validarBrinquedos(['BOLA', 'CARRO']); // Brinquedo inválido
} catch (e) {
    console.log('Erro capturado:', e.message);

}

// Teste do validarBrinquedos() - CASO INVÁLIDO (duplicado)
console.log("\n TESTES DUPLICADO ------");
try {
    abrigo.validarBrinquedos(['BOLA', 'BOLA']); // Duplicado
} catch (e) {
    console.log('Erro capturado:', e.message);
}


// Teste do validarAnimais() - CASOS VÁLIDOS
console.log("\n ---- TESTES ANIMAIS VÁLIDOS  ----");
try {
    abrigo.validarAnimais(['Rex', 'Mimi']);
    abrigo.validarAnimais(['Fofo', 'Bola', 'Bebe']);
} catch (e) {
    console.log('Erro:', e.message);
}

//  Teste do validarAnimais() - CASOS INVÁLIDOS
console.log("\n TESTES ANIMAIS INVÁLIDOS ---");
try {
    abrigo.validarAnimais(['Rex', 'Toto']); // Animal inexistente
} catch (e) {
    console.log('Erro capturado:', e.message);
}

//  Teste do validarAnimais() - CASO INVÁLIDO (duplicado)
console.log("\n TESTES ANIMAIS DUPLICADO ---");
try {
    abrigo.validarAnimais(['Rex', 'Rex']); // Duplicado
} catch (e) {
    console.log('Erro capturado:', e.message);
}

//  Teste combinado (animais e brinquedos)
console.log("\n Teste combinado (animais e brinquedos)");
try {
    abrigo.validarAnimais(['Mimi', 'Fofo']);
    abrigo.validarBrinquedos(['BOLA', 'LASER']);
    console.log(' Todos os dados são válidos!');
} catch (e) {
    console.log(' Erro:', e.message);
}

export { AbrigoAnimais as AbrigoAnimais };