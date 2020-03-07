import { Package } from './package';
import { Discount } from './discount';

export class Subscription {
    subscriptionId:number;
    packaze:Package;
    startDate:Date;
    endDate:Date;
    duration:number;
    grossTotalAmount:number;
    gstAmount:number;
    discountAmount:number;
    netPayableAmount:number;
    discount:Discount;
}
