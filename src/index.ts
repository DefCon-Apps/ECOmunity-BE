import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});


app.listen(8080, () => {
    console.log("Server Listening on Port 8080");
});
