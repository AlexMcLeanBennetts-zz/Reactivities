import { store } from "app/stores/store";
import customHistory from "app/utilities/history";
import { toast } from "react-toastify";

export default function requestErrorHandler(error: any) {
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
}