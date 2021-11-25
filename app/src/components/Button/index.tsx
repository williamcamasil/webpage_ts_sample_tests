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