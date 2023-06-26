import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationError as ExpressValidationError } from 'express-validator';
import { ValidationError } from "../errors/ValidationError";


export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new ValidationError('Error de validación');
        err.errors = errors.array().map((vErr : ExpressValidationError)=>{
            return {
                message: vErr.msg,
                field: vErr.type == 'field' ? vErr.path : ''
            };
        })
        throw err
    }

    next();
};