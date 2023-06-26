import { ErrorInterface } from "../interfaces/ErrorInterface";

export class ErrorBase extends Error {
    
    public status : number = 500
    public message : string = '';
    public errors: ErrorInterface[] = [];

    constructor(message : string) {
        super(message)
        this.message = message
    }
}