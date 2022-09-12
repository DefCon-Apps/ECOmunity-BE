import { FirebaseApp, initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, Firestore, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

import {API_DATA, API_POST_DATA, API_POST_LIST_ITEM, API_USER_INFO} from "./ApiUtil";

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

export const getPostDB = async (UID: string, TOKEN: string, POST_IS_NOTICE: boolean, POST_ID: string): Promise<API_DATA> => {
    const POST_TYPE = POST_IS_NOTICE ? "notice" : "board";
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

    RESULT_DATA = await getFirebaseDB(POST_TYPE, POST_ID);

    return RESULT_DATA
}

export const getPostListDB = async (UID: string, TOKEN: string, POST_IS_NOTICE: boolean): Promise<API_DATA> => {
    const POST_TYPE = POST_IS_NOTICE ? "notice" : "board";
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

    RESULT_DATA = await getFirebaseDBList(POST_TYPE);

    return RESULT_DATA
}

export const deletePostDB = async (UID: string, TOKEN: string, POST_IS_NOTICE: boolean, POST_ID: string): Promise<API_DATA> => {
    const POST_TYPE = POST_IS_NOTICE ? "notice" : "board";
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

    RESULT_DATA = await deleteFirebaseDB(POST_TYPE, POST_ID);

    return RESULT_DATA
}

export const updatePostDB = async (UID: string, TOKEN: string, POST_IS_NOTICE: boolean, POST_ID: string, POST_DATA: API_POST_DATA): Promise<API_DATA> => {
    const POST_TYPE = POST_IS_NOTICE ? "notice" : "board";
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

    RESULT_DATA = await setFirebaseDB(POST_TYPE, POST_ID, POST_DATA);

    return RESULT_DATA
}

export const updateRecommendDB = async (UID: string, TOKEN: string, POST_IS_NOTICE: boolean, POST_ID: string, POST_RECOMMEND: number): Promise<API_DATA> => {
    const POST_TYPE = POST_IS_NOTICE ? "notice" : "board";
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

    const POST_RECOMMEND_DATA = {
        POST_RECOMMEND: POST_RECOMMEND
    }

    RESULT_DATA = await setFirebaseDB(POST_TYPE, POST_ID, POST_RECOMMEND_DATA);

    return RESULT_DATA
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

const deleteFirebaseDB = async (collectionID: string, documentID: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = doc(firebaseDB, collectionID, documentID);
    const fbDocumentRef = await getDoc(fbDocument);
    if(!fbDocumentRef.exists()){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";

        await deleteDoc(fbDocument);
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
}

const getFirebaseDB = async (collectionID: string, documentID: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDoc(doc(firebaseDB, collectionID, documentID));
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

const getFirebaseDBList = async (collectionID: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDocs(collection(firebaseDB, collectionID));
    if(!fbDocument.empty){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    const POST_IS_NOTICE = (collectionID == "notice");

    try{
        let POST_COUNT = 0;
        let POST_LIST: Array<API_POST_LIST_ITEM> = [];

        fbDocument.forEach((curDoc) => {
            POST_COUNT++;
            POST_LIST.push({
                POST_AUTHOR: curDoc.get("POST_AUTHOR"),
                POST_DATE: curDoc.get("POST_DATE"),
                POST_ID: curDoc.get("POST_ID"),
                POST_RECOMMEND: curDoc.get("POST_RECOMMEND"),
                POST_TITLE: curDoc.get("POST_TITLE")
            })
        })

        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = {
            POST_COUNT: POST_COUNT,
            POST_IS_NOTICE: POST_IS_NOTICE,
            POST_LIST: POST_LIST
        }
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
}

const setFirebaseDB = async (collectionID: string, documentID: string, updateData: object) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = doc(firebaseDB, collectionID, documentID);
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