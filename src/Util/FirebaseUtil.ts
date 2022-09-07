import { initializeApp } from "firebase/app";

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

export const getUserInfoDB = (UID: string) => {

};

export const getUserImageDB = (UID: string) => {

};