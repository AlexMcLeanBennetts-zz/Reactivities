import Spinner from "./Spinner";

type ButtonTypes = "button" | "submit" | "reset" | undefined

interface Props {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type: ButtonTypes;
    className: string;
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
    isLoading?: boolean;
    name?: string;
    disabled?: boolean;
}


export default function Button({ onClick, name, type, className, children, isLoading, disabled }: Props) {
    let formattedClassNames = className;
    if (disabled) {
        formattedClassNames = className + ' !bg-gray-400 !border-gray-400';
    }

    return (
        <button onClick={onClick} className={formattedClassNames} type={type} name={name} disabled={disabled}>
            {isLoading ? <Spinner /> : children}
        </button>
    )
}