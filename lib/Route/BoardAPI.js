"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const boardRouter = express_1.default.Router();
boardRouter.post("/getPost", (req, res) => {
    res.send("Func : Get Post");
});
boardRouter.post("/updatePost", (req, res) => {
    res.send("Func : Update Post");
});
boardRouter.post("/deletePost", (req, res) => {
    res.send("Func : Delete Post");
});
boardRouter.post("/getComment", (req, res) => {
    res.send("Func : Get Comment");
});
boardRouter.post("/updateComment", (req, res) => {
    res.send("Func : Update Comment");
});
boardRouter.post("/deleteComment", (req, res) => {
    res.send("Func : Delete Comment");
});
boardRouter.post("/getRecommend", (req, res) => {
    res.send("Func : Get Recommend");
});
boardRouter.post("/updateRecommend", (req, res) => {
    res.send("Func : Update Recommend");
});
boardRouter.post("/deleteRecommend", (req, res) => {
    res.send("Func : Delete Recommend");
});
exports.default = boardRouter;
