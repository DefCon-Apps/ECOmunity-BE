import express, { Request, Response } from "express";

import * as AuthUtil from "../Util/AuthUtil";

const profileRouter = express.Router();

profileRouter.post("/getPersonalInfo", (req: Request, res: Response) => {
    const USER_TOKEN = req.body.USE_TOKEN;
    AuthUtil.verifyToken(USER_TOKEN);

    res.send("Func : Get Personal Info")
});

profileRouter.post("/getPersonalImage", (req: Request, res: Response) => {
    res.send("Func : Get Personal Image")
});

profileRouter.post("/updatePersonalInfo", (req: Request, res: Response) => {
    res.send("Func : Update Personal Info")
});

profileRouter.post("/updatePersonalImage", (req: Request, res: Response) => {
    res.send("Func : Update Personal Image")
});

export default profileRouter;