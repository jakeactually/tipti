export type Hotel = {
    name: string;
    rating: number;
    weekday_rates: {
        regular_customer: number;
        rewards_customer: number;
    };
    weekend_rates: {
        regular_customer: number;
        rewards_customer: number;
    };
};

export type HotelList = {
    hotels: Hotel[];
};
