import {AvailablePromotions, FamilyPromotion} from "./promotion.model";
import {HourRental, Rental} from "../rental/rental.model";


describe('FamilyPromotion tests', () => {
    const familyPromotion = new FamilyPromotion();
    let rentals1 = [ new HourRental(1) ];
    let rentals3 = [ ...rentals1, new HourRental(2), new HourRental(3) ];
    let rentals6 = [ ...rentals3, new HourRental(4), new HourRental(5), new HourRental(6) ];

    test('checkPromotionApplies fails with one Rental in rentals array', () => {
        expect( familyPromotion.checkPromotionApplies( rentals1 ) ).toEqual( false );
    });

    test('checkPromotionApplies works with 3 Rental in rentals array', () => {
        expect( familyPromotion.checkPromotionApplies( rentals3 ) ).toEqual( true );
    });

    test('_markRentalsForPromotion', () => {
        const markedRentals = familyPromotion._markRentalsForPromotion( rentals6 );
        expect( markedRentals[markedRentals.length -1].includedInPromotion ).toEqual( undefined );
    });

    test('applyPromotion', () => {
        const rentalsForPromotion = [
            new HourRental(1, 5),
            new HourRental(1, 5),
            new HourRental(1, 5),
            new HourRental(1, 5),
        ] as Rental[];
        const appliedPromotionRentals = familyPromotion.applyPromotion( rentalsForPromotion );
        expect( appliedPromotionRentals.promotion ).toEqual( AvailablePromotions.familyPromotion );
        expect( appliedPromotionRentals.promotedRentalsCost ).toEqual( 70 );
        expect( appliedPromotionRentals.appliedPromotionRentals.length ).toEqual( 4 );
    });
});
