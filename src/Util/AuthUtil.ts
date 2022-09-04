import { initializeApp } from 'firebase-admin/app';
import { getAuth } from "firebase-admin/lib/auth";

export const initFirebase = () => {
    initializeApp();
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