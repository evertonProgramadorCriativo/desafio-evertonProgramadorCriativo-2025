import { AbrigoAnimais } from "./abrigo-animais";

describe('Abrigo de Animais', () => {

  test('Deve rejeitar animal inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');

      expect(resultado.lista[0]).toBe('Bola - abrigo');
      expect(resultado.lista[1]).toBe('Fofo - pessoa 2');
      expect(resultado.lista[2]).toBe('Mimi - abrigo');
      expect(resultado.lista[3]).toBe('Rex - abrigo');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });
   // Teste principais
  test('Deve encontrar pessoa para um animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });
  
  test('Deve encontrar pessoa para um animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');

      expect(resultado.lista[0]).toBe('Bola - abrigo');
      expect(resultado.lista[1]).toBe('Fofo - pessoa 2');
      expect(resultado.lista[2]).toBe('Mimi - abrigo');
      expect(resultado.lista[3]).toBe('Rex - abrigo');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

   // Regra  Ordem dos brinquedos
  test('Deve respeitar ordem dos brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'BOLA,RATO', 'RATO,BOLA', 'Rex');
    expect(resultado.lista[0]).toBe('Rex - pessoa 2');
  });

    // Regra : Intercalar brinquedos
  test('Deve permitir intercalar brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'LASER,SKATE,RATO,BOLA', 'NOVELO', 'Bebe');
    expect(resultado.lista[0]).toBe('Bebe - pessoa 1');
  });
  // Regra : Se ambas podem, ninguém fica
  test('Se ambas as pessoas podem adotar, animal fica no abrigo', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,BOLA', 'Rex');
    expect(resultado.lista[0]).toBe('Rex - abrigo');
  });

    // Regra : Máximo 3 animais por pessoa
  test('Pessoa não pode levar mais de 3 animais', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,LASER,CAIXA,NOVELO,SKATE', 'NOVELO', 'Rex,Mimi,Bebe,Bola');
    
    const pessoa1Adocoes = resultado.lista.filter(item => item.includes('pessoa 1'));
    expect(pessoa1Adocoes.length).toBeLessThanOrEqual(3);
  });

});
