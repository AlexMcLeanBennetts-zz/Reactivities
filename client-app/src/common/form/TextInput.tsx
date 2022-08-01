import ValidationErrors from "features/errors/ValidationErrors";
import { useField } from "formik";

interface Props {
    name: string
    placeholder?: string
    label?: string
    type?: string
}

function TextInput(props: Props) {
    const [field, meta] = useField(props.name);

    return (
        <div className="formContainer">
            <label htmlFor="title">{props.label}</label>
            <input {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <ValidationErrors errors={[meta.error!]} />
            ) : null}
        </div>
    )
}

export default TextInput;