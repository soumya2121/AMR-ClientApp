export enum FlightCabinClass {
    All = 1,
    Economy = 2,
    PremiumEconomy = 3,
    Business = 4,
    PremiumBusiness = 5,
    First = 6
}

export enum JourneyType {
    OneWay = 1,
    Return = 2,
    MultiStop = 3,
    AdvanceSearch = 4,
    SpecialReturn = 5
}
// Create an array for the enum values
//journeyTypes = Object.keys(JourneyType).filter(k => !isNaN(Number(k)));
