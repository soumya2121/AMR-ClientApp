export interface FareRule {
    Airline: string;
    DepartureTime: string;
    Destination: string;
    FareBasisCode: string;
    FareInclusions: string[];
    FareRestriction: string | null;
    FareRuleDetail: string[];
    FlightId: number;
    Origin: string;
    ReturnDate: string;
  }
  
  export interface MyClassDetails {
    Response: {
    Error: { ErrorCode: number; ErrorMessage: string };
    FareRules: FareRule[];
    ResponseStatus: number;
    TraceId: string;
    }
  }