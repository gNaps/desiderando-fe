import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GiftApiService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  findAll(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.httpClient.get(`${environment.apiUrl}/gifts`, { headers });
  }

  dashboard(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.httpClient.get(`${environment.apiUrl}/gifts/dashboard`, {
      headers,
    });
  }

  findOne(id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.httpClient.get(`${environment.apiUrl}/gifts/${id}`, {
      headers,
    });
  }

  create(gift: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.httpClient.post(`${environment.apiUrl}/gifts`, gift, {
      headers,
    });
  }

  update(id: string, gift: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.httpClient.put(`${environment.apiUrl}/gifts/${id}`, gift, {
      headers,
    });
  }

  delete(id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.httpClient.delete(`${environment.apiUrl}/gifts/${id}`, {
      headers,
    });
  }

  book(giftId: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.httpClient.put(
      `${environment.apiUrl}/gifts/${giftId}/book`,
      {},
      {
        headers,
      }
    );
  }

  unbook(giftId: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.httpClient.put(
      `${environment.apiUrl}/gifts/${giftId}/unbook`,
      {},
      {
        headers,
      }
    );
  }
}
