import {CostBuilder} from "./cost-builder.model";
import {DayRental, HourRental, WeekRental} from "../rental/rental.model";
import {AvailablePromotions, FamilyPromotion} from "../promotion/promotion.model";

describe('CostBuilder tests', () => {
   const rentals = [
       new DayRental(1, 1),
       new HourRental(2, 1),
       new WeekRental(3, 1)
   ];
    const costBuilder = new CostBuilder( rentals, new FamilyPromotion() );

    test('this.rentals array is sorted desc', () => {
        expect( costBuilder.rentals[0] ).toBeInstanceOf( WeekRental );
        expect( costBuilder.rentals[1] ).toBeInstanceOf( DayRental );
        expect( costBuilder.rentals[2] ).toBeInstanceOf( HourRental );
    });

    test('_sumNoPromotionRentals no promotions', () => {
        expect( costBuilder._sumNoPromotionRentals( rentals ) ).toEqual( 85 );
    })

    test('_sumNoPromotionRentals with promotions', () => {
        const rentalsWithPromotion = [...rentals];
        rentalsWithPromotion[0].includedInPromotion = AvailablePromotions.familyPromotion;
        expect( costBuilder._sumNoPromotionRentals( rentalsWithPromotion ) ).toEqual( 25 );
    })

    test('calculateCost with 3 rentals', () => {
        expect( costBuilder.calculateCost() ).toEqual( 59.5 );
    });

    test('calculateCost with 6 rentals', () => {
        const rentals6 = [
            ...rentals,
            new DayRental(1, 1),
            new HourRental(2, 1),
            new WeekRental(3, 1)
        ];
        const costBuilder6 = new CostBuilder( rentals6, new FamilyPromotion() );
        expect( costBuilder6.calculateCost() ).toEqual(  120.5 );
    })
});
