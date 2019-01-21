import { Seller } from "./seller.models";
import { Buyer } from "./buyer.model";

export class BidItem {


    constructor(public image: String, public start_price: Number, public seller: Seller, buyer: Buyer, fixed_price: Number) {

    }

}