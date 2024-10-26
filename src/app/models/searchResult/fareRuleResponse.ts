export interface fareRuleResponse {
    airline: string;                // Airline - Mandatory
    origin: string;                 // Origin - Mandatory
    destination: string;            // Destination - Mandatory
    fareBasisCode: string;          // Fare basis code is the fare class code provided by the supplier - Mandatory
    fareRestriction?: string;       // Fare restriction - Optional
    fareRuleDetail: string[];  
}
export interface SearchFareRuleResult
{
    Response: {
        Destination: string;
        Error: {
          ErrorCode: number;
          ErrorMessage: string;
        };
        Origin: string;
        ResponseStatus: number;
        FareRules: Array<Array<fareRuleResponse>>; // Adjust this according to your actual structure
        TraceId: string;
      };
}