import axios from 'axios';
import Button from 'features/components/Button';
import { useState } from 'react';
import ValidationErrors from './ValidationErrors';

export default function TestErrors() {
    const [errors, setErrors] = useState(null);
    const baseUrl = 'http://localhost:5000/api/'

    function handleNotFound() {
        axios.get(baseUrl + 'buggy/not-found').catch(err => console.log(err.response));
    }

    function handleBadRequest() {
        axios.get(baseUrl + 'buggy/bad-request').catch(err => console.log(err.response));
    }

    function handleServerError() {
        axios.get(baseUrl + 'buggy/server-error').catch(err => console.log(err.response));
    }

    function handleUnauthorised() {
        axios.get(baseUrl + 'buggy/unauthorised').catch(err => console.log(err.response));
    }

    function handleBadGuid() {
        axios.get(baseUrl + 'activities/notaguid').catch(err => console.log(err.response));
    }

    function handleValidationError() {
        axios.post(baseUrl + 'activities', {}).catch(err => setErrors(err));
    }

    return (
        <>
            <h1 className='text-2xl font-bold mb-4'>Test Error component</h1>
            <div>
                <div className='flex justify-between bg-white px-3 py-5'>
                    <Button type='button' className="py-3 border-solid border-2 border-blue-300 text-blue-300 w-[16%] text-sm" onClick={handleNotFound}>Not Found</Button>
                    <Button type='button' className="py-3 border-solid border-2 border-blue-300 text-blue-300 w-[16%] text-sm" onClick={handleBadRequest}>Bad Request</Button>
                    <Button type='button' className="py-3 border-solid border-2 border-blue-300 text-blue-300 w-[16%] text-sm" onClick={handleValidationError}>Validation Error</Button>
                    <Button type='button' className="py-3 border-solid border-2 border-blue-300 text-blue-300 w-[16%] text-sm" onClick={handleServerError} >Server Error</Button>
                    <Button type='button' className="py-3 border-solid border-2 border-blue-300 text-blue-300 w-[16%] text-sm" onClick={handleUnauthorised}>Unauthorised</Button>
                    <Button type='button' className="py-3 border-solid border-2 border-blue-300 text-blue-300 w-[16%] text-sm" onClick={handleBadGuid}>Bad Guid</Button >
                </div >
            </div >
            {errors && <ValidationErrors errors={errors} />}
        </>
    )
}