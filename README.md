# ABRIGO DE ANIMAIS


## Sobre o Projeto


#### O projeto é uma simulação de um sistema de gerenciamento de animais em um abrigo, com foco nos brinquedos favoritos de cada animal.






````bash
const abrigo = new AbrigoAnimais();

    // método principal do sistema
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
            console.log(`ERRO NO SISTEMA: ${error.message}`);
     

            // Retorna erro no formato de objeto
            return { erro: error.message };
        }
    }
}

````
// Caso básico com adoções normais
const resultado1 = abrigo.processarAdocoes(
    ['RATO', 'BOLA', 'LASER'],  // Pessoa 1
    ['BOLA', 'CAIXA', 'NOVELO'], // Pessoa 2
    ['Rex', 'Mimi', 'Fofo']      // Ordem dos animais
);
console.log("Resultado final:", resultado1);

// Limite de 3 animais por pessoa
const resultado2 = abrigo.processarAdocoes(
    ['RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO'], // Pessoa 1 tem muitos brinquedos
    ['BOLA'],                                      // Pessoa 2 tem poucos brinquedos
    ['Rex', 'Mimi', 'Fofo', 'Zero', 'Bola', 'Bebe'] // Muitos animais
);
console.log("Resultado final:", resultado2);

//  Ambas podem adotar

const resultado3 = abrigo.processarAdocoes(
    ['RATO', 'BOLA'],    // Ambas têm os brinquedos necessários
    ['RATO', 'BOLA'],    // para alguns animais
    ['Rex', 'Zero']      // Animais que ambas podem adotar
);
console.log("Resultado final:", resultado3);

// Com regra dos gatos (conflito)

const resultado4 = abrigo.processarAdocoes(
    ['BOLA', 'LASER'],   // Pessoa 1 - pode adotar Mimi
    ['BOLA', 'RATO'],    // Pessoa 2 - pode adotar Zero
    ['Mimi', 'Zero']     // Dois gatos que terão conflito
);
console.log("Resultado final:", resultado4);

//   Animal especial Loco

const resultado5 = abrigo.processarAdocoes(
    ['SKATE', 'RATO'],   // Ordem correta para Loco
    ['RATO', 'SKATE'],   // Ordem errada para Loco
    ['Loco']             // Apenas Loco (regra especial)
);
console.log("Resultado final:", resultado5);

// Todos todos animais e brinquedos

const resultado6 = abrigo.processarAdocoes(
    ['RATO', 'BOLA', 'LASER', 'CAIXA', 'SKATE'], // Pessoa 1
    ['BOLA', 'LASER', 'RATO', 'NOVELO'],         // Pessoa 2
    ['Rex', 'Mimi', 'Fofo', 'Zero', 'Bola', 'Bebe', 'Loco'] // Todos os animais
);
console.log("Resultado final:", resultado6);


```

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

// Todos Animais e Brinquedo

const resultado4 = abrigo.encontraPessoas(
    "RATO,BOLA,LASER,NOVELO",
    "CAIXA,SKATE,RATO,BOLA", 
    "Rex,Mimi,Fofo,Zero,Bola,Bebe,Loco"  // Todos os animais
);
console.log("Resultado:", resultado4);

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
Método `verificarOrdemBrinquedos(brinquedosPessoa, brinquedosAnimais)`
-------------------------------------------------------------------

**Funcionamento:**

*   Verifica se os brinquedos da pessoa aparecem na mesma ordem que os brinquedos preferidos do animal
    
*   A ordem deve ser mantida, mas a pessoa pode ter brinquedos extras entre os necessários
    
*   Retorna `true` se a ordem estiver correta, `false` caso contrário
    

Método `pessoaPodeAdotar(brinquedosPessoa, animal, nomeAnimal, totalAnimais)`
--------------------------------------------------------------------------

**Funcionamento:**

*   Verifica se uma pessoa pode adotar um animal específico
    
*   Para o animal "Loco": se houver mais de 1 animal, ignora a ordem (apenas verifica se tem todos os brinquedos)
    
*   Para outros animais: aplica a verificação normal de ordem
    
*   Retorna `true` se pode adotar, `false` caso contrário
    

* * *



Método  `aplicarRegraGatos(adocoesPessoa1, adocoesPessoa2, animaisAbrigo)`
----------------------------------------------------------------------

**Regra especial** para evitar conflitos entre gatos.

**Funcionalidades:**

*   Verifica se AMBAS as pessoas adotaram gatos
    
*   Se sim, compara os brinquedos favoritos dos gatos de cada pessoa
    
*   Se houver brinquedos em comum → **CONFLITO DETECTADO**
    
*   Em caso de conflito, move TODOS os gatos para o abrigo
    
*   Se não houver conflito ou apenas uma pessoa tiver gatos, mantém as adoções



Método  `processarAdocoes(brinquedos1, brinquedos2, animaisOrdem)`
--------------------------------------------------------------

**Núcleo do sistema** que decide qual pessoa adota cada animal.

**Funcionalidades:**

*   Processa cada animal na ordem especificada
    
*   Verifica se cada pessoa pode adotar baseado nos brinquedos disponíveis
    
*   Aplica regras de prioridade:
    
    *   Se ambas podem adotar → animal vai para abrigo
        
    *   Se apenas uma pode → aquela pessoa adota
        
    *   Se nenhuma pode → animal vai para abrigo
        
    *   Limite máximo de 3 animais por pessoa
        
*   Chama a regra especial dos gatos após processamento inicial
    
*   Retorna o resultado final ordenado
    
    
Método  `encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais)`
-------------------------------------------------------------------------

**Função principal** que inicia todo o processo de adoção.

**Funcionalidades:**

*   Recebe os brinquedos de cada pessoa e a ordem dos animais
    
*   Faz parsingSTR e validação das entradas
    
*   Chama o processamento principal das adoções
    
*   Retorna o resultado final ou mensagem de erro
    
*   Serve como ponto de entrada do sistema
    



Como Executar
--------------

### Pré-requisitos

*   Node.js instalado (versão 14 ou superior)
    

### Passos para Execução

1.  **Clone ou baixe o projeto**
    
        git clone <url-do-repositorio>
        cd nome-do-projeto
    
2.  **Execute o arquivo principal**
    ````bash

        npm start # roda o projeto no Console.log
        npm test  # roda os teste no jest

  ````

