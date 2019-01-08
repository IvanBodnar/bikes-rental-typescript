import {Rental} from "../rental/rental.model";
import {IPromotion, IPromotionResult} from "../promotion/promotion.model";


export class CostBuilder {
    constructor(
        public rentals: Rental[],
        public promotion: IPromotion
    ) {
        this.rentals = rentals.sort( this._compareFunction )
    }

    private _compareFunction( a: Rental, b: Rental ): number {
        if (a.calculateTotalCost() < b.calculateTotalCost()) {
            return 1;
        } else if (a.calculateTotalCost() > b.calculateTotalCost()) {
            return -1;
        } else {
            return 0;
        }
    }

    _sumNoPromotionRentals( rentals: Rental[] ): number {
        const filteredRentals = rentals.filter( rental => {
            return rental.includedInPromotion === undefined
        });
        return filteredRentals.reduce( (acc, curr) => acc + curr.calculateTotalCost(), 0 );
    }

    calculateCost(): number {
        const promotionResult: IPromotionResult = this.promotion.applyPromotion( this.rentals );
        return promotionResult.promotedRentalsCost + this._sumNoPromotionRentals( promotionResult.appliedPromotionRentals );
    }
}
