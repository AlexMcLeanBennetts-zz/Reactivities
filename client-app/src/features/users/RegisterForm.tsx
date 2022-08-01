import { useStore } from "app/stores/store";
import Button from "common/Button"
import TextInput from "common/form/TextInput"
import ValidationErrors from "features/errors/ValidationErrors";
import { Form, Formik } from "formik"
import { observer } from "mobx-react-lite";
import * as Yup from 'yup'

function RegisterForm() {
    const { userStore } = useStore();

    const validationSchema = Yup.object({
        displayName: Yup.string().required('Please provide a display name'),
        username: Yup.string().required('Please provide a username'),
        email: Yup.string().required('Please provide a correct email').email(),
        password: Yup.string().required(),
    })

    return (
        <Formik
            initialValues={{ email: '', password: '', displayName: '', username: '', error: null }}
            onSubmit={(values, { setErrors }) => userStore.register(values).catch(error =>
                setErrors({ error }))}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                <Form className="" onSubmit={handleSubmit} autoComplete='off'>
                    <h1 className="text-2xl font-bold text-[#20a7ac] pb-2">Sign up to Reactivities</h1>
                    <TextInput name="displayName" label="Display name" />
                    <TextInput name="username" label="Username" />
                    <TextInput name="email" label="Email" />
                    <TextInput name="password" label="Password" type="password" />
                    {errors.error && <ValidationErrors errors={errors.error} />}
                    <Button
                        disabled={!isValid || !dirty || isSubmitting}
                        className="bg-[#20a7ac] w-full py-2 rounded-lg text-white font-bold"
                        type="submit"
                        isLoading={isSubmitting}
                    >
                        Register
                    </Button>
                </Form>
            )}

        </Formik>
    )
}

export default observer(RegisterForm)