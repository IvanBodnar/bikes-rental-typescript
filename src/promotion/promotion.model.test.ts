import {FamilyPromotion} from "./promotion.model";
import {HourRental} from "../rental/rental.model";


describe('FamilyPromotion tests', () => {
    const familyPromotion = new FamilyPromotion();

    test('addRental method', () => {
        familyPromotion.addRental( new HourRental(1) );
        expect( familyPromotion.rentals[0] ).toBeInstanceOf( HourRental );
    });

    test('checkPromotionApplies fails with one Rental in rentals array', () => {
        expect( familyPromotion.checkPromotionApplies() ).toEqual( false );
    });

    test('checkPromotionApplies works with 3 Rental in rentals array', () => {
        familyPromotion.addRental( new HourRental(2) );
        familyPromotion.addRental( new HourRental(3) );
        expect( familyPromotion.checkPromotionApplies() ).toEqual( true );
    })
});
