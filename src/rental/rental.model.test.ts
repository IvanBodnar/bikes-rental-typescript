import {Rental, HourRental, DayRental, WeekRental} from "./rental.model";

test('Rental.calculateTotalCost works with no timeConsumed', () => {
    const rental = new Rental(1);
    rental.price = 5;
    expect(rental.calculateTotalCost()).toEqual(0);
});

test('Rental.calculateTotalCost works with timeConsumed', () => {
    const rental = new Rental(1, 5);
    rental.price = 5;
    expect(rental.calculateTotalCost()).toEqual(25);
});

test('HourRental creates with correct price', () => {
    expect(new HourRental(1)).toHaveProperty('price', 5);
});

test('DayRental creates with correct price', () => {
    expect(new DayRental(1)).toHaveProperty('price', 20);
});

test('DayRental creates with correct price', () => {
    expect(new WeekRental(1)).toHaveProperty('price', 60);
});
