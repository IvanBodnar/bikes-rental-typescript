import {Rental} from "../rental/rental.model";

// Enum created to strong type all the future available promotions
export enum AvailablePromotions {
    familyPromotion = 'familyPromotion'
}

// This interface enforces the methods a promotion
// must implement in order to interact with the CostBuilder class
export interface IPromotion {
    checkPromotionApplies: ( rentals: Rental[] ) => boolean;
    applyPromotion: ( rentals: Rental[] ) => IPromotionResult;
}

// Strong type the promotion results
export interface IPromotionResult {
    promotion: AvailablePromotions;
    promotedRentalsCost: number;
    appliedPromotionRentals: Rental[];
}

// Specific type of promotion
export class FamilyPromotion implements IPromotion {
    lowerLimit = 3;
    upperLimit = 5;
    upperIndex = this.upperLimit - 1;
    discountPercentage = 30;

    // Mark the Rental items contained on the array as susceptible
    // to be included on the promotion's discount. It will include
    // at most the established upper limit of the promotion.
     _markRentalsForPromotion( rentals: Rental[] ): Rental[] {
        rentals.forEach( (rental, index) => {
            if (index <= this.upperIndex) {
                rental.includedInPromotion = AvailablePromotions.familyPromotion;
            }
        });
        return rentals;
    }

    // This method can be used by other classes as a mean
    // to establish if a Rental[] qualifies for the promotion.
    checkPromotionApplies( rentals: Rental[] ): boolean {
        return rentals.length >= this.lowerLimit;
    }

    // Applies the discount to the pertinent rentals. Returns an IPromotionResult
    // object which includes the type of promotion, the Rental[] (with the rental
    // instances marked for promotion) and the cost: the result of subtracting
    // the discount percentage of the cost of the rentals included on the promotion
    // from the total cost of those rentals.
    applyPromotion( rentals: Rental[] ): IPromotionResult {
        const markedRentals = this._markRentalsForPromotion( rentals );
        const promotedRentals = markedRentals.filter( rental => {
            return rental.includedInPromotion === AvailablePromotions.familyPromotion
        });

        const promotedRentalsCost = promotedRentals.reduce( (acc, curr) => {
                return acc + curr.calculateTotalCost()
            }, 0
        );

        const costWithDiscount = promotedRentalsCost - ( ( promotedRentalsCost / 100 ) * this.discountPercentage );

        return {
            promotion: AvailablePromotions.familyPromotion,
            promotedRentalsCost: costWithDiscount,
            appliedPromotionRentals: markedRentals
        } as IPromotionResult;
    }

}
