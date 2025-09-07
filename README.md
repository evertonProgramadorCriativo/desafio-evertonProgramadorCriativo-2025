# ABRIGO DE ANIMAIS


## Sobre o Projeto


#### O projeto é uma simulação de um sistema de gerenciamento de animais em um abrigo, com foco nos brinquedos favoritos de cada animal.






````bash
const abrigo = new AbrigoAnimais();

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

````

```
EXEMPLO 1 ---

 VERIFICANDO ORDEM DE BRINQUEDOS:
   Pessoa tem: [RATO, BOLA, LASER, CAIXA]
   Animal precisa: [RATO, BOLA, LASER]

  Procurando "RATO" (1/3)
 Buscando a partir da posição 0
 Posição 0: "RATO"
ENCONTRADO na posição 0! Próxima busca a partir da posição 1

  Procurando "BOLA" (2/3)
 Buscando a partir da posição 1
 Posição 1: "BOLA"
ENCONTRADO na posição 1! Próxima busca a partir da posição 2

  Procurando "LASER" (3/3)
 Buscando a partir da posição 2
 Posição 2: "LASER"
ENCONTRADO na posição 2! Próxima busca a partir da posição 3
ORDEM CORRETA: Todos os brinquedos foram encontrados na sequência adequada
Resultado: true

 EXEMPLO 2 -------

 VERIFICANDO ORDEM DE BRINQUEDOS:
   Pessoa tem: [BOLA, RATO, LASER]
   Animal precisa: [RATO, BOLA, LASER]

  Procurando "RATO" (1/3)
 Buscando a partir da posição 0
 Posição 0: "BOLA"
 Posição 1: "RATO"
ENCONTRADO na posição 1! Próxima busca a partir da posição 2

  Procurando "BOLA" (2/3)
 Buscando a partir da posição 2
 Posição 2: "LASER"
NÃO ENCONTRADO: "BOLA" não foi encontrado na ordem correta
ORDEM INCORRETA: Falha ao encontrar "BOLA"
Resultado: false


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

