interface Props {
    errors: any
}

function ValidationErrors({ errors }: Props) {
    return (
        <div className="bg-red-200 py-2 px-7 my-5 rounded-lg">
            {errors && (
                <ul>

                    {errors.map((error: any, i: any) => (
                        <li
                            key={i}
                            className="list-disc"
                        >
                            {error}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default ValidationErrors