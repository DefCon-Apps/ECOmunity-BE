import express, { Request, Response } from "express";

import * as BoardAPI from "./BoardAPI";
import * as ProfileAPI from "./ProfileAPI";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.post("/board/getPost", (req: Request, res: Response) => {
    BoardAPI.getPost(req, res);
});

app.post("/board/updatePost", (req: Request, res: Response) => {
    BoardAPI.updatePost(req, res);
});

app.post("/board/deletePost", (req: Request, res: Response) => {
    BoardAPI.deletePost(req, res);
});

app.post("/board/getComment", (req: Request, res: Response) => {
    BoardAPI.getComment(req, res);
});

app.post("/board/updateComment", (req: Request, res: Response) => {
    BoardAPI.updateComment(req, res);
});

app.post("/board/deleteComment", (req: Request, res: Response) => {
    BoardAPI.deleteComment(req, res);
});

app.post("/board/getRecommend", (req: Request, res: Response) => {
    BoardAPI.getRecommend(req, res);
});

app.post("/board/updateRecommend", (req: Request, res: Response) => {
    BoardAPI.updateRecommend(req, res);
});

app.post("/board/deleteRecommend", (req: Request, res: Response) => {
    BoardAPI.deleteRecommend(req, res);
});

app.post("/profile/getPersonalInfo", (req: Request, res: Response) => {
    ProfileAPI.getPersonalInfo(req, res);
});

app.post("/profile/getPersonalImage", (req: Request, res: Response) => {
    ProfileAPI.getPersonalImage(req, res);
});

app.post("/profile/updatePersonalInfo", (req: Request, res: Response) => {
    ProfileAPI.updatePersonalInfo(req, res);
});

app.post("/profile/updatePersonalImage", (req: Request, res: Response) => {
    ProfileAPI.updatePersonalImage(req, res);
});

app.listen(8080, () => {
    console.log("Server Listening on Port 8080");
});
