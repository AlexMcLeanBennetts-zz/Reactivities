import { v4 as uuid } from 'uuid';

import { IActivity } from "app/models/activity";
import { useStore } from "app/stores/store";
import Button from "common/Button";
import Spinner from "common/Spinner";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../../common/form/TextInput';
import TextArea from '../../../common/form/TextArea';
import SelectInput from 'common/form/SelectInput';
import { selectOptions } from 'common/options/selectOptions';
import DateInput from 'common/form/DateInput';

function AcitvityForm() {
    const navigate = useNavigate();
    const { activityStore } = useStore();
    const {
        createActivity,
        updateActivity,
        loading,
        loadActivity
    } = activityStore;
    const { id } = useParams<{ id: string }>();

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required'),
        description: Yup.string().required('The activity description is required'),
        category: Yup.string().required(),
        city: Yup.string().required(),
        venue: Yup.string().required(),
        date: Yup.string().required('Date is required').nullable(),
    })

    const initialState: IActivity = {
        id: '',
        title: '',
        description: '',
        category: '',
        date: null,
        city: '',
        venue: ''
    }

    const [formState, setFormState] = useState<IActivity>(initialState);

    useEffect(() => {
        if (id) {
            loadActivity(id)
                .then(activity => setFormState(activity!))
        } else {
            setFormState(initialState)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, loadActivity])


    const handleFormSubmit = (activity: IActivity) => {
        if (formState.id === '') {
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity).then(() => navigate(`/activities/${newActivity.id}`));
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${formState.id}`));
        }
    }

    if (loading) return <Spinner />

    return (
        <section>
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={formState}
                onSubmit={values => handleFormSubmit(values)}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className="bg-white p-4 mt-5 rounded-lg" onSubmit={handleSubmit} autoComplete='off'>
                        <TextInput name="title" label="Title" />
                        <TextArea name='description' rows={3} label='Description' />
                        <SelectInput name="category" label="category" options={selectOptions} />
                        <DateInput
                            placeholderText='Date'
                            name='date'
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy: h:mm aa'
                        />
                        <TextInput name='city' label='City' />
                        <TextInput name='venue' label='Venue' />
                        <div className="flex justify-between">
                            <Button
                                type="submit"
                                className="w-5/12 border-2 rounded-md border-green-500  bg-green-500 text-white py-1"
                                isLoading={loading}
                                disabled={!isValid || !dirty || isSubmitting}
                            >
                                Submit
                            </Button>
                            <Button
                                type="button"
                                className="w-5/12 border-2 rounded-md border-slate-400 py-1"
                            >
                                Cancel
                            </Button>

                        </div>
                    </Form>
                )}
            </Formik>

        </section>
    )
}

export default observer(AcitvityForm);