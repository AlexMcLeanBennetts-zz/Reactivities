interface Props {
    errors: string[] | null
}

function ValidationErrors({ errors }: Props) {
    return (
        <div className="bg-red-200 py-2 px-7 mt-5 rounded-lg">
            {errors && (
                <ul>

                    {errors.map((error: any, i) => (
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