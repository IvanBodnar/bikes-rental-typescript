import {Rental} from "../rental/rental.model";
import {IPromotion, IPromotionResult} from "../promotion/promotion.model";


// This class is used to construct the price,
// applying a promotion if it's pertinent.
export class CostBuilder {
    constructor(
        public rentals: Rental[],
        public promotion: IPromotion
    ) {
        // the Rental[] is sorted, because the promotion
        // class expects a sorted array.
        this.rentals = rentals.sort( this._compareFunction )
    }

    // Method used to sort the Rental[] (desc in this case).
    private _compareFunction( a: Rental, b: Rental ): number {
        if (a.calculateTotalCost() < b.calculateTotalCost()) {
            return 1;
        } else if (a.calculateTotalCost() > b.calculateTotalCost()) {
            return -1;
        } else {
            return 0;
        }
    }

    // Method used to sum the rental items not included on a promotion.
    _sumNoPromotionRentals( rentals: Rental[] ): number {
        const filteredRentals = rentals.filter( rental => {
            return rental.includedInPromotion === undefined
        });
        return filteredRentals.reduce( (acc, curr) => acc + curr.calculateTotalCost(), 0 );
    }

    // The cost is calculated adding the cost of the items included on a promotion
    // and the cost of the ones that aren't.
    calculateCost(): number {
        const promotionResult: IPromotionResult = this.promotion.applyPromotion( this.rentals );
        return promotionResult.promotedRentalsCost + this._sumNoPromotionRentals( promotionResult.appliedPromotionRentals );
    }
}
