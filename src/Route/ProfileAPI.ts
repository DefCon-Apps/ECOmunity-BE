import express, { Request, Response } from "express";

import { API_DATA, API_USER_INFO } from "../Util/ApiUtil";
import * as AuthUtil from "../Util/AuthUtil";
import * as FirebaseUtil from "../Util/FirebaseUtil";

const profileRouter = express.Router();

profileRouter.post("/getUserInfo", async (req: Request, res: Response) => {
    const UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    AuthUtil.verifyToken(USER_TOKEN);

    const API_RESULT_DATA = await FirebaseUtil.getUserInfoDB(UID, USER_TOKEN);

    res.send(API_RESULT_DATA);
});

profileRouter.post("/updateUserInfo", async (req: Request, res: Response) => {
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

    const API_RESULT_DATA: API_DATA = await FirebaseUtil.setUserInfoDB(UID, USER_TOKEN, USER_INFO_UPDATE);

    res.send(API_RESULT_DATA);
});

export default profileRouter;