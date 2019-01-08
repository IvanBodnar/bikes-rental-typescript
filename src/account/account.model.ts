import {Rental} from "../rental/rental.model";
import {CostBuilder} from "../cost-builder/cost-builder.model";
import {IPromotion} from "../promotion/promotion.model";


// This class represents a client's account.
export class Account {
    constructor(
        public rentals: Rental[] = [],
        public promotion: IPromotion
    ) { }

    // Add a Rental to the array.
    addRental( rental: Rental ): void {
        this.rentals.push( rental );
    }

    // Call the CostBuilder to construct the total cost.
    calculateCost(): number {
        const costBuilder = new CostBuilder( this.rentals, this.promotion );
        return costBuilder.calculateCost();
    }
}
