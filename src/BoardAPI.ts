import {Request, Response} from "express";

export const getPost = (req: Request, res: Response) => {
    res.send("Func : Get Post")
};

export const updatePost = (req: Request, res: Response) => {
    res.send("Func : Update Post")
};

export const deletePost = (req: Request, res: Response) => {
    res.send("Func : Delete Post")
};

export const getComment = (req: Request, res: Response) => {
    res.send("Func : Get Comment")
};

export const updateComment = (req: Request, res: Response) => {
    res.send("Func : Update Comment")
};

export const deleteComment = (req: Request, res: Response) => {
    res.send("Func : Delete Comment")
};

export const getRecommend = (req: Request, res: Response) => {
    res.send("Func : Get Recommend")
};

export const updateRecommend = (req: Request, res: Response) => {
    res.send("Func : Update Recommend")
};

export const deleteRecommend = (req: Request, res: Response) => {
    res.send("Func : Delete Recommend")
};