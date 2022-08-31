import ValidationErrors from "features/errors/ValidationErrors";
import { useField } from "formik";
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

function DateInput(props: Partial<ReactDatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);

    return (
        <div className="formContainer">
            <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value => helpers.setValue(value)}
            />
            {meta.touched && !!meta.error ? (
                <ValidationErrors errors={[meta.error!]} />
            ) : null}
        </div>
    )
}

export default DateInput;