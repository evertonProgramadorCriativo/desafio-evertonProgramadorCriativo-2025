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
  


}

const abrigo = new AbrigoAnimais();
// Teste 1: parseBrinquedos - Caso normal
console.log("  Teste parseBrinquedos - Caso normal:");
const brinquedos1 = abrigo.parseBrinquedos("RATO, BOLA, LASER");

// Teste 2: parseBrinquedos - Com espaços extras
console.log("\n  Teste parseBrinquedos - Com espaços extras:");
const brinquedos2 = abrigo.parseBrinquedos("  RATO ,  BOLA  , LASER  ");

// Teste 3: parseBrinquedos - String vazia
console.log("\n Teste parseBrinquedos - String vazia:");
const brinquedos3 = abrigo.parseBrinquedos("");

console.log("\n-----------------------------------\n");

console.log("\n-----------------------------------\n");

console.log("\n-----------------------------------\n");


// Teste 4: parseAnimais - Caso normal
console.log("\n  Teste parseAnimais - Caso normal:");
const animais1 = abrigo.parseAnimais("Rex, Mimi, Fofo");

// Teste 5: parseAnimais - Com espaços extras
console.log("\n Teste parseAnimais - Com espaços extras:");
const animais2 = abrigo.parseAnimais("  Rex ,  Mimi  , Fofo  ");

// Teste 6: parseAnimais - String vazia
console.log("\n  Teste parseAnimais - String vazia:");
const animais3 = abrigo.parseAnimais("");

export { AbrigoAnimais as AbrigoAnimais };