import express, { Request, Response } from "express";

import { API_DATA } from "../Util/ApiUtil";
import * as AuthUtil from "../Util/AuthUtil";

const profileRouter = express.Router();

profileRouter.post("/getUserInfo", (req: Request, res: Response) => {
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
    }

    res.send(API_RESULT_DATA)
});

profileRouter.post("/getUserImage", (req: Request, res: Response) => {
    const USER_TOKEN = req.body.USER_TOKEN;
    AuthUtil.verifyToken(USER_TOKEN);

    const API_RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {
            USER_IMG_URL: "USER_NAME"
        }
    }

    res.send(API_RESULT_DATA)
});

profileRouter.post("/updateUserInfo", (req: Request, res: Response) => {
    res.send("Func : Update User Info")
});

profileRouter.post("/updateUserImage", (req: Request, res: Response) => {
    res.send("Func : Update User Image")
});

export default profileRouter;