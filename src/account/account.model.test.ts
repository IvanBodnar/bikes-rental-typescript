import {Account} from "./account.model";
import {HourRental} from "../rental/rental.model";


describe('Account tests', () => {
    const account = new Account();

    test('Account creates', () => {
        expect( account ).toBeTruthy();
    });

    test('Account.addRental', () => {
        account.addRental( new HourRental(1) );
        expect( account.rentals.length ).toEqual(1 );
        expect( account.rentals[0] ).toBeInstanceOf( HourRental );
    })
});


