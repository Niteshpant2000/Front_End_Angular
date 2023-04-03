export class Transaction{
    
    customerId!:number;
    dateTime!:string;
    productDetails!:string;
    totalAmount!:number;
    paymentType!:string;
    
    constructor(custId:number,date:string,prodDetails:string,totalAmount:number,paymentType:string){
        this.customerId=custId;
        this.dateTime=date;
        this.productDetails=prodDetails;
        this.totalAmount=totalAmount;
        this.paymentType=paymentType;
    }

    
}