import ValidationErrors from "features/errors/ValidationErrors";
import { ErrorMessage, useField } from "formik";

interface Props {
    name: string
    placeholder?: string
    rows: number
    label?: string
}

function TextArea(props: Props) {
    const [field, meta] = useField(props.name);

    return (
        <div className="formContainer">
            <label htmlFor="title">{props.label}</label>
            <textarea
                {...field}
                {...props}
            />
            {meta.touched && !!meta.error ? (
                <ValidationErrors errors={[meta.error!]} />
            ) : null}
        </div>
    )
}

export default TextArea;