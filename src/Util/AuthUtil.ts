import { credential } from "firebase-admin";
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from "firebase-admin/auth";

export const initFirebase = () => {
    let serviceAccount = require("firebase-admin-account.json");
    initializeApp({
        credential: credential.cert(serviceAccount)
    });
}

export const verifyToken = (strToken: string) => {
    getAuth()
        .verifyIdToken(strToken)
        .then((decodedToken) => {
            const uid = decodedToken.uid;
            console.log(`UID : ${uid}`)
        })
        .catch((error) => {
            console.log(`Error Occurred : ${error}`)
        });
}