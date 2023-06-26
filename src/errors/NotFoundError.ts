import { ErrorBase } from "./ErrorBase";

export class NotFoundError extends ErrorBase {
    
    constructor(message : string){
        super(message)
        this.status = 404;
        this.message = message || 'The resource you were looking for was not found.';
    }
}