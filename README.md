# ABRIGO DE ANIMAIS

## Sobre o Projeto

#### O projeto é uma simulação de um sistema de gerenciamento de animais em um abrigo, com foco nos brinquedos favoritos de cada animal.


![classe-inicial](https://i.ibb.co/Gf2ggXF7/Screenshot-33.png) 

## Funcionalidades Atuais

*   **Base de dados de animais** com nome, tipo e brinquedos favoritos
    
*   **Lista de brinquedos válidos** reconhecidos pelo sistema
    
*   **Métodos de exibição** para visualizar os dados no console

Estrutura do Código
--------------------

### Classe Principal: `AbrigoAnimais`

#### Construtor

Inicializa dois atributos principais:

    this.animais = {
      'Rex': { tipo: 'cão', brinquedos: ['RATO', 'BOLA'] },
      'Mimi': { tipo: 'gato', brinquedos: ['BOLA', 'LASER'] },
      // ... mais animais
    };
    
    this.brinquedosValidos = ['RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE'];

#### Métodos Disponíveis

*   `exibirAnimais()` - Mostra todos os animais e seus brinquedos favoritos
    
*   `exibirBrinquedosValidos()` - Exibe a lista de brinquedos reconhecidos pelo sistema
    

Como Executar
--------------

### Pré-requisitos

*   Node.js instalado (versão 14 ou superior)
    

### Passos para Execução

1.  **Clone ou baixe o projeto**
    
        git clone <url-do-repositorio>
        cd nome-do-projeto
    
2.  **Execute o arquivo principal**
    
        node AbrigoAnimais.js


### Importando a Classe

    import { AbrigoAnimais } from './AbrigoAnimais.js';
    
    // Criar instância
    const abrigo = new AbrigoAnimais();
    
    // Usar métodos
    abrigo.exibirAnimais();
    abrigo.exibirBrinquedosValidos();

### Acessando Dados Diretamente

    // Acessar um animal específico
    console.log(abrigo.animais.Rex);
    
    // Verificar brinquedos válidos
    console.log(abrigo.brinquedosValidos);    

### Saída Esperada

    LISTA DE ANIMAIS---- 
    Rex: cão -> Brinquedos: RATO, BOLA
    Mimi: gato -> Brinquedos: BOLA, LASER
    Fofo: gato -> Brinquedos: BOLA, RATO, LASER
    Zero: gato -> Brinquedos: RATO, BOLA
    Bola: cão -> Brinquedos: CAIXA, NOVELO
    Bebe: cão -> Brinquedos: LASER, RATO, BOLA
    Loco: jabuti -> Brinquedos: SKATE, RATO
    
    -- BRINQUEDOS VÁLIDOS ----
    RATO, BOLA, LASER, CAIXA, NOVELO, SKATE

