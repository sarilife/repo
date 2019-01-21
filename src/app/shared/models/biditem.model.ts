import { Seller } from "./seller.models";
import { Buyer } from "./buyer.model";

export class BidItem {


    constructor(
        public bid_item_id: number,
        public name: String,
        public image: String,
        public start_price: Number,
        public seller_id: Number,
        public buyer_id: Number,
        public fixed_price: Number) {

    }

}