"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserInfoDB = exports.getUserInfoDB = exports.initFirebase = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const dotenv_1 = __importDefault(require("dotenv"));
const AuthUtil = __importStar(require("./AuthUtil"));
dotenv_1.default.config();
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};
let firebaseApp;
let firebaseDB;
const initFirebase = () => {
    firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
    firebaseDB = (0, firestore_1.getFirestore)();
};
exports.initFirebase = initFirebase;
const getUserInfoDB = (UID, TOKEN) => __awaiter(void 0, void 0, void 0, function* () {
    let RESULT_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    };
    try {
        AuthUtil.verifyToken(TOKEN);
    }
    catch (error) {
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error;
        return RESULT_DATA;
    }
    RESULT_DATA = yield getFirebaseDB("profile", UID);
    return RESULT_DATA;
});
exports.getUserInfoDB = getUserInfoDB;
const setUserInfoDB = (UID, TOKEN, USER_INFO) => __awaiter(void 0, void 0, void 0, function* () {
    let RESULT_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    };
    try {
        AuthUtil.verifyToken(TOKEN);
    }
    catch (error) {
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error;
        return RESULT_DATA;
    }
    RESULT_DATA = yield setFirebaseDB("profile", UID, USER_INFO);
    return RESULT_DATA;
});
exports.setUserInfoDB = setUserInfoDB;
const getFirebaseDB = (collection, document) => __awaiter(void 0, void 0, void 0, function* () {
    const RESULT_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    };
    const fbDocument = yield (0, firestore_1.getDoc)((0, firestore_1.doc)(firebaseDB, collection, document));
    if (!fbDocument.exists()) {
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }
    try {
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = fbDocument.data();
    }
    catch (error) {
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error;
    }
    return RESULT_DATA;
});
const setFirebaseDB = (collection, document, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const RESULT_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    };
    const fbDocument = (0, firestore_1.doc)(firebaseDB, collection, document);
    const fbDocumentRef = yield (0, firestore_1.getDoc)(fbDocument);
    if (!fbDocumentRef.exists()) {
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }
    try {
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        yield (0, firestore_1.updateDoc)(fbDocument, updateData);
    }
    catch (error) {
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error;
    }
    return RESULT_DATA;
});
