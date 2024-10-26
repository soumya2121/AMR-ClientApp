import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SearchRequestsService } from '../../../services/stateRequests/search-requests.service';
import { Router } from '@angular/router';
import { passengerDetails } from '../../../models/requestClasses/passengerDetails';

@Component({
  selector: 'app-passenger-details',
  standalone: true,
  imports: [
    CommonModule,FormsModule,
    MatInputModule,MatFormFieldModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule, MatCardModule, MatButtonModule, MatDividerModule,MatRadioModule,
    MatIconModule,MatCheckbox
  ],
  templateUrl: './passenger-details.component.html',
  styleUrl: './passenger-details.component.css'
})
export class PassengerDetailsComponent {
  
    // Declare passengerDetails with an initial empty state
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

  constructor(private searchService: SearchRequestsService, private router: Router) { }
  

  // navigateToPassengerDetails(traceId: string) {
  //   this.searchService.setTraceId(traceId);
  //   this.router.navigate(['/passenger-details']);
  // }
    // Submit function
  submitPassengerDetails() {
      console.log(this.passengerDetails); // Here, you can handle form submission (e.g., sending to an API)
      this.searchService.setPassengerDetails(this.passengerDetails);
      this.router.navigate(['/ssr-details-component']);
    }
}
