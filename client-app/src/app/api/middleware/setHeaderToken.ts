import { store } from "app/stores/store";
import { AxiosRequestConfig } from "axios";

export default function setHeaderToken(config: AxiosRequestConfig) {
    const token = store.commonStore.token;

    config.headers = config.headers ?? {};

    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
}