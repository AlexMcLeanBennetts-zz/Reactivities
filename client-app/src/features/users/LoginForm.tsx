import { useStore } from "app/stores/store";
import Button from "common/Button"
import TextInput from "common/form/TextInput"
import SingleValidationError from "features/errors/SingleValidationErrror";
import { Form, Formik } from "formik"
import { observer } from "mobx-react-lite";

function LoginForm() {
    const { userStore } = useStore();
    return (
        <Formik
            initialValues={{ email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => userStore.login(values).catch(error =>
                setErrors({ error: "Invalid email or password" }))}
        >
            {({ handleSubmit, isSubmitting, errors }) => (
                <Form className="" onSubmit={handleSubmit} autoComplete='off'>
                    <TextInput name="email" label="Email" />
                    <TextInput name="password" label="Password" type="password" />
                    {errors.error && <SingleValidationError error={errors.error} />}
                    <Button className="" type="submit" isLoading={isSubmitting}>Login</Button>
                </Form>
            )}

        </Formik>
    )
}

export default observer(LoginForm)