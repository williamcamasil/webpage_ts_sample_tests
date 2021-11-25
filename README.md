# [Testes](https://github.com/sapegin/jest-cheat-sheet)

### Tipos de testes

- Unitario (mais usado por nos)
  - Componentes
  - Funções
  - Requisições (mockada)
- Automação
- Ponta a ponta

## [Testes com JEST](https://github.com/sapegin/jest-cheat-sheet) (funções, mocks, etc.)

### Estrutura dos testes

```typescript
//DESCRIBE - bloco para juntar os testes, dentro dele pode conter varios testes, e pode existir mais de um bloco DESCRIBE. No describe você descreve o que irá conter no grupo de testes, e 2 parametro será o método com os testes
describe('makePoniesPink', () => {
  beforeAll(() => {
    /* Runs BEFORE ALL tests */
  })
  afterAll(() => {
    /* Runs AFTER ALL tests */
  })
  beforeEach(() => {
    /* Runs BEFORE EACH test */
  })
  afterEach(() => {
    /* Runs AFTER EACH test */
  })

  //Existe TEST e IT, para leitura é melhor IT, no entanto ambos tem as mesmas funcionalidades. Inseri uma descrição do teste, e 2 parametro será o método do teste
  test('make each pony pink', () => {
    const actual = fn(['Alice', 'Bob', 'Eve'])
    expect(actual).toEqual(['Pink Alice', 'Pink Bob', 'Pink Eve'])
  })
})

```



### Mathers para usar com o expect

- toBe - (===) verifica se é igual (não usado para objetos), usado para valores primitivos (ex.: 42, 'Joao', false, 56.9)
- not.toBe - (!==) verifica se é diferente
- toEqual - verifica se é igual (nesse caso em objetos e arrays)

### Truthiness

```typescript
// Matches anything that an if statement treats as true (not false, 0, '', null, undefined, NaN)
expect('foo').toBeTruthy()
// Matches anything that an if statement treats as false (false, 0, '', null, undefined, NaN)
expect('').toBeFalsy()
// Matches only null
expect(null).toBeNull()
// Matches only undefined
expect(undefined).toBeUndefined()
// The opposite of toBeUndefined
expect(7).toBeDefined()
// Matches true or false
expect(true).toEqual(expect.any(Boolean))
```



## [Testes com Testing-Library](https://github.com/testing-library/jest-dom) / Jest-dom (componentes)

- render
- screen
- getByTestId

### Executar teste

```
yarn test
OU
npm test
```



### Nome dos testes

- Button.spec.tsx - teste unitários 
- Button.test.tsx - teste de integração  



Duvidas

- Como conectar função ao test?
- Como conectar componente ao test?