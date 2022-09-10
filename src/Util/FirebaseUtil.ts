import { FirebaseApp, initializeApp } from "firebase/app";
import { collection, doc, Firestore, getDoc, getDocs, getFirestore, query } from "firebase/firestore";

import {API_DATA, API_USER_IMAGE, API_USER_INFO} from "./ApiUtil";

import dotenv from "dotenv";

dotenv.config();
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};

let firebaseApp: FirebaseApp;
let firebaseDB: Firestore;

export const initFirebase = () => {
    firebaseApp =  initializeApp(firebaseConfig);
    firebaseDB = getFirestore();
};

export const getUserInfoDB = (UID: string): API_DATA => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {
            USER_NAME: "USER_NAME",
            USER_EMAIL: "USER_EMAIL",
            USER_PHONE: "USER_PHONE"
        }
    }

    return RESULT_DATA;
};

export const getUserImageDB = (UID: string): API_DATA => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {
            USER_IMAGE_URL: "USER_IMAGE_URL"
        }
    }

    return RESULT_DATA;
};

export const setUserInfoDB = (UID: string, USER_INFO: API_USER_INFO): API_DATA => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    return RESULT_DATA;
};

export const setUserImageDB = (UID: string, USER_IMAGE: API_USER_IMAGE): API_DATA => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    return RESULT_DATA;
};

const getFirebaseDB = async (collection: string, document: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDoc(doc(firebaseDB, collection, document));
    if(!fbDocument.exists()){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    RESULT_DATA.RESULT_DATA = fbDocument.data();

    return RESULT_DATA;
}

const setFirebaseDB = async (collection: string, document: string) => {

}