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
                    <h1 className="text-2xl font-bold text-[#20a7ac] pb-2">Login to Reactivities</h1>
                    <TextInput name="email" label="Email" />
                    <TextInput name="password" label="Password" type="password" />
                    {errors.error && <SingleValidationError error={errors.error} />}
                    <Button className="bg-[#20a7ac] w-full py-2 rounded-lg text-white font-bold" type="submit" isLoading={isSubmitting}>Login</Button>
                </Form>
            )}

        </Formik>
    )
}

export default observer(LoginForm)