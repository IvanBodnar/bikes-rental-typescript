import {Account} from "./account.model";
import {DayRental, HourRental, WeekRental} from "../rental/rental.model";
import {FamilyPromotion} from "../promotion/promotion.model";


describe('Account tests', () => {
    const rentals = [
        new DayRental(1, 1),
        new HourRental(2, 1),
        new WeekRental(3, 1)
    ];
    const account = new Account( rentals, new FamilyPromotion() );

    test('Account creates', () => {
        expect( account ).toBeTruthy();
    });

    test('Account.addRental', () => {
        account.addRental( new HourRental(1) );
        expect( account.rentals.length ).toEqual(4 );
        expect( account.rentals[0] ).toBeInstanceOf( DayRental );
    });

    test('calculateCost', () => {
        expect( account.calculateCost() ).toEqual( 59.5 );
    });
});


