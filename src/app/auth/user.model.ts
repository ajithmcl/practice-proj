export class user {
    constructor(
        public email:string,
        public localId:string,
        private _token:string,
        private expirationDate:Date
    ){}
}