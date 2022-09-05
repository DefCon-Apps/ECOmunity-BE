import express, { Request, Response } from "express";

import * as AuthUtil from "../Util/AuthUtil";

const profileRouter = express.Router();

profileRouter.post("/getUserInfo", (req: Request, res: Response) => {
    const USER_TOKEN = req.body.USER_TOKEN;
    AuthUtil.verifyToken(USER_TOKEN);

    res.send("Func : Get User Info")
});

profileRouter.post("/getUserImage", (req: Request, res: Response) => {
    res.send("Func : Get User Image")
});

profileRouter.post("/updateUserInfo", (req: Request, res: Response) => {
    res.send("Func : Update User Info")
});

profileRouter.post("/updateUserImage", (req: Request, res: Response) => {
    res.send("Func : Update User Image")
});

export default profileRouter;