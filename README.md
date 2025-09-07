# ABRIGO DE ANIMAIS


## Sobre o Projeto


#### O projeto é uma simulação de um sistema de gerenciamento de animais em um abrigo, com foco nos brinquedos favoritos de cada animal.






````bash
const abrigo = new AbrigoAnimais();

     // A Função aplicarRegragatosAplica: se duas pessoas adotam gatos que compartilham brinquedos,
    // todos os gatos são devolvidos ao abrigo para evitar conflitos
    aplicarRegraGatos(adocoesPessoa1, adocoesPessoa2, animaisAbrigo) {
        console.log(`\n APLICANDO REGRA DOS GATOS:`);

        // Encontrar gatos adotados por cada pessoa
        const gatosP1 = adocoesPessoa1.filter(adocao => {
            const nomeAnimal = adocao.split(' - ')[0]; // Extrai o nome do animal da string de adoção
            const ehGato = this.animais[nomeAnimal].tipo === 'gato'; // Verifica se é um gato
            if (ehGato) console.log(`  Pessoa 1 tem gato: ${nomeAnimal}`);
            return ehGato;
        });

        const gatosP2 = adocoesPessoa2.filter(adocao => {
            const nomeAnimal = adocao.split(' - ')[0];
            const ehGato = this.animais[nomeAnimal].tipo === 'gato';
            if (ehGato) console.log(`  Pessoa 2 tem gato: ${nomeAnimal}`);
            return ehGato;
        });

        console.log(`  Pessoa 1: ${gatosP1.length} gatos, Pessoa 2: ${gatosP2.length} gatos`);

        // Verificar conflito apenas se ambas pessoas têm gatos
        if (gatosP1.length > 0 && gatosP2.length > 0) {
            console.log(`  AMBAS PESSOAS TEM GATOS - Verificando conflito de brinquedos...`);

            const brinquedosGatosP1 = new Set(); //  armazenar brinquedos únicos
            const brinquedosGatosP2 = new Set();

            // Coletar brinquedos dos gatos da pessoa 1
            gatosP1.forEach(adocao => {
                const nomeAnimal = adocao.split(' - ')[0];
                console.log(`    Gatos P1 - ${nomeAnimal}: [${this.animais[nomeAnimal].brinquedos.join(', ')}]`);
                this.animais[nomeAnimal].brinquedos.forEach(b => brinquedosGatosP1.add(b));
            });

            // Coletar brinquedos dos gatos da pessoa 2
            gatosP2.forEach(adocao => {
                const nomeAnimal = adocao.split(' - ')[0];
                console.log(`    Gatos P2 - ${nomeAnimal}: [${this.animais[nomeAnimal].brinquedos.join(', ')}]`);
                this.animais[nomeAnimal].brinquedos.forEach(b => brinquedosGatosP2.add(b));
            });

            console.log(`  Brinquedos gatos P1: [${[...brinquedosGatosP1].join(', ')}]`);
            console.log(`  Brinquedos gatos P2: [${[...brinquedosGatosP2].join(', ')}]`);

            // Verificar se há brinquedos em comum entre os gatos das duas pessoas
            const brinquedosConflito = [...brinquedosGatosP1].filter(b => brinquedosGatosP2.has(b));
            const temConflito = brinquedosConflito.length > 0;

            if (temConflito) {
                console.log(`  CONFLITO DETECTADO! Brinquedos em comum: [${brinquedosConflito.join(', ')}]`);
                console.log(`  MOVENDO TODOS OS GATOS PARA O ABRIGO...`);

                const todosGatos = [...gatosP1, ...gatosP2];
                const novosAdocoesPessoa1 = [...adocoesPessoa1]; // Cria cópias para não modificar originais
                const novosAdocoesPessoa2 = [...adocoesPessoa2];
                const novosAnimaisAbrigo = [...animaisAbrigo];

                // Remove todos os gatos das listas de adoção e move para o abrigo
                todosGatos.forEach(gatoAdocao => {
                    const nomeAnimal = gatoAdocao.split(' - ')[0];
                    console.log(`    Movendo ${nomeAnimal} para o abrigo`);

                    // Remover das listas de adoção das pessoas
                    const indexP1 = novosAdocoesPessoa1.findIndex(a => a.startsWith(nomeAnimal));
                    if (indexP1 !== -1) novosAdocoesPessoa1.splice(indexP1, 1);

                    const indexP2 = novosAdocoesPessoa2.findIndex(a => a.startsWith(nomeAnimal));
                    if (indexP2 !== -1) novosAdocoesPessoa2.splice(indexP2, 1);

                    // Adicionar ao abrigo se não estiver lá
                    if (!novosAnimaisAbrigo.some(a => a.startsWith(nomeAnimal))) {
                        novosAnimaisAbrigo.push(`${nomeAnimal} - abrigo`);
                    }
                });

                console.log(`  REGRA DOS GATOS APLICADA: ${todosGatos.length} gatos movidos para abrigo`);
                return {
                    adocoesPessoa1: novosAdocoesPessoa1,
                    adocoesPessoa2: novosAdocoesPessoa2,
                    animaisAbrigo: novosAnimaisAbrigo
                };
            } else {
                console.log(`  SEM CONFLITO: Gatos podem ficar com suas respectivas pessoas`);
            }
        } else {
            console.log(`  SEM CONFLITO: Apenas uma pessoa (ou nenhuma) tem gatos`);
        }

        return { adocoesPessoa1, adocoesPessoa2, animaisAbrigo };
    }

