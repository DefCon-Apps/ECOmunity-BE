import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.post("/profile/getPersonalInfo", (req: Request, res: Response) => {
    res.send("Func : Get Personal Info")
})

app.post("/profile/getPersonalImage", (req: Request, res: Response) => {
    res.send("Func : Get Personal Image")
})

app.post("/profile/updatePersonalInfo", (req: Request, res: Response) => {
    res.send("Func : Update Personal Info")
})

app.post("/profile/updatePersonalImage", (req: Request, res: Response) => {
    res.send("Func : Update Personal Image")
})

app.listen(8080, () => {
    console.log("Server Listening on Port 8080");
});
