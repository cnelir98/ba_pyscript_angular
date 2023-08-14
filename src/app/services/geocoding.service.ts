import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private http: HttpClient) { }

  private baseApiUrl = 'https://api.opencagedata.com/geocode/v1/json?key=aaabc2f060504339bda130dcf9a63e6e&q=';
  
  getCoordinates(placeName: string): Observable<any> {
    const apiUrl = `${this.baseApiUrl}${encodeURIComponent(placeName)}`;
    return this.http.get<any>(apiUrl);
  }

}
