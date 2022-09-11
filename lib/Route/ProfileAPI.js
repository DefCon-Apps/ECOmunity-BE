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
const express_1 = __importDefault(require("express"));
const FirebaseUtil = __importStar(require("../Util/FirebaseUtil"));
const profileRouter = express_1.default.Router();
profileRouter.post("/getUserInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;
    const API_RESULT_DATA = yield FirebaseUtil.getUserInfoDB(USER_UID, USER_TOKEN);
    res.send(API_RESULT_DATA);
}));
profileRouter.post("/updateUserInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;
    const USER_INFO_NAME = req.body.USER_INFO.USER_NAME;
    const USER_INFO_EMAIL = req.body.USER_INFO.USER_EMAIL;
    const USER_INFO_PHONE = req.body.USER_INFO.USER_PHONE;
    const USER_INFO_UPDATE = {
        USER_NAME: USER_INFO_NAME,
        USER_EMAIL: USER_INFO_EMAIL,
        USER_PHONE: USER_INFO_PHONE
    };
    const API_RESULT_DATA = yield FirebaseUtil.setUserInfoDB(USER_UID, USER_TOKEN, USER_INFO_UPDATE);
    res.send(API_RESULT_DATA);
}));
exports.default = profileRouter;
