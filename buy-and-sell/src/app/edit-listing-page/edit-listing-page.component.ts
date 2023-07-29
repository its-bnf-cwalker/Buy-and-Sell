import { Component, OnInit, Input, Output } from '@angular/core';
import { Listings, fakeListing } from '../fake-data';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent {

  listing: Listings | any;


  ngOnInit(){
    const id = this.Route.snapshot.paramMap.get('id');
    if(id!=null){
    this.listingService.getListingById(id)
    .subscribe(listing=>{this.listing = listing})
    }
  }

  constructor(
    private Route: ActivatedRoute,
    private Router: Router,
    private listingService: ListingsService
  ){}


  onSubmit({name, description, price}): void{
    this.listingService.editListing(
      this.listing.id, name, description, price
    ).subscribe(()=>{
      alert('Saving changes in the list');    
      this.Router.navigateByUrl('/my-listings')
    });
    
  }

}
