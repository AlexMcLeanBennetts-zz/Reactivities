import { serverError } from "app/models/serverError";
import { makeAutoObservable } from "mobx";

export default class CommonStore {
    error: serverError | null = null

    constructor() {
        makeAutoObservable(this)
    }

    setServerError = (error: serverError) => {
        this.error = error;
    }
}