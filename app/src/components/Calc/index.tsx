import { useState } from "react";
import Button from "../../components/Button";

const Calc = () => {
    const [total, setTotal] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const handleCalc = () => {
        setTotal(num1 + num2);
    }

    return (
        <>
            <input type="text" placeholder="Valor 1" onChange={e => setNum1(Number(e.target.value))} />
            <input type="text" placeholder="Valor 2" onChange={e => setNum2(Number(e.target.value))} />
            <p>TOTAL:</p>
            <p>{total}</p>
            <Button textButton={"Calcular"} click={() => handleCalc} />
        </>
    );
}

export default Calc;