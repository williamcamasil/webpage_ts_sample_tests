import { render, screen } from "@testing-library/react";
import Button from "..";

describe("<Button />", () => {
    it('should render the button with the text "Calcular"', () => {
        render(<Button textButton="Calcular" click={() => {}}/>);
        const button = screen.getByRole('button', { name: /Calcular/i });
        expect(button).toBeInTheDocument();
    })
});