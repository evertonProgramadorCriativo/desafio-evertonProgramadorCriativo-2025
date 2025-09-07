# ABRIGO DE ANIMAIS


## Sobre o Projeto


#### O projeto é uma simulação de um sistema de gerenciamento de animais em um abrigo, com foco nos brinquedos favoritos de cada animal.






````bash
const abrigo = new AbrigoAnimais();

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

Método  `encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais)`
-------------------------------------------------------------------------

**Função principal** que inicia todo o processo de adoção.

**Funcionalidades:**

*   Recebe os brinquedos de cada pessoa e a ordem dos animais
    
*   Faz parsingSTR e validação das entradas
    
*   Chama o processamento principal das adoções
    
*   Retorna o resultado final ou mensagem de erro
    
*   Serve como ponto de entrada do sistema
    

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
    

Método  `aplicarRegraGatos(adocoesPessoa1, adocoesPessoa2, animaisAbrigo)`
----------------------------------------------------------------------

**Regra especial** para evitar conflitos entre gatos.

**Funcionalidades:**

*   Verifica se AMBAS as pessoas adotaram gatos
    
*   Se sim, compara os brinquedos favoritos dos gatos de cada pessoa
    
*   Se houver brinquedos em comum → **CONFLITO DETECTADO**
    
*   Em caso de conflito, move TODOS os gatos para o abrigo
    
*   Se não houver conflito ou apenas uma pessoa tiver gatos, mantém as adoções
    


    


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

