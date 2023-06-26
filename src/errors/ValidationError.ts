import { ErrorBase } from "./ErrorBase";

export class ValidationError extends ErrorBase {
    
    constructor(message : string){
        super(message)
        this.status = 400;
        this.message = message || 'We could not validate the data you sen\'t';
    }
}