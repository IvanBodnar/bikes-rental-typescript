import {Account} from "./account.model";
import {HourRental} from "../rental/rental.model";


describe('Account tests', () => {
    test('Account creates', () => {
        const account = new Account();
        expect( account ).toBeTruthy();
    })
});


