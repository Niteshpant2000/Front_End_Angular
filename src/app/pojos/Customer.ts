export class Customer{
  
    name !: string;
    phoneNumber!:number;
    email !: string;
    constructor(
     
        name: string,
        phoneNumber:number,
        email : string,
    ){

		this.name = name;
        this.phoneNumber=phoneNumber;
		this.email = email;

    }
}