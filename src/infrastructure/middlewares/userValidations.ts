import { body } from "express-validator";

/**
 * User related validations.
 */

export const validEmail = body('email')
    .isEmail()
    .withMessage('Please enter a valid email address')


export const validPassword = body('password')
    .not()
    .isEmail()
    .withMessage('Please enter your password')
    .isLength({min: 6})
    .withMessage('Your password must be at least 6 characters long')