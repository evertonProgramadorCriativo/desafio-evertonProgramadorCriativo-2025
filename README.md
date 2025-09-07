# ABRIGO DE ANIMAIS


## Sobre o Projeto


#### O projeto é uma simulação de um sistema de gerenciamento de animais em um abrigo, com foco nos brinquedos favoritos de cada animal.






````bash
const abrigo = new AbrigoAnimais();

    // Implementar regra especial do Loco
    pessoaPodeAdotar(brinquedosPessoa, animal, nomeAnimal, totalAnimais) {
        console.log(`\n VERIFICANDO SE PESSOA PODE ADOTAR ${nomeAnimal}:`);
        console.log(` Animal: ${nomeAnimal} (${animal.tipo})`);
        console.log(` Precisa de: [${animal.brinquedos.join(', ')}]`);
        console.log(` Pessoa tem: [${brinquedosPessoa.join(', ')}]`);
        console.log(` Total de animais: ${totalAnimais}`);
        
        // Regra especial para Loco
        if (nomeAnimal === 'Loco' && totalAnimais > 1) {
            console.log(` REGRA ESPECIAL DO LOCO: Como há ${totalAnimais} animais (> 1), Loco não se importa com a ordem!`);
            
            const temTodosBrinquedos = animal.brinquedos.every(brinquedo => {
                const tem = brinquedosPessoa.includes(brinquedo);
                console.log(`"{brinquedo}": ${tem ? ' TEM' : ' NÃO TEM'}`);
                return tem;
            });
            
            const resultado = temTodosBrinquedos;
            console.log(` RESULTADO LOCO: ${resultado ? ' PODE ADOTAR' : ' NÃO PODE ADOTAR'}`);
            return resultado;
        }
        
        // Regra geral para outros animais
        console.log(` REGRA GERAL: Verificando ordem dos brinquedos...`);
        const podeAdotar = this.verificarOrdemBrinquedos(brinquedosPessoa, animal.brinquedos);
        console.log(` RESULTADO: ${podeAdotar ? 'PODE ADOTAR' : ' NÃO PODE ADOTAR'}`);
        return podeAdotar;
    }

````

```

 EXEMPLO 3 ----

 VERIFICANDO SE PESSOA PODE ADOTAR Mimi:
 Animal: Mimi (gato)
 Precisa de: [BOLA, LASER]
 Pessoa tem: [BOLA, LASER, RATO]
 Total de animais: 3
 REGRA GERAL: Verificando ordem dos brinquedos...

 VERIFICANDO ORDEM DE BRINQUEDOS:
   Pessoa tem: [BOLA, LASER, RATO]
   Animal precisa: [BOLA, LASER]

  Procurando "BOLA" (1/2)
 Buscando a partir da posição 0
 Posição 0: "BOLA"
ENCONTRADO na posição 0! Próxima busca a partir da posição 1

  Procurando "LASER" (2/2)
 Buscando a partir da posição 1
 Posição 1: "LASER"
ENCONTRADO na posição 1! Próxima busca a partir da posição 2
ORDEM CORRETA: Todos os brinquedos foram encontrados na sequência adequada
 RESULTADO: PODE ADOTAR
Pode adotar Mimi: true

 EXEMPLO 4 ------

 VERIFICANDO SE PESSOA PODE ADOTAR Loco:
 Animal: Loco (jabuti)
 Precisa de: [SKATE, RATO]
 Pessoa tem: [SKATE, RATO, BOLA]
 Total de animais: 2
 REGRA ESPECIAL DO LOCO: Como há 2 animais (> 1), Loco não se importa com a ordem!
"{brinquedo}":  TEM
"{brinquedo}":  TEM
 RESULTADO LOCO:  PODE ADOTAR
Pode adotar Loco: true

 EXEMPLO 5 -------

 VERIFICANDO SE PESSOA PODE ADOTAR Loco:
 Animal: Loco (jabuti)
 Precisa de: [SKATE, RATO]
 Pessoa tem: [SKATE, RATO, BOLA]
 Total de animais: 1
 REGRA GERAL: Verificando ordem dos brinquedos...

 VERIFICANDO ORDEM DE BRINQUEDOS:
   Pessoa tem: [SKATE, RATO, BOLA]
   Animal precisa: [SKATE, RATO]

  Procurando "SKATE" (1/2)
 Buscando a partir da posição 0
 Posição 0: "SKATE"
ENCONTRADO na posição 0! Próxima busca a partir da posição 1

  Procurando "RATO" (2/2)
 Buscando a partir da posição 1
 Posição 1: "RATO"
ENCONTRADO na posição 1! Próxima busca a partir da posição 2
ORDEM CORRETA: Todos os brinquedos foram encontrados na sequência adequada
 RESULTADO: PODE ADOTAR
Pode adotar Loco (apenas 1 animal): true
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

