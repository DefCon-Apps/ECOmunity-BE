import express, { Request, Response } from "express";

import boardRouter from "./Route/BoardAPI";
import profileRouter from "./Route/ProfileAPI";

import * as CorsUtil from "./Util/CorsUtil";
import * as AuthUtil from "./Util/AuthUtil";
import * as FirebaseUtil from "./Util/FirebaseUtil";

const app = express();

CorsUtil.setCors(app);

AuthUtil.initFirebase();
FirebaseUtil.initFirebase();

app.use(express.json({limit:1024*1024*10, type:'application/json'}));
app.use(express.urlencoded({extended:true, limit:1024*1024*10}));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.use("/board", boardRouter);
app.use("/profile", profileRouter);

app.listen(8080, () => {
    console.log("Server Listening on Port 8080");
});
