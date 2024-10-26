export interface SearchResult
{
    Response: {
        Destination: string;
        Error: {
          ErrorCode: number;
          ErrorMessage: string;
        };
        Origin: string;
        ResponseStatus: number;
        Results: Array<Array<Result>>; // Adjust this according to your actual structure
        TraceId: string;
      };
}
export interface Error
{
    ErrorCode: number ;
    ErrorMessage: string ;
}

export interface TaxBreakup
{
    key: string ;
    value: number ;
}

export interface ChargeBU
{
    TBOMarkUp: number ; // TBO Mark-up
    ConvenienceCharge: number ;// Convenience Charge
    OtherCharge: number ; // Other Charge
}


export interface FareBreakDownFromFareQuote
{
    Currency: string;
    PassengerType : number  ;
    PassengerCount  : number ;
    BaseFare  : number ;
    Tax  : number ;
    // List<TaxBreakup> TaxBreakUp ;
    YQTax  : number ;
    AdditionalTxnFeeOfrd : number ;
    AdditionalTxnFeePub : number;
}
export interface FareBreakdown
{
    Currency: string  ;
    PassengerType : number  ;
    PassengerCount : number  ;
    BaseFare : number  ;
    Tax : number  ;
    TaxBreakUp: [TaxBreakup]  ;
    YQTax : number  ;
    AdditionalTxnFeeOfrd : number  ;
    AdditionalTxnFeePub : number  ;
    PGCharge : number  ;
    SupplierReissueCharges : number  ;
}

export interface Airport
{
    AirportCode: string  ;
    AirportName: string  ;
    Terminal: string  ;
    CityCode: string  ;
    CityName:  string  ;
    CountryCode:  string  ;
    CountryName: string  ;
}

export interface Origin
{
    Airport: Airport;
    DepTime: Date ;
}

export interface Destination
{
    Airport: Airport;
    ArrTime: Date ;
}

export interface Airline
{
    AirlineCode: string  ;
    AirlineName: string  ;
    FlightNumber: string  ;
    Fareinterface: string  ;
    OperatingCarrier: string  ;
}

export interface FareClassification
{
    Type: string ;
}

export interface Segment
{
    Baggage: string  ;
    CabinBaggage: string  ;
    Cabininterface : number  ;
    SupplierFareinterface: object ;
    TripIndicator : number  ;//
    SegmentIndicator : number  ;//
    Airline:  Airline ;// check
    NoOfSeatAvailable : number  ;
    Origin:  Origin;//check
    Destination: Destination;
    AccumulatedDuration : number  ;
    Duration : number  ;
    GroundTime : number  ;
    Mile : number  ;
     StopOver: boolean ;
     FlightInfoIndex: string  ;
     StopPoint: string  ;
     StopPointArrivalTime: string  ;
     StopPointDepartureTime: string ;
     Craft: string  ;
     Remark: object  ;
     IsETicketEligible: boolean ;
     FlightStatus: string  ;
     Status: string  ;
    Fareclassification: FareClassification ;
}

export interface FareRuleResponse1
{
    Response: Response ;
    RareRuleCode: FareRuleCode;
}
export interface FareRuleCode
{
    Origin: string ;
    Destination: string ;
    Airline: string ;
    FareBasisCode: string ;
    FareRuleDetail: string ;
    FareRestriction: string ;
    FareFamilyCode: string ;
    FareRuleIndex: string ;
}

export interface FareQuote
{
    TraceId: string  ;
    IsPriceChanged: boolean ;
    ResponseStatus: string  ;
    Results: FareQuoteResult ;
    FareResponse: [FareResponse] ;//no exactly what we want
    FareBreakDowns: [FareBreakDownFromFareQuote] ;
    Segments: [Segment] ;
}
export interface FareQuoteResult
{
    ResultIndex: string  ;
    Source: string  ;
    IsRefundable: boolean ;
    AirlineRemark: string  ;
}
export interface Result
{
    FirstNameFormat: object ;
    IsBookableIfSeatNotAvailable: boolean ;
    IsHoldAllowedWithSSR: boolean ;
    IsUpsellAllowed: boolean ;
    LastNameFormat: object ;
    ResultIndex:  string  ;
    Source : number;
    IsLCC: boolean ;
    IsRefundable: boolean ;
    IsPanRequiredAtBook: boolean ;
    IsPanRequiredAtTicket: boolean ;
    IsPassportRequiredAtBook: boolean ;
    IsPassportRequiredAtTicket: boolean ;
    GSTAllowed: boolean ;
    IsCouponAppilcable: boolean ;
    IsGSTMandatory: boolean ;
    AirlineRemark: string;
    IsPassportFullDetailRequiredAtBook: boolean ;
    ResultFareType: string ;
    Fare:  FareResponse;
    FareBreakdown: [FareBreakdown] ;
    Segments: [ [Segment] ] ;
    LastTicketDate: string ;
    TicketAdvisory: string ;
    FareRules: [FareRuleCode] ;
    AirlineCode: string ;
    ValidatingAirline: string ;
    Fareclassification:  FareClassification  ;
}
export interface FareResponse
{
    Currency: string ; // Currency
    BaseFare: number;// Base fare
    YQTax: number; // Fuel surcharge
    AdditionalTxnFeeOfrd: number; // Additional Transaction Fee Offered
    AdditionalTxnFeePub: number; // Additional Transaction Fee Published
    OtherCharges: number; // Other Charges
    ChargeBU: ChargeBU ; // List of ChargeBU
    Discount: number;// Discount
    PublishedFare: number;// Published Fare
    CommissionEarned: number;// Commission Earned
    PLBEarned: number; // PLB Earned
    IncentiveEarned: number; // Incentive Earned
    OfferedFare: number;// Offered Fare
    TdsOnCommission: number; // TDS on Commission
    TdsOnPLB: number; // TDS on PLB
    TdsOnIncentive: number; // TDS on Incentive
    ServiceFee: number; // Service Fee

}
export interface Responses
{
    ResponseStatus: number;
    Error :Error ;
    TraceId :string;
    Origin: string ;
    Destination: string ;
    Results: [[Result]] ;
}