export interface FlightSearchModel {
    adultCount: number;
    childCount: number;
    infantCount: number;
    directFlight: boolean;
    oneStopFlight: boolean;
    journeyType: string;
    preferredAirlines: string;
    origin: string;
    destination: string;
    cabinClass: string;
    preferredDeparture: string;
    preferredArrivalTim: string;
}