import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthenticationService {
    private apiUrl = 'https://localhost:7269/api/SalesInvoice/AuthenticateTBOTokenForTheDay';

    constructor(private http: HttpClient) { }

    fetchTokenId(): Observable<any[]> {
        return this.http.get<any>(this.apiUrl);
    }

    createTokenId(user: any): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(this.apiUrl, user, { headers });
    }

    deleteTokenId(userId: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${userId}`);
    }

}
