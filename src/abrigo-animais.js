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
  // Método para exibir todos os animais
  exibirAnimais() {
    console.log("LISTA DE ANIMAIS---- ");
    for (const [nome, dados] of Object.entries(this.animais)) {
      console.log(`${nome}: ${dados.tipo} -> Brinquedos: ${dados.brinquedos.join(', ')}`);
    }
  }

  // Método para exibir brinquedos válidos
  exibirBrinquedosValidos() {
    console.log("\n-- BRINQUEDOS VÁLIDOS ----");
    console.log(this.brinquedosValidos.join(', '));
  }

}

const abrigo = new AbrigoAnimais();
abrigo.exibirAnimais();
abrigo.exibirBrinquedosValidos();

export { AbrigoAnimais as AbrigoAnimais };