````

```

 --- Cenário onde ambas pessoas têm gatos com brinquedos em comum ---

 APLICANDO REGRA DOS GATOS:
  Pessoa 1 tem gato: Mimi
  Pessoa 2 tem gato: Fofo
  Pessoa 1: 1 gatos, Pessoa 2: 1 gatos
  AMBAS PESSOAS TEM GATOS - Verificando conflito de brinquedos...
    Gatos P1 - Mimi: [BOLA, LASER]
    Gatos P2 - Fofo: [BOLA, RATO, LASER]
  Brinquedos gatos P1: [BOLA, LASER]
  Brinquedos gatos P2: [BOLA, RATO, LASER]
  CONFLITO DETECTADO! Brinquedos em comum: [BOLA, LASER]
  MOVENDO TODOS OS GATOS PARA O ABRIGO...
    Movendo Mimi para o abrigo
    Movendo Fofo para o abrigo
  REGRA DOS GATOS APLICADA: 2 gatos movidos para abrigo
Resultado: {
  adocoesPessoa1: [ 'Rex - pessoa 1' ],
  adocoesPessoa2: [ 'Bola - pessoa 2' ],
  animaisAbrigo: [ 'Zero - abrigo', 'Mimi - abrigo', 'Fofo - abrigo' ]
}

 SEM CONFLITO (brinquedos diferentes) ---------

 APLICANDO REGRA DOS GATOS:
  Pessoa 1 tem gato: Mimi
  Pessoa 2 tem gato: Zero
  Pessoa 1: 1 gatos, Pessoa 2: 1 gatos
  AMBAS PESSOAS TEM GATOS - Verificando conflito de brinquedos...
    Gatos P1 - Mimi: [BOLA, LASER]
    Gatos P2 - Zero: [RATO, BOLA]
  Brinquedos gatos P1: [BOLA, LASER]
  Brinquedos gatos P2: [RATO, BOLA]
  CONFLITO DETECTADO! Brinquedos em comum: [BOLA]
  MOVENDO TODOS OS GATOS PARA O ABRIGO...
    Movendo Mimi para o abrigo
    Movendo Zero para o abrigo
  REGRA DOS GATOS APLICADA: 2 gatos movidos para abrigo
Resultado: {
  adocoesPessoa1: [],
  adocoesPessoa2: [],
  animaisAbrigo: [ 'Mimi - abrigo', 'Zero - abrigo' ]
}
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

