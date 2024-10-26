export interface ISerachResultResponse{
    airline: string;
    airlineLogo: string;
    airlineCode:string;
    price: number;
    flights: {
        departure: string;
        arrival: string;
        duration: string;
        from: string;
        to: string;
        time: string;
        label: string;
    }[];
} 
export interface IFlightSearchResult{
    
} 