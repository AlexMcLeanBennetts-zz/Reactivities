import { v4 as uuid } from 'uuid';

import { IActivity } from "app/models/activity";
import { useStore } from "app/stores/store";
import Button from "features/components/Button";
import Spinner from "features/components/Spinner";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";

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

    const initialState = {
        id: '',
        title: '',
        description: '',
        category: '',
        date: '',
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


    const handleFormChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;
        setFormState({
            ...formState,
            [name]: value
        } as Pick<IActivity, keyof IActivity>)
    }

    const handleSubmit = () => {
        if (formState.id === '') {
            let newActivity = {
                ...formState,
                id: uuid()
            }
            createActivity(newActivity);
            navigate(`/activities/${newActivity.id}`)
        } else {
            updateActivity(formState);
            navigate(`/activities/${formState.id}`)
        }
    }

    if (loading) return <Spinner />

    return (
        <section>
            <form className="bg-white p-4 mt-5 rounded-lg">
                <div className="formContainer">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formState.title}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="formContainer">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formState.description}
                        onChange={handleFormChange}
                    >
                    </textarea>
                </div>
                <div className="formContainer">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formState.category}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="formContainer">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formState.date}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="formContainer">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formState.city}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="formContainer">
                    <label htmlFor="venue">Venue</label>
                    <input
                        type="text"
                        id="venue"
                        name="venue"
                        value={formState.venue}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="flex justify-between">
                    <Button
                        type="submit"
                        className="w-5/12 border-2 rounded-md border-green-500  bg-green-500 text-white py-1"
                        onClick={() => handleSubmit()}
                        isLoading={loading}
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
            </form>
        </section>
    )
}

export default observer(AcitvityForm);