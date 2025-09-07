# ABRIGO DE ANIMAIS


## Sobre o Projeto


#### O projeto é uma simulação de um sistema de gerenciamento de animais em um abrigo, com foco nos brinquedos favoritos de cada animal.






````bash
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
console.log("\n=== TESTES ANIMAIS VÁLIDOS ===");
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
````

```
 TESTES VÁLIDOS ---

 VALIDANDO BRINQUEDOS: [BOLA, RATO]
 Verificando: BOLA
   "BOLA" - OK
 Verificando: RATO
   "RATO" - OK
 VALIDAÇÃO BRINQUEDOS: Todos os 2 brinquedos são válidos

 VALIDANDO BRINQUEDOS: [LASER, CAIXA, NOVELO]
 Verificando: LASER
   "LASER" - OK
 Verificando: CAIXA
   "CAIXA" - OK
 Verificando: NOVELO
   "NOVELO" - OK
 VALIDAÇÃO BRINQUEDOS: Todos os 3 brinquedos são válidos

 TESTES INVÁLIDOS ------

 VALIDANDO BRINQUEDOS: [BOLA, CARRO]
 Verificando: BOLA
   "BOLA" - OK
 Verificando: CARRO
   ERRO: Brinquedo "CARRO" não é válido
   Brinquedos válidos: [RATO, BOLA, LASER, CAIXA, NOVELO, SKATE]
Erro capturado: Brinquedo inválido

 TESTES DUPLICADO ------

 VALIDANDO BRINQUEDOS: [BOLA, BOLA]
 Verificando: BOLA
   "BOLA" - OK
 Verificando: BOLA
  ERRO: Brinquedo "BOLA" está duplicado
Erro capturado: Brinquedo duplicado não é permitido

--- TESTES ANIMAIS VÁLIDOS --------

 VALIDANDO ANIMAIS: [Rex, Mimi]
 Verificando: Rex
   "Rex" (cão) - Brinquedos: [RATO, BOLA]
 Verificando: Mimi
   "Mimi" (gato) - Brinquedos: [BOLA, LASER]
 VALIDAÇÃO ANIMAIS: Todos os 2 animais são válidos

 VALIDANDO ANIMAIS: [Fofo, Bola, Bebe]
 Verificando: Fofo
   "Fofo" (gato) - Brinquedos: [BOLA, RATO, LASER]
 Verificando: Bola
   "Bola" (cão) - Brinquedos: [CAIXA, NOVELO]
 Verificando: Bebe
   "Bebe" (cão) - Brinquedos: [LASER, RATO, BOLA]
 VALIDAÇÃO ANIMAIS: Todos os 3 animais são válidos

 TESTES ANIMAIS INVÁLIDOS ---

 VALIDANDO ANIMAIS: [Rex, Toto]
 Verificando: Rex
   "Rex" (cão) - Brinquedos: [RATO, BOLA]
 Verificando: Toto
 ERRO: Animal "Toto" não existe na base de dados
  Animais disponíveis: [Rex, Mimi, Fofo, Zero, Bola, Bebe, Loco]
Erro capturado: Animal inválido

 TESTES ANIMAIS DUPLICADO ---

 VALIDANDO ANIMAIS: [Rex, Rex]
 Verificando: Rex
   "Rex" (cão) - Brinquedos: [RATO, BOLA]
 Verificando: Rex
  ERRO: Animal "Rex" está duplicado
Erro capturado: Animal inválido

 Teste combinado (animais e brinquedos)

 VALIDANDO ANIMAIS: [Mimi, Fofo]
 Verificando: Mimi
   "Mimi" (gato) - Brinquedos: [BOLA, LASER]
 Verificando: Fofo
   "Fofo" (gato) - Brinquedos: [BOLA, RATO, LASER]
 VALIDAÇÃO ANIMAIS: Todos os 2 animais são válidos

 VALIDANDO BRINQUEDOS: [BOLA, LASER]
 Verificando: BOLA
   "BOLA" - OK
 Verificando: LASER
   "LASER" - OK
 VALIDAÇÃO BRINQUEDOS: Todos os 2 brinquedos são válidos
 Todos os dados são válidos!

```

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

### `parseBrinquedos(brinquedosStr)`

*   **Função**: Converte uma string de brinquedos em um array limpo
    
*   **Funcionalidades**:
    
    *   Divide a string por vírgulas
        
    *   Remove espaços em branco de cada item
        
    *   Filtra valores vazios
        
    *   Inclui logs para debugging
        

### `parseAnimais(animaisStr)`

*   **Função**: Converte uma string de nomes de animais em um array limpo
    
*   **Funcionalidades**:
    
    *   Divide a string por vírgulas
        
    *   Remove espaços em branco de cada nome
        
    *   Filtra valores vazios
        
    *   Inclui logs para debugging
        

Exemplos de Uso
---------------

    // Conversão de brinquedos
    "RATO, BOLA, LASER" → ["RATO", "BOLA", "LASER"]
    "  RATO ,  BOLA  " → ["RATO", "BOLA"]
    
    // Conversão de animais
    "Rex, Mimi, Fofo" → ["Rex", "Mimi", "Fofo"]
    "  Rex ,  Mimi  " → ["Rex", "Mimi"]


* * *

Método `validarBrinquedos(brinquedos)`
--------------------------------------

**Função:** Valida se os brinquedos fornecidos são permitidos no sistema.

**O que faz:**

1.  **Verifica existência:** Confirma se cada brinquedo está na lista `brinquedosValidos`
    
2.  **Previne duplicatas:** Usa um `Set` para garantir que não há brinquedos repetidos
    
3.  **Fornece feedback:** Logs detalhados mostrando o processo de validação
    

**Fluxo de validação:**

    // Para cada brinquedo:
    -  Se não está na lista válida → ERRO
    -  Se está duplicado → ERRO  
    -  Se é válido e único → OK

**Exemplo de uso:**

    abrigo.validarBrinquedos(['BOLA', 'RATO']); // Válido
    abrigo.validarBrinquedos(['BOLA', 'CARRO']); //  Erro (carro não é válido)

* * *    


Método `validarAnimais(animais)`
--------------------------------

**Função:** Valida se os animais fornecidos existem no sistema.

**O que faz:**

1.  **Verifica existência:** Confirma se cada animal está registrado em `this.animais`
    
2.  **Previne duplicatas:** Garante que não há animais repetidos na lista
    
3.  **Fornece informações:** Mostra detalhes do animal (tipo e brinquedos favoritos)
    

**Fluxo de validação:**

    // Para cada animal:
    -  Se não existe no banco de dados → ERRO
    -  Se está duplicado → ERRO
    -  Se existe e é único → OK (mostra informações)

**Exemplo de uso:**

    abrigo.validarAnimais(['Rex', 'Mimi']); //  Válido
    abrigo.validarAnimais(['Rex', 'Toto']); //  Erro (Toto não existe)

* * *

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

