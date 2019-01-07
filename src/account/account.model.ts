import {Rental} from "../rental/rental.model";

export class Account {
    constructor(
        public rentals: Rental[] = []
    ) { }

    addRental( rental: Rental ): void {
        this.rentals.push( rental );
    }
}
