import { ErrorBase } from "./ErrorBase";

export class ServerError extends ErrorBase {
    
    constructor(message : string){
        super(message)
        this.status = 500;
        this.message = message || 'Internal server error';
    }
}