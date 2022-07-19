import { IActivity } from "app/models/activity";
import { store } from "app/stores/store";
import customHistory from "app/utilities/history";
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from 'react-toastify';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    await sleep(500);
    return response;

}, error => {
    const { data, status, config } = error.response!;


    switch (status) {
        case 400:
            if (typeof data === 'string') {
                toast.error('This is a bad request');
            }
            if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                customHistory.push('/not-found')
            }
            if (data.errors) {
                const modalStateErrors = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        if (data.errors[key].length > 1) {
                            modalStateErrors.push(data.errors[key][1]);
                        } else {
                            modalStateErrors.push(data.errors[key]);
                        }

                    }
                }
                throw modalStateErrors.flat();
            }
            break;
        case 401:
            toast.error('unauthorised');
            break;
        case 404:
            customHistory.push('/not-found');
            break;
        case 500:
            store.commonStore.setServerError(data);
            customHistory.push('/server-error');
            break;
    }
    return Promise.reject(error);



})
const responseBody = <T>(respose: AxiosResponse<T>) => respose.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Activities = {
    list: () => requests.get<IActivity[]>('/activities'),
    details: (id: string) => requests.get<IActivity>(`/activities/${id}`),
    create: (activity: IActivity) => requests.post<void>(`/activities`, activity),
    update: (activity: IActivity) => requests.put<void>(`/activities/${activity.id}`, activity),
    delete: (id: string) => requests.del<void>(`/activities/${id}`)
}

const agent = {
    Activities
}
export default agent;