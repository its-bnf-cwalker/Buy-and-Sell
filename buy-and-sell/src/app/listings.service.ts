import { Injectable } from '@angular/core';
import { fakeListing, Listings } from './fake-data';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const httpOptionsWithAuthToken = token =>({
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'AuthToken':token
  })
})

@Injectable({
  providedIn: 'root'
})

export class ListingsService {

  
  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth
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
    return new Observable<Listings[]>(observer=>{
      this.auth.user.subscribe(user=>{
        console.log("listing service get Listing fro service:", user);
        user && user.getIdToken().then(token=>{
          if(user && token){
            this.http.get<Listings[]>(`/api/users/${user.uid}/listings`, httpOptionsWithAuthToken(token))
            .subscribe(listing =>{
              observer.next(listing)
            })
          }
          else{
            observer.next([]);
          }
        })
      })
    })
    
  }

  deleteListing(id: string): Observable<any>{
    return new Observable<Listings>(observer=>{
      this.auth.user.subscribe(user=>{
        user && user.getIdToken().then(token=>{
          this.http.delete<Listings>(
            `/api/listings/${id}`,
            httpOptionsWithAuthToken(token),
          ).subscribe(()=>observer.next())
        })
      })
    })
    
    // this.http.delete(`/api/listings/${id}`);
  }

  createListing(name:string, desc: string, price: number): Observable<Listings>{
    return new Observable<Listings>(observer=>{
      this.auth.user.subscribe(user=>{
        user && user.getIdToken().then(token=>{
          this.http.post<Listings>(
            '/api/listings',
            {name, desc, price},
            httpOptionsWithAuthToken(token)
          ).subscribe(()=>observer.next())
        })
      })
    })
  }
  
  editListing(id: string, name: string, description: string, price: number): Observable<Listings>{
    return new Observable<Listings>(observer=>{
      this.auth.user.subscribe(user=>{
        user && user.getIdToken().then(token=>{
          this.http.post<Listings>(
            `/api/listings/${id}`,
            {name, desc:description, price},
            httpOptionsWithAuthToken(token)
          ).subscribe(()=>observer.next())
        })
      })
    })
    
    this.http.post<Listings>(
      `/api/listing/${id}`,{name, desc:description, price},httpOptions
    )
  }

}
