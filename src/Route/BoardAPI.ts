import express, { Request, Response } from "express";

import { API_DATA, API_POST_DATA } from "../Util/ApiUtil";
import * as FirebaseUtil from "../Util/FirebaseUtil";

const boardRouter = express.Router();

boardRouter.post("/getPost", async (req: Request, res: Response) => {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const POST_ID = req.body.POST_ID;
    const POST_IS_NOTICE = req.body.POST_IS_NOTICE;

    const API_RESULT_DATA: API_DATA = await FirebaseUtil.getPostDB(USER_UID, USER_TOKEN, POST_IS_NOTICE, POST_ID);

    res.send(API_RESULT_DATA)
});

boardRouter.post("/getPostList", async (req: Request, res: Response) => {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const POST_IS_NOTICE = req.body.POST_IS_NOTICE;

    const API_RESULT_DATA: API_DATA = await FirebaseUtil.getPostListDB(USER_UID, USER_TOKEN, POST_IS_NOTICE);

    res.send(API_RESULT_DATA)
});

boardRouter.post("/updatePost", async (req: Request, res: Response) => {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const POST_ID = req.body.POST_ID;
    const POST_IS_NOTICE = req.body.POST_IS_NOTICE;
    
    const POST_DATA_AUTHOR = req.body.POST_DATA.POST_AUTHOR;
    const POST_DATA_DATE = req.body.POST_DATA.POST_DATE;
    const POST_DATA_CONTENT = req.body.POST_DATA.POST_CONTENT;
    const POST_DATA_IMAGE = req.body.POST_DATA.POST_IMAGE;
    const POST_DATA_TITLE = req.body.POST_DATA.POST_TITLE;

    const POST_DATA_UPDATE: API_POST_DATA = {
        POST_AUTHOR: POST_DATA_AUTHOR,
        POST_DATE: POST_DATA_DATE,
        POST_CONTENT: POST_DATA_CONTENT,
        POST_IMAGE: POST_DATA_IMAGE,
        POST_TITLE: POST_DATA_TITLE
    }

    const API_RESULT_DATA: API_DATA = await FirebaseUtil.updatePostDB(USER_UID, USER_TOKEN, POST_IS_NOTICE, POST_ID, POST_DATA_UPDATE);

    res.send(API_RESULT_DATA)
});

boardRouter.post("/deletePost", async (req: Request, res: Response) => {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const POST_ID = req.body.POST_ID;
    const POST_IS_NOTICE = req.body.POST_IS_NOTICE;

    const API_RESULT_DATA: API_DATA = await FirebaseUtil.deletePostDB(USER_UID, USER_TOKEN, POST_IS_NOTICE, POST_ID);

    res.send(API_RESULT_DATA)
});

boardRouter.post("/updateRecommend", async (req: Request, res: Response) => {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const POST_ID = req.body.POST_ID;
    const POST_IS_NOTICE = req.body.POST_IS_NOTICE;
    const POST_RECOMMEND = req.body.POST_RECOMMEND;

    const API_RESULT_DATA: API_DATA = await FirebaseUtil.updateRecommendDB(USER_UID, USER_TOKEN, POST_IS_NOTICE, POST_ID, POST_RECOMMEND);

    res.send(API_RESULT_DATA)
});

export default boardRouter;