import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ISerachResultResponse } from '../../models/searchResult/searchResult';
import { Responses, SearchResult } from '../../models/searchResult/searchResponse';
import { catchError } from 'rxjs/operators';
import { SSRLCCResponse } from '../../models/SSRResponse/ssrResponse';
import { baseRequest } from '../../models/requestClasses/baseRequest';
import { FlightSearchModel } from '../../models/requestClasses/searchFormRequest';
import { MyClassDetails } from '../../models/searchResult/FareRule';
import { FareQuoteResponse } from '../../models/searchResult/FareQuote';
// import { fareRuleResponse, SearchFareRuleResult } from '../../models/searchResult.ts/fareRuleResponse';


@Injectable({
  providedIn: 'root'
})
export class SearchResponseService {

  private apiUrl = 'https://localhost:7269/api/SalesInvoice/GetSearchResult';
  private sendUrl = 'https://localhost:7269/api/SalesInvoice/BookFlight/book';
  
  private ssrUrl = 'https://localhost:7269/api/SalesInvoice/GetSSRResponse';
  private fareRuleUrl = "https://localhost:7269/api/SalesInvoice/GetFareRuleResponse";
  private fareQuoteUrl = "https://localhost:7269/api/SalesInvoice/GetFareQuoteResponse";

  constructor(private http: HttpClient) {}

  sendSearchResponse(searchRequest:any): Observable<any>{
   return this.http.post(this.apiUrl, searchRequest)
   .pipe(
     catchError(this.handleError) // Handle errors with a common method
   );
  }

  getSearchResponse(): Observable<ISerachResultResponse[]> {
    return this.http.get<ISerachResultResponse[]>(this.apiUrl);
  }

  getFlights(): Observable<ISerachResultResponse[]> {
    // Mock flight data
    const mockFlights: ISerachResultResponse[] = [
      {
        airline: 'Air India',
        airlineLogo: 'assets/images/air-india-logo.png',
        airlineCode:'AI22',
        price: 346,
        flights: [
          {
            departure: 'LHR',
            arrival: 'BOM',
            duration: '08h 45m',
            from: 'London (LHR)',
            to: 'Mumbai (BOM)',
            time: '12:30',
            label: 'Retail Fare',
          },
          {
            departure: 'LHR',
            arrival: 'BOM',
            duration: '08h 50m',
            from: 'London (LHR)',
            to: 'Mumbai (BOM)',
            time: '21:30',
            label: 'Retail Fare',
          },
        ],
      },
      {
        airline: 'Oman Air',
        airlineLogo: 'assets/images/oman-air-logo.png',
        airlineCode:'AI22',
        price: 380,
        flights: [
          {
            departure: 'LHR',
            arrival: 'MCT',
            duration: '07h 30m',
            from: 'London (LHR)',
            to: 'Muscat (MCT)',
            time: '15:45',
            label: 'Promo Fare',
          },
        ],
      },
    ];

    // Return mock data as observable
    return of(mockFlights);
  }

  getFlightSearchResult(flightSearching :FlightSearchModel): Observable<SearchResult> {
    return this.http.post<SearchResult>(this.apiUrl,flightSearching );
  }

  getSearchResult(): Observable<Responses[]> {
    return this.http.get<Responses[]>(this.apiUrl);
  }


  // Send booking data to backend using HTTP POST
  // Method to book a flight, accepts flight details and returns an Observable
  bookFlight(flightBookingRequest: any): Observable<any> {
    return this.http.post(this.sendUrl, flightBookingRequest)
      .pipe(
        catchError(this.handleError) // Handle errors with a common method
      );
  }

  getSSRDetails(requestDetails: baseRequest): Observable<SSRLCCResponse>{
    return this.http.post<SSRLCCResponse>(this.ssrUrl, requestDetails).pipe(
      map((response: any) => response)
    );
  }

  getFareRule(requestDetails: baseRequest): Observable<MyClassDetails>{
    return this.http.post<MyClassDetails>(this.fareRuleUrl, requestDetails).pipe(
      map((response: any) => response)
    );
  }

  getFareQuote(requestDetails: baseRequest): Observable<FareQuoteResponse>{
    return this.http.post<FareQuoteResponse>(this.fareQuoteUrl, requestDetails).pipe(
      map((response: any) => response)
    );
  }

  // getFareRulePart2(requestDetails: baseRequest): Observable<fareRuleResponse>{
  //   return this.http.post<FareRuleResponse>(this.fareRuleUrl, requestDetails).pipe(
  //     map((response: any) => response)
  //   );
  // }
  // Error handling logic, to be reused in all HTTP calls
  private handleError(error: any): Observable<never> {
    console.error('Error occurred during flight booking:', error);
    throw error;
  }
}
