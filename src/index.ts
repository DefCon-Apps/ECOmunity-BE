import express, { Request, Response } from "express";

import boardRouter from "./Route/BoardAPI";
import profileRouter from "./Route/ProfileAPI";

import * as AuthUtil from "./Util/AuthUtil";
import * as FirebaseUtil from "./Util/FirebaseUtil";

const app = express();

AuthUtil.initFirebase();
FirebaseUtil.initFirebase();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.use("/board", boardRouter);
app.use("/profile", profileRouter);

app.listen(8080, () => {
    console.log("Server Listening on Port 8080");
});
