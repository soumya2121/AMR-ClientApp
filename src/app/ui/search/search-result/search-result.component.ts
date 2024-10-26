import { Component, OnInit } from '@angular/core';
import { ISerachResultResponse } from '../../../models/searchResult/searchResult';
import { SearchResponseService } from '../../../services/search/search-response.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Responses, Result, SearchResult } from '../../../models/searchResult/searchResponse';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router'; // Import Router for navigation
import { Pipe, PipeTransform } from '@angular/core';
import { SearchRequestsService } from '../../../services/stateRequests/search-requests.service';
import { FlightSearchModel } from '../../../models/requestClasses/searchFormRequest';


@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})

export class SearchResultComponent implements OnInit {

  flightRequestDetails: FlightSearchModel = {
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

  flights: ISerachResultResponse[] = [];
  detailedResult: SearchResult | undefined;
  
  responseDetails:Responses[]=[];
  resultDetails: Result[] = [];

  constructor(private flightService: SearchResponseService, private searchService: SearchRequestsService,
    private router: Router,) {}

  ngOnInit(): void {
    // Fetch flights when the component is initialized
    this.flightService.getFlights().subscribe((response) => {
      this.flights = response;
    });

    //get cookie data
    this.flightRequestDetails = this.searchService.getSearchFormRequestDetails();

    console.log('REQUEST DETAILS',this.flightRequestDetails);

    //
    this.flightService.getFlightSearchResult(this.flightRequestDetails).subscribe(
      (response: SearchResult) => {
        console.log('API Response:', response); // Log the response to see its structure
        this.detailedResult = response; // Correctly assign the response
      },
      (error) => {
        console.error('Error fetching flight results:', error);
      }
    );
  }
    // The function that will be triggered when "Book Now" is clicked
  bookFlight(flightDetails: any) {
    // You can log or process the flight details
    console.log('Selected flight details:', flightDetails);

    // Prepare the booking data
    const bookingData = {
      traceId: this.detailedResult?.Response.TraceId,
      resultIndex: flightDetails.ResultIndex,
      airlineCode: flightDetails.AirlineCode,
      isRefundable: flightDetails.IsRefundable,
      origin: this.detailedResult?.Response.Origin,
      destination: this.detailedResult?.Response.Destination,
      departureTime: flightDetails.Segments[0][0].Destination.ArrTime,
      arrivalTime: flightDetails.Segments[0][0].Destination.ArrTime,
      fare: flightDetails.FareBreakdown[0].BaseFare,
      baggage: flightDetails.Segments[0][0].Baggage,
      stopover: flightDetails.Segments[0][0].StopOver
    };
    console.log('Selected flight details:', bookingData);

    
    //this.flightService.bookFlight(bookingData);
    this.searchService.setBaseRequestDetails(this.detailedResult?.Response.TraceId ?? "", flightDetails.ResultIndex);

    
    //TO DO later
    // this.flightService.bookFlight(bookingData)
    //   .subscribe(
    //     (response) => {
    //       console.log('Booking successful!', response);
    //       //this.router.navigate(['/home-component']);
    //     },
    //     (error) => {
    //       console.error('Error booking flight:', error); // Log the error here
    //     }
    // );
    
    
    // Redirect to the home page after booking success
    //this.router.navigate(['/passenger-details-component']);
    this.router.navigate(['/ssr-details-component']);
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/airlines/default.png'; // Path to your default fallback image
  }
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours}h ${minutes}m`;
  }
}
