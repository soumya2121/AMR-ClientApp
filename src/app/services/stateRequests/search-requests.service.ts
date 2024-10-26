import { Injectable } from '@angular/core';
import { passengerDetails } from '../../models/requestClasses/passengerDetails';
import { baseRequest } from '../../models/requestClasses/baseRequest';
import { trace } from 'console';
import { FlightSearchModel } from '../../models/requestClasses/searchFormRequest';

@Injectable({
  providedIn: 'root'
})

export class SearchRequestsService {
  private baseRequest: baseRequest ={
    traceId: '',
    resultIndex: ''
  };

  
  private traceId: string = "";
  private resultIndex: string = "";
  passengerDetails: passengerDetails = {
    pFristName: '',
    pMiddleName: '',
    pLastName: '',
    pDOB: new Date(),
    pNationality: '',
    pPassportNo: '',
    passportIssueDate: new Date(),
    passportExpiryDate: new Date()
  };

  flightSearch: FlightSearchModel = {
    adultCount:0,
    childCount : 0,
    infantCount: 0,
    directFlight: false,
    oneStopFlight : false,
    journeyType : '',
    preferredAirlines : '',
    origin : '',
    destination : '',
    cabinClass : '',
    preferredDeparture : '',
    preferredArrivalTim : '',
  };
  constructor() { }

  setBaseRequestDetails(traceId: string, resultIndex: string) {
    this.traceId = traceId;
    this.resultIndex = resultIndex;
    this.baseRequest.traceId = this.traceId;
    this.baseRequest.resultIndex = this.resultIndex;
  }

  getBaseRequestDetails(): baseRequest {
    return this.baseRequest;
  }
  setPassengerDetails(passengerDetails: passengerDetails ){
    this.passengerDetails = passengerDetails;
  }
  
  getPassengerDetails(): passengerDetails {
   return this.passengerDetails;
  }
  
  setSearchFormRequestDetails(flightRequest :FlightSearchModel) {
    this.flightSearch = flightRequest;
  }
  getSearchFormRequestDetails(): FlightSearchModel{
    return this.flightSearch;
  }
}
