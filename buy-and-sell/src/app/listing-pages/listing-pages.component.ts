import { Component, OnInit } from '@angular/core';
import {Listings, fakeListing} from '../fake-data';
import { ListingsService } from '../listings.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-listing-pages',
  templateUrl: './listing-pages.component.html',
  styleUrls: ['./listing-pages.component.css']
})
export class ListingPagesComponent implements OnInit {

  listings: Listings[] = [];

  constructor(
    private listingService : ListingsService,
  ){}

  ngOnInit(): void{
    this.listingService.getListings().subscribe(listings => this.listings = listings);
  }

}
