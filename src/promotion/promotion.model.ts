import {Rental} from "../rental/rental.model";


export enum AvailablePromotions {
    familyPromotion = 'familyPromotion'
}

export interface IPromotion {
    checkPromotionApplies: ( rentals: Rental[] ) => boolean;
    applyPromotion: ( rentals: Rental[] ) => IPromotionResult;
}

export interface IPromotionResult {
    promotion: AvailablePromotions;
    promotedRentalsCost: number;
    appliedPromotionRentals: Rental[];
}

export class FamilyPromotion implements IPromotion {
    lowerLimit = 3;
    upperLimit = 5;
    upperIndex = this.upperLimit - 1;
    discountPercentage = 30;

     _markRentalsForPromotion( rentals: Rental[] ): Rental[] {
        rentals.forEach( (rental, index) => {
            if (index <= this.upperIndex) {
                rental.includedInPromotion = AvailablePromotions.familyPromotion;
            }
        });
        return rentals;
    }

    checkPromotionApplies( rentals: Rental[] ): boolean {
        return rentals.length >= this.lowerLimit;
    }

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
