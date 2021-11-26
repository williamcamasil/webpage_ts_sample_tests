import { render, screen } from "@testing-library/react";
import Calc from "..";

describe("<Calc />", () => {
    //testando o texto inserido no botao
    it('should render text "TOTAL"', () => {
        render(
            <Calc />
        );
        
        expect(screen.getByText('TOTAL:')).toBeInTheDocument();
        //expect.assertions(1);
        
        // const input = screen.getByRole('input', { name: /Calcular/i });
        // expect(button).toBeInTheDocument();
    });
});