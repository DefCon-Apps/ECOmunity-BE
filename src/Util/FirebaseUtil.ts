import { initializeApp } from "firebase/app";

import { API_USER_IMAGE, API_USER_INFO } from "./ApiUtil";

import dotenv from "dotenv";

dotenv.config();
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};

export const initFirebase = () => {
    return initializeApp(firebaseConfig);
};

export const getUserInfoDB = (UID: string): API_USER_INFO => {
    const RESULT_DATA: API_USER_INFO = {
        USER_NAME: "USER_NAME",
        USER_EMAIL: "USER_EMAIL",
        USER_PHONE: "USER_PHONE"
    }

    return RESULT_DATA;
};

export const getUserImageDB = (UID: string): API_USER_IMAGE => {
    const RESULT_DATA: API_USER_IMAGE = {
        USER_IMAGE_URL: "USER_IMAGE_URL"
    }

    return RESULT_DATA;
};

export const setUserInfoDB = (UID: string) => {

};

export const setUserImageDB = (UID: string) => {

};