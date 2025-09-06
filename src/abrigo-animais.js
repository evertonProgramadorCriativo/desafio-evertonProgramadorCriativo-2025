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

export { AbrigoAnimais as AbrigoAnimais };