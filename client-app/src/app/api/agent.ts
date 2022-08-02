import { IActivity } from "app/models/activity";
import { User, UserFormValues } from "app/models/user";
import axios, { AxiosResponse } from "axios";
import requestErrorHandler from "./middleware/requestErrorHandler";
import setHeaderToken from "./middleware/setHeaderToken";


axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(config => {
    return setHeaderToken(config);
})

axios.interceptors.response.use(async response => {
    return response;
}, error => {
    requestErrorHandler(error);
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
    delete: (id: string) => requests.del<void>(`/activities/${id}`),
    attend: (id: string) => requests.post<void>(`activities/${id}/attend`, {})
}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('account/login', user),
    register: (user: UserFormValues) => requests.post<User>('account/register', user)
}

const agent = {
    Activities,
    Account
}

export default agent;