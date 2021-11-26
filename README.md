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



### Assertions

Mais comum em métodos async.

Significa que se espera que tenha expects, a quantidade é definida pelo der, ex.:

```typescript
import { render, screen } from "@testing-library/react";
import Button from "..";

describe("<Button />", () => {
    it('should render the button with the text "Calcular"', () => {
        render(<Button textButton="Calcular" click={() => {}}/>);
        
       	//Nesse caso possui 1 assertions do button
        expect.assertions(1);
        
        const button = screen.getByRole('button', { name: /Calcular/i });
        expect(button).toBeInTheDocument();
    })
});
```



#### Button.tsx

```tsx
type Props = {
    textButton: string;
    click: Function;
};

const Button = ({ textButton, click }: Props) => {
    return (
        <button onClick={click()}>{textButton}</button>
    );
}

export default Button;
```



### coverage

Da mais detalhes sobre os testes, como executar:

```
yarn test -- --coverage
```



### [Outros exemplos de teste](https://www.youtube.com/watch?v=pbwXsjVEMqg)

```typescript
import { render, screen } from "@testing-library/react";
import Counter from ".";

describe("Counter Component", () => {
  //Teste para verificar se na tela o counter começa com 0
  it("should start with title value 0", () => {
    render(<Counter />);
    
    // quando da erro nem chega no expect
    const counterTitle = screen.getByText("0");
    // quando da erro o retorno é null, dessa forma não quebra
    //const counterTitle = screen.queryByText("0");
    // retorna uma promisse, ou seja não é apressado para retornar
    //const counterTitle = screen.findByText("0");
    
    expect(counterTitle).toBeInTheDocument();
  });
  
  //Teste para verificar se existe botão com texto incrementar
  it("should have a increment button", () => {
    render(<Counter />);
    //alem do getByRole existe o getByAllRoles que pega todos os componentes do mesmo tipo, ex.: button
    const buttonIncrement = screen.getByRole("button", {
    	name: /incrementar/i,       
    });
  
  	expect(buttonIncrement).toBeInTheDocument();
  });

	//Testando o EVENTO de clicar no botao e incrementar
	it("should increment +1 when click increment button", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", {
    	name: /incrementar/i,       
    });
  	
		//O userEvent, permite vários eventos, nesse caso usamos o de click do botao para simular o incrementar esperando sair de 0 para ir para 1 
		userEvent.click(buttonIncrement);
  	expect(screen.getByText("1")).toBeInTheDocument();
  });
});
```





---



Duvidas

- Como conectar função ao test?
- Como conectar componente ao test?