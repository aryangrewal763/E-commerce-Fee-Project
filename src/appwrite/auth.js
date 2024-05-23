import { Client,Account,ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("662117da12cd44735113")
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            return await this.account.create(ID.unique(),email,password,name)
        } catch (error) {
            console.log("Create account error",error);
            throw error;
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            console.log("Login error",error);
            throw error;
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Get current user error",error);
            throw error;
        }
    }
    async logout(){
        try {
            return await this.account.deleteSessions();   // deleteSession('current')
        } catch (error) {
            console.log("Logout user error",error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;