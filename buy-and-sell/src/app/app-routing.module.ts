import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ListingPagesComponent } from './listing-pages/listing-pages.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  {path: "", redirectTo:"/listings", pathMatch:"full"},
  {path: 'listings', component: ListingPagesComponent, pathMatch:"full"},
  {path: "listings/:id", component: ListingDetailPageComponent},
  {path: "contact/:id", component: ContactPageComponent},
  {path: "edit-listing/:id", component: EditListingPageComponent},
  {path: "my-listings", component: MyListingPageComponent},
  {path: "new-listing", component: NewListingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
