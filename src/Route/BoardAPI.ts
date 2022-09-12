import express, { Request, Response } from "express";

const boardRouter = express.Router();

boardRouter.post("/getPost", async (req: Request, res: Response) => {
    res.send("Func : Get Post")
});

boardRouter.post("/updatePost", async (req: Request, res: Response) => {
    res.send("Func : Update Post")
});

boardRouter.post("/deletePost", async (req: Request, res: Response) => {
    res.send("Func : Delete Post")
});

boardRouter.post("/getRecommend", async (req: Request, res: Response) => {
    res.send("Func : Get Recommend")
});

boardRouter.post("/updateRecommend", async (req: Request, res: Response) => {
    res.send("Func : Update Recommend")
});

boardRouter.post("/deleteRecommend", async (req: Request, res: Response) => {
    res.send("Func : Delete Recommend")
});

export default boardRouter;