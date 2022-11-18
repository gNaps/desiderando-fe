import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FriendApiService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  findAll(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.httpClient.get(`${environment.apiUrl}/friends`, { headers });
  }

  findOne(friendId: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getJwtToken()}`,
    });
    return this.httpClient.get(`${environment.apiUrl}/friends/${friendId}`, {
      headers,
    });
  }
}
