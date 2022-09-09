import express, { Request, Response } from "express";

import { API_DATA, API_USER_IMAGE, API_USER_INFO } from "../Util/ApiUtil";
import * as AuthUtil from "../Util/AuthUtil";
import * as FirebaseUtil from "../Util/FirebaseUtil";

const profileRouter = express.Router();

profileRouter.post("/getUserInfo", (req: Request, res: Response) => {
    const UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    AuthUtil.verifyToken(USER_TOKEN);

    const API_RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {
            USER_NAME: "USER_NAME",
            USER_EMAIL: "USER_EMAIL",
            USER_PHONE: "USER_PHONE"
        }
    };

    API_RESULT_DATA.RESULT_DATA = FirebaseUtil.getUserInfoDB(UID);

    res.send(API_RESULT_DATA);
});

profileRouter.post("/getUserImage", (req: Request, res: Response) => {
    const UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    AuthUtil.verifyToken(USER_TOKEN);

    const API_RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {
            USER_IMAGE_URL: "USER_IMAGE_URL"
        }
    };

    API_RESULT_DATA.RESULT_DATA = FirebaseUtil.getUserImageDB(UID);

    res.send(API_RESULT_DATA);
});

profileRouter.post("/updateUserInfo", (req: Request, res: Response) => {
    const UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    AuthUtil.verifyToken(USER_TOKEN);

    const API_RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    };

    res.send(API_RESULT_DATA);
});

profileRouter.post("/updateUserImage", (req: Request, res: Response) => {
    const UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    AuthUtil.verifyToken(USER_TOKEN);

    const API_RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    };

    res.send(API_RESULT_DATA);
});

export default profileRouter;