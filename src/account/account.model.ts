import {Rental} from "../rental/rental.model";
import {CostBuilder} from "../cost-builder/cost-builder.model";
import {IPromotion} from "../promotion/promotion.model";


export class Account {
    constructor(
        public rentals: Rental[] = [],
        public promotion: IPromotion
    ) { }

    addRental( rental: Rental ): void {
        this.rentals.push( rental );
    }

    calculateCost(): number {
        const costBuilder = new CostBuilder( this.rentals, this.promotion );
        return costBuilder.calculateCost();
    }
}
