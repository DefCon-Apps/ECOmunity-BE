import express, { Request, Response } from "express";

import { API_DATA, API_USER_IMAGE, API_USER_INFO } from "../Util/ApiUtil";
import * as AuthUtil from "../Util/AuthUtil";
import * as FirebaseUtil from "../Util/FirebaseUtil";

const profileRouter = express.Router();

profileRouter.post("/getUserInfo", (req: Request, res: Response) => {
    const UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    AuthUtil.verifyToken(USER_TOKEN);

    const API_RESULT_DATA = FirebaseUtil.getUserInfoDB(UID);

    res.send(API_RESULT_DATA);
});

profileRouter.post("/getUserImage", (req: Request, res: Response) => {
    const UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    AuthUtil.verifyToken(USER_TOKEN);

    const API_RESULT_DATA = FirebaseUtil.getUserImageDB(UID);

    res.send(API_RESULT_DATA);
});

profileRouter.post("/updateUserInfo", (req: Request, res: Response) => {
    const UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const USER_INFO_NAME = req.body.USER_INFO.USER_NAME;
    const USER_INFO_EMAIL = req.body.USER_INFO.USER_EMAIL;
    const USER_INFO_PHONE = req.body.USER_INFO.USER_PHONE;

    const USER_INFO_UPDATE: API_USER_INFO = {
        USER_NAME: USER_INFO_NAME,
        USER_EMAIL: USER_INFO_EMAIL,
        USER_PHONE: USER_INFO_PHONE
    }

    AuthUtil.verifyToken(USER_TOKEN);

    const API_RESULT_DATA: API_DATA = FirebaseUtil.setUserInfoDB(UID, USER_INFO_UPDATE);

    res.send(API_RESULT_DATA);
});

profileRouter.post("/updateUserImage", (req: Request, res: Response) => {
    const UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const USER_INFO_IMAGE_URL = req.body.USER_INFO.USER_IMAGE_URL;

    const USER_IMAGE_UPDATE: API_USER_IMAGE = {
        USER_IMAGE_URL: USER_INFO_IMAGE_URL
    }

    AuthUtil.verifyToken(USER_TOKEN);

    const API_RESULT_DATA: API_DATA = FirebaseUtil.setUserImageDB(UID, USER_IMAGE_UPDATE);

    res.send(API_RESULT_DATA);
});

export default profileRouter;