"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.initFirebase = void 0;
const firebase_admin_1 = require("firebase-admin");
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const initFirebase = () => {
    let serviceAccount = require("D:\\Projects\\Web\\ECOmunity-BE\\firebase-admin-account.json");
    (0, app_1.initializeApp)({
        credential: firebase_admin_1.credential.cert(serviceAccount)
    });
};
exports.initFirebase = initFirebase;
const verifyToken = (strToken) => {
    (0, auth_1.getAuth)()
        .verifyIdToken(strToken)
        .then((decodedToken) => {
        const uid = decodedToken.uid;
        console.log(`UID : ${uid}`);
    })
        .catch((error) => {
        throw error;
    });
};
exports.verifyToken = verifyToken;
