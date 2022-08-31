import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.post("/post/getPost", (req: Request, res: Response) => {
    res.send("Func : Get Post")
});

app.post("/post/updatePost", (req: Request, res: Response) => {
    res.send("Func : Update Post")
});

app.post("/post/deletePost", (req: Request, res: Response) => {
    res.send("Func : Delete Post")
});

app.post("/post/getComment", (req: Request, res: Response) => {
    res.send("Func : Get Comment")
});

app.post("/post/updateComment", (req: Request, res: Response) => {
    res.send("Func : Update Comment")
});

app.post("/post/deleteComment", (req: Request, res: Response) => {
    res.send("Func : Delete Comment")
});

app.post("/post/getRecommend", (req: Request, res: Response) => {
    res.send("Func : Get Recommend")
});

app.post("/post/updateRecommend", (req: Request, res: Response) => {
    res.send("Func : Update Recommend")
});

app.post("/post/deleteRecommend", (req: Request, res: Response) => {
    res.send("Func : Delete Recommend")
});

app.post("/profile/getPersonalInfo", (req: Request, res: Response) => {
    res.send("Func : Get Personal Info")
});

app.post("/profile/getPersonalImage", (req: Request, res: Response) => {
    res.send("Func : Get Personal Image")
});

app.post("/profile/updatePersonalInfo", (req: Request, res: Response) => {
    res.send("Func : Update Personal Info")
});

app.post("/profile/updatePersonalImage", (req: Request, res: Response) => {
    res.send("Func : Update Personal Image")
});

app.listen(8080, () => {
    console.log("Server Listening on Port 8080");
});
