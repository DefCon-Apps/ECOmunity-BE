import {Request, Response} from "express";

export const getPersonalInfo = (req: Request, res: Response) => {
    res.send("Func : Get Personal Info")
};

export const getPersonalImage = (req: Request, res: Response) => {
    res.send("Func : Get Personal Image")
};

export const updatePersonalInfo = (req: Request, res: Response) => {
    res.send("Func : Update Personal Info")
};

export const updatePersonalImage = (req: Request, res: Response) => {
    res.send("Func : Update Personal Image")
};