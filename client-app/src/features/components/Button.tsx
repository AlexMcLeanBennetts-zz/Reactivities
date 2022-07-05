import Spinner from "./Spinner";

type ButtonTypes = "button" | "submit" | "reset" | undefined

interface Props {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type: ButtonTypes;
    className: string;
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
    isLoading?: boolean;
    name?: string;
}


export default function Button({ onClick, name, type, className, children, isLoading }: Props) {
    return (
        <button onClick={onClick} className={className} type={type} name={name}>
            {isLoading ? <Spinner /> : children}
        </button>
    )
}