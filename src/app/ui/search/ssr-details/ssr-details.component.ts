import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchRequestsService } from '../../../services/stateRequests/search-requests.service';
import { SearchResponseService } from '../../../services/search/search-response.service';
import { baseRequest } from '../../../models/requestClasses/baseRequest';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SearchFareRuleResult } from '../../../models/searchResult/fareRuleResponse';
import { Baggage, MealDynamic, SSRLCCResponse } from '../../../models/SSRResponse/ssrResponse';
import { MyClassDetails } from '../../../models/searchResult/FareRule';
import { FareQuoteResponse, Segment } from '../../../models/searchResult/FareQuote';


@Component({
  selector: 'app-ssr-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,MatCheckboxModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
    MatCardModule, MatButtonModule, MatDividerModule, // <-- For Material Option
    FormsModule,CommonModule
  ],
  templateUrl: './ssr-details.component.html',
  styleUrl: './ssr-details.component.css'
})
export class SsrDetailsComponent implements OnInit{
  //fareRuleResult: fareRuleResponse[] | undefined;
  segment: [ [Segment] ] |null =null;
  fareRuleResultss: SearchFareRuleResult | undefined;
  fareQuoteResult: FareQuoteResponse | null = null;
  fareRuleResult : MyClassDetails| null = null;
  detailedResult: SSRLCCResponse | undefined;

  ssrDetails: SSRLCCResponse | null = null;
  allowSSR: boolean = false;
  baggageOptions: [[Baggage]] | null = null;
  mealOptions: MealDynamic[] = [];

  selectedBaggage: Baggage | undefined;
  selectedMeal: MealDynamic | undefined;
  private baseRequestDetails: baseRequest={
    traceId:'',
    resultIndex:''
  };
  constructor(private flightService: SearchResponseService, private searchService: SearchRequestsService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.baseRequestDetails = this.searchService.getBaseRequestDetails();

    this.flightService.getFareRule(this.baseRequestDetails).subscribe(
      (response: MyClassDetails) => {
        console.log('ActualStructure Far Rule Response:', response); // Log the response to see its structure
        this.fareRuleResult = response; // Correctly assign the response
        
        this.cdr.detectChanges(); // Force Angular to check for changes
        console.log('fareRuleResult ', this.fareRuleResult);
        
      },
      (error) => {
        console.error('Error fetching Fare rule results:', error);
      }
    );

    this.flightService.getFareQuote(this.baseRequestDetails).subscribe(
      (response: FareQuoteResponse) => {
        
        this.fareQuoteResult = response; // Correctly assign the response
        
        this.cdr.detectChanges(); // Force Angular to check for changes
        console.log('Fare Quote ', this.fareQuoteResult.Response.Results);
        this.segment  = this.fareQuoteResult.Response.Results.Segments;
        this.allowSSR = true;
        this.flightService.getSSRDetails(this.baseRequestDetails).subscribe(
          (response: SSRLCCResponse) => {
            
            this.ssrDetails = response; // Correctly assign the response
            
            this.cdr.detectChanges(); // Force Angular to check for changes
            console.log('SSR Details Quote ', this.ssrDetails);
            this.baggageOptions = response.Response.Baggage;
            //this.mealOptions = response.Response.MealDynamic;
          },
          (error) => {
            console.error('Error fetching Fare rule results:', error);
          }
        );
      
      },
      (error) => {
        console.error('Error fetching Fare rule results:', error);
      }
    );
    
  //   this.flightService.getSSRDetails(this.baseRequestDetails).subscribe(
  //     (response: any) => {
  //       console.log('API Response:', response); // Log the response to see its structure
  //       this.detailedResult = response; // Correctly assign the response
  //     },
  //     (error) => {
  //       console.error('Error fetching flight results:', error);
  //     }
  //   );
  }

    // If you want to select an individual baggage item from the nested array
    selectBaggage(baggage: Baggage): void {
      this.selectedBaggage = baggage;
      console.log("the value is : {0}",this.selectedBaggage);
    }
  
    selectMeal(meal: MealDynamic): void {
      this.selectedMeal = meal;
      console.log(this.selectedMeal);
    }

}
