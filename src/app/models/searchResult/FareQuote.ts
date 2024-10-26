export interface FareQuoteResponse {
    Response: ResponseDetails;
  }
  
  export interface ResponseDetails {
    Error: ErrorDetails;
    IsPriceChanged: boolean;
    ResponseStatus: number;
    Results: FareQuoteResult;
    TraceId: string;
  }
  
  export interface ErrorDetails {
    ErrorCode: number;
    ErrorMessage: string;
  }
  
  export interface FareQuoteResult {
    ResultIndex: string;
    Source: number;
    IsLCC: boolean;
    IsRefundable: boolean;
    AirlineRemark: string;
    Fare: FareDetails;
    FareBreakdown: FareBreakdown[];
    Segments: [ [Segment] ];
    LastTicketDate?: any;
    TicketAdvisory?: any;
    FareRules: FareRule[];
    AirlineCode: string;
    ValidatingAirline: string;
  }
  
  export interface FareDetails {
    Currency: string;
    BaseFare: number;
    Tax: number;
    YQTax: number;
    AdditionalTxnFeeOfrd: number;
    AdditionalTxnFeePub: number;
    OtherCharges: number;
    ChargeBU: Charge[];
    Discount: number;
    PublishedFare: number;
    CommissionEarned: number;
    PLBEarned: number;
    IncentiveEarned: number;
    OfferedFare: number;
    TdsOnCommission: number;
    TdsOnPLB: number;
    TdsOnIncentive: number;
    ServiceFee: number;
  }
  
  export interface Charge {
    key: string;
    value: number;
  }
  
  export interface FareBreakdown {
    Currency: string;
    PassengerType: number;
    PassengerCount: number;
    BaseFare: number;
    Tax: number;
    YQTax: number;
    AdditionalTxnFeeOfrd?: number;
    AdditionalTxnFeePub?: number;
    AdditionalTxnFee?: number;
  }
  
  export interface Segment {
    Baggage: string  ;
    CabinBaggage: string  ;
    TripIndicator: number;
    SegmentIndicator: number;
    Airline: AirlineDetails;
    Origin: AirportDetails;
    Destination: AirportDetails;
    Duration: number;
    GroundTime: number;
    Mile: number;
    StopOver: boolean;
    StopPoint: string;
    StopPointArrivalTime: string;
    StopPointDepartureTime: string;
    Craft: string;
    IsETicketEligible: boolean;
    FlightStatus: string;
    Status: string;
  }
  
  export interface AirlineDetails {
    AirlineCode: string;
    AirlineName: string;
    FlightNumber: string;
    FareClass: string;
    OperatingCarrier: string;
  }
  
  export interface AirportDetails {
    Airport: Airport;
    DepTime?: string;
    ArrTime?: string;
  }
  
  export interface Airport {
    AirportCode: string;
    AirportName: string;
    Terminal: string;
    CityCode: string;
    CityName: string;
    CountryCode: string;
    CountryName: string;
  }
  
  export interface FareRule {
    Origin: string;
    Destination: string;
    Airline: string;
    FareBasisCode: string;
    FareRuleDetail: string;
    FareRestriction: string;
  }
  