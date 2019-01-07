
export class Rental {
    price: number = 0;
    constructor(
        public id: number
    ) { }

    calculateTotalCost( timeConsumed: number ): number {
        return this.price * timeConsumed;
    }
}

export class HourRental extends Rental {
    price: number = 5;
    constructor(
        id: number,
    ) {
        super(id)
    }
}

export class DayRental extends Rental {
    price: number = 20;
    constructor(
        id: number
    ) {
        super(id)
    }
}

export class WeekRental extends Rental {
    price: number = 60;
    constructor(
        id: number
    ) {
        super(id)
    }
}
