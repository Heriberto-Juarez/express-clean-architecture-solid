import { Request, Response, NextFunction } from "express";
import { ErrorBase } from "../errors/ErrorBase";
import { ServerError } from "../errors/ServerError";

export const errorHandler = (error: Error, req : Request, res : Response, next : NextFunction) => {

    if (error instanceof ErrorBase){
        res.status(error.status).json({
            message: error.message,
            errors: error.errors,
        })
    }else{
        const serverError = new ServerError(error.message);
        res.status(serverError.status).json({
            message: serverError.message || 'Internal server error',
            errors: [],
        })
    }
}