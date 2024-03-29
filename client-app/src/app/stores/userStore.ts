import agent from "app/api/agent";
import { User, UserFormValues } from "app/models/user";
import customHistory from "app/utilities/history";
import { makeAutoObservable, runInAction } from "mobx";
import { store } from "./store";

export default class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user)
            customHistory.push('/activities');
            store.modalStore.closeModal();
        } catch (error) {
            throw error
        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user = null;
        customHistory.push('/');
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user)
        } catch (error) {
            console.log(error);
        }
    }

    register = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user)
            customHistory.push('/activities');
            store.modalStore.closeModal();
        } catch (error) {
            throw error
        }
    }
}