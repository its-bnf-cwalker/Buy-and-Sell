import { Component, OnInit } from '@angular/core';
import { Listings, fakeListing } from '../fake-data';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent {



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingsService,
  ){}

  onSubmit({name, description, price}): void{
    this.listingService.createListing(name, description, price)
    .subscribe(()=>{
      alert('Creating a new list...');
      this.router.navigateByUrl('/my-listings');
    })
    
  }


}
