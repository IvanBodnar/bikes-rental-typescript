import {Rental} from "../rental/rental.model";


export interface IPromotion {
    rentals: Rental[];
    addRental: ( rental: Rental ) => void;
    checkPromotionApplies: () => boolean;
}


export class FamilyPromotion implements IPromotion {
    public rentals: Rental[] = [];

    addRental( rental: Rental ): void {
        this.rentals.push( rental );
    }

    checkPromotionApplies(): boolean {
        return this.rentals.length >= 3;
    }
    
}
