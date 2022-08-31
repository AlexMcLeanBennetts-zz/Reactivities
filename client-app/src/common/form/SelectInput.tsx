import ValidationErrors from "features/errors/ValidationErrors";
import { useField } from "formik";

type Options = {
    text: string
    value: string
}

interface Props {
    name: string
    placeholder?: string
    options: Options[]
    label?: string
}

function SelectInput(props: Props) {
    const [field, meta] = useField(props.name);
    const formOptions = [{ text: '--- Select an option ---', value: '' }, ...props.options]

    return (
        <div className="formContainer">
            <label htmlFor={props.name}>{props.label}</label>
            <select
                {...field}
                placeholder={props.placeholder}
                name={props.name}
            >
                {formOptions.map(option => <option value={option.value} key={option.value}>{option.text}</option>)}
            </select>

            {meta.touched && !!meta.error && meta.value === '' ? (
                <ValidationErrors errors={[meta.error!]} />
            ) : null}
        </div>
    )
}

export default SelectInput;