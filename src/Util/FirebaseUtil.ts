import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, Firestore, getDoc, getFirestore, updateDoc } from "firebase/firestore";

import {API_DATA, API_POST_DATA, API_USER_INFO} from "./ApiUtil";

import dotenv from "dotenv";
import * as AuthUtil from "./AuthUtil";

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

export const getPostDB = async (UID: string, TOKEN: string, POST_IS_NOTICE: boolean, POST_ID: string) => {

}

export const getListPostDB = async (UID: string, TOKEN: string, POST_IS_NOTICE: boolean) => {

}

export const deletePostDB = async (UID: string, TOKEN: string, POST_IS_NOTICE: boolean, POST_ID: string) => {

}

export const updatePostDB = async (UID: string, TOKEN: string, POST_IS_NOTICE: boolean, POST_ID: string, POST_DATA: API_POST_DATA) => {

}

export const getRecommendDB = async (UID: string, TOKEN: string, POST_IS_NOTICE: boolean, POST_ID: string) => {

}

export const updateRecommendDB = async (UID: string, TOKEN: string, POST_IS_NOTICE: boolean, POST_ID: string, POST_RECOMMEND: number) => {

}

export const getUserInfoDB = async (UID: string, TOKEN: string): Promise<API_DATA> => {
    let RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    try{
        AuthUtil.verifyToken(TOKEN);
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;

        return RESULT_DATA;
    }

    RESULT_DATA = await getFirebaseDB("profile", UID);

    return RESULT_DATA;
};

export const setUserInfoDB = async (UID: string, TOKEN: string, USER_INFO: API_USER_INFO): Promise<API_DATA> => {
    let RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    try{
        AuthUtil.verifyToken(TOKEN);
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;

        return RESULT_DATA;
    }

    RESULT_DATA = await setFirebaseDB("profile", UID, USER_INFO);

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

    try{
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = fbDocument.data();
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
}

const setFirebaseDB = async (collection: string, document: string, updateData: object) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = doc(firebaseDB, collection, document);
    const fbDocumentRef = await getDoc(fbDocument);
    if(!fbDocumentRef.exists()){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";

        await updateDoc(fbDocument, updateData);
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
}