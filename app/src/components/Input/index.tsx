type Props = {
    placeHolder: string;
    // change: Function;
};

const Input = ({ placeHolder }: Props) => {
    return (
        <input 
            type="text" 
            placeholder={placeHolder} 
            // onChange={e => setNum1(Number(e.target.value))} 
        />
    );
}

export default Input;