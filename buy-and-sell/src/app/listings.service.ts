import { Injectable } from '@angular/core';
import { fakeListing, Listings } from './fake-data';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  
  constructor(
    private http: HttpClient,
  ) { }

  getListings(): Observable<Listings[]>{
    return this.http.get<Listings[]>('/api/listings');
  }

  getListingById(id: string): Observable<Listings>{
    console.log(this.http.get<Listings>(`/api/listing/${id}`))
    return this.http.get<Listings>(`/api/listing/${id}`);
  }

  addViewToListing(id: string): Observable<Listings>{
    return this.http.post<Listings>(`/api/listings/${id}/add-view`, {}, httpOptions)
  }

  getListingsForUser(): Observable<Listings[]>{
    return this.http.get<Listings[]>('/api/users/12345/listings');
  }

  deleteListing(id: string): Observable<any>{
    return this.http.delete('/api/listings/${id}');
  }

  createListing(name:string, desc: string, price: number): Observable<Listings>{
    return this.http.post<Listings>(
      '/api/listings',
      {name, desc, price},
      httpOptions
    )
  }
  
  editListing(id: string, name: string, description: string, price: number): Observable<Listings>{
    return this.http.post<Listings>(
      `/api/listing/${id}`,{name, desc:description, price},httpOptions
    )
  }

}
