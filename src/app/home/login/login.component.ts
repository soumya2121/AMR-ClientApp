import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { AppComponent } from '../../app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenAuthenticationService } from '../../services/authenticate/token-authentication.service';
import { Console } from 'console';

interface Token {
  tokenId: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [],
  //bootstrap: [AppComponent],
})
export class LoginComponent implements OnInit{

  token: Token[] = [];
  
  constructor(private tokenService: TokenAuthenticationService) { }
//https://medium.com/@sandeep15mca/rest-api-call-in-angular-application-289d907020ff
    ngOnInit() {
      this.fetchTheTokenId();
    }
    fetchTheTokenId() {
      this.tokenService.fetchTokenId()
      
          .subscribe(
              (response) => {
                  //this.token = response;
                  console.log(response.toString());
              },
              (error) => {
                  console.error(error);
              }
          );
    }
}
