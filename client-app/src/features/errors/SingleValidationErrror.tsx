interface Props {
    error: string | undefined
}

function SingleValidationError({ error }: Props) {
    return (
        <div className="bg-red-200 py-2 px-7 mt-5 rounded-lg">
            <ul>
                <li>
                    {error}
                </li>

            </ul>
        </div>
    )
}
export default SingleValidationError