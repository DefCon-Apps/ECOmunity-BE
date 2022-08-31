import express, { Request, Response } from "express";

import boardRouter from "./BoardAPI";
import profileRouter from "./ProfileAPI";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.use("/board", boardRouter);
app.use("/profile", profileRouter);

app.listen(8080, () => {
    console.log("Server Listening on Port 8080");
});
