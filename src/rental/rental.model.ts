import {AvailablePromotions} from "../promotion/promotion.model";

export class Rental {
    price: number = 0;
    constructor(
        public id: number,
        public timeConsumed: number = 0,
        public includedInPromotion?: AvailablePromotions
    ) { }

    setTimeConsumed( time: number ): void {
        this.timeConsumed = time;
    }

    calculateTotalCost(): number {
        return this.price * this.timeConsumed;
    }
}

export class HourRental extends Rental {
    price: number = 5;
    constructor(
        public id: number,
        public timeConsumed: number = 0,
        public includedInPromotion?: AvailablePromotions
    ) {
        super(id, timeConsumed, includedInPromotion)
    }
}

export class DayRental extends Rental {
    price: number = 20;
    constructor(
        public id: number,
        public timeConsumed: number = 0,
        public includedInPromotion?: AvailablePromotions
    ) {
        super(id, timeConsumed, includedInPromotion)
    }
}

export class WeekRental extends Rental {
    constructor(
        public id: number,
        public timeConsumed: number = 0,
        public includedInPromotion?: AvailablePromotions
    ) {
        super(id, timeConsumed, includedInPromotion)
    }
    price: number = 60;
}
