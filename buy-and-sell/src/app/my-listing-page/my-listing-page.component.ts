import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listings, fakeListing } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css']
})
export class MyListingPageComponent {
  listing: Listings[]=[];

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingsService
  ){}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
      this.listingService.getListingsForUser()
      .subscribe(listing=>{this.listing=listing, console.log("Here: ", listing)})
    }

    onDeletedClicked(listingId: string){
      this.listingService.deleteListing(listingId)
      .subscribe(()=>{
        this.listing=this.listing.filter(
          listing => listing.id!=listingId
        )
      })
    }
}
