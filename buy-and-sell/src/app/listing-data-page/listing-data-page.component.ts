import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NEVER } from 'rxjs';
import { Listings, fakeListing } from '../fake-data';

@Component({
  selector: 'app-listing-data-page',
  templateUrl: './listing-data-page.component.html',
  styleUrls: ['./listing-data-page.component.css']
})
export class ListingDataPageComponent {

  @Input() buttonText;
  @Input() currentName;
  @Input() currentDesc;
  @Input() currentPrice;
  @Output() onSubmit = new EventEmitter<Listings>;

  // listing: Listings;


  name: string = '';
  description: string = '';
  price: string = '';


  ngOnInit(){
    this.name = this.currentName;
    this.description = this.currentDesc;
    this.price = this.currentPrice;
  }

  constructor(
    private router: Router,
  ){}

  onButtonClicked(){
   this.onSubmit.emit({
      id: null!,
      name: this.name,
      description: this.description,
      price: this.price,
      views: 0,
   })
  }

}
