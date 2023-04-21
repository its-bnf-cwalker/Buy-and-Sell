import { Component, OnInit } from '@angular/core';
import { Listings, fakeListing } from '../fake-data';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  email: string='';
  message: string='';
  listing: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingsService
  ){}

  ngOnInit(){
    const id= this.route.snapshot.paramMap.get('id');
    if(id!=null){
      this.listingService.getListingById(id)
      .subscribe(listing => {
        this.listing = listing;
        this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`
      })
    }
    }

  sendMessage(){
    alert('Your Message has been send successfully')
    this.router.navigateByUrl('/listings')
  }
}
