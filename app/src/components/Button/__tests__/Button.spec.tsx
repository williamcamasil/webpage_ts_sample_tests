import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "..";

describe("<Button />", () => {
    //testando o texto inserido no botao
    it('should render the button with the text "Calcular"', () => {
        render(<Button textButton="Calcular" click={() => {}}/>);
        
        //expect.assertions(1);
        
        const button = screen.getByRole('button', { name: /Calcular/i });
        expect(button).toBeInTheDocument();
    });

    //Testando clique do botao com funcao fn
    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button textButton="Calcular" click={() => fn} />);

        const button = screen.getByRole('button', { name: /Calcular/i });

        userEvent.click(button);
        // userEvent.click(button);
        // userEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });
});