import { Component ,OnInit} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { JourneyType, FlightCabinClass } from '../../../models/Enum/enumHelper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { SearchResponseService } from '../../../services/search/search-response.service';
import { Router } from '@angular/router';
import { SearchRequestsService } from '../../../services/stateRequests/search-requests.service';


@Component({
  selector: 'app-flight-search.component',
  standalone: true,
  imports: [
    ReactiveFormsModule,MatCheckboxModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
    MatCardModule, MatButtonModule, MatDividerModule, // <-- For Material Option
    FormsModule,CommonModule
  ],
  templateUrl: './flight-search.component.component.html',
  styleUrl: './flight-search.component.component.css'
})
export class FlightSearchComponentComponent implements OnInit {

  searchForm: FormGroup;

 
  journeyTypes = JourneyType;  // Expose enum for template iteration
  

  flightCabinClass = FlightCabinClass;
  //flightCabinClassKeys: string[];// Keys for iteration

  ngOnInit(): void {
  }

  journeyTypesData() : Array<string> {
    var keys = Object.keys(this.journeyTypes);
    return keys.slice(keys.length / 2);
  }

  cabinClassData() : Array<string> {
    var keys = Object.keys(this.flightCabinClass);
    return keys.slice(keys.length / 2);
  }
  constructor(private fb: FormBuilder, private flightService: SearchResponseService, private router: Router, private flightSerachRequest: SearchRequestsService) {



  this.searchForm = this.fb.group({
      
      adultCount: [1, [Validators.required, Validators.min(1)]],
      childCount: [0],
      infantCount: [0],
      directFlight: [false],
      oneStopFlight: [false],
      journeyType: [JourneyType.OneWay, Validators.required],
      preferredAirlines: [''],
      //segments: this.fb.array([this.createSegment()]), // Array of segments
      origin: ['DEL', Validators.required],
      destination: ['BOM', Validators.required],
      cabinClass: [FlightCabinClass.All, Validators.required],
      preferredDeparture: ['', Validators.required],
      PreferredArrivalTim: [''],
    });
  }

  setSearchRequest()
  {
    this.flightSerachRequest.setSearchFormRequestDetails(this.searchForm.value);

  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
      this.setSearchRequest();
      // Logic to send the form data to your API
      // this.flightService.sendSearchResponse(this.searchForm.value)
      // .subscribe(
      //   (response) => {
      //     console.log('Searched successful!', response);
      //     //this.router.navigate(['/home-component']);
      //   },
      //   (error) => {
      //     console.error('Error searching flight:', error); // Log the error here
      //   });
      // console.log("After call")

      // Redirect to the book after search success
    this.router.navigate(['/result-component']);
    }
  }

}

