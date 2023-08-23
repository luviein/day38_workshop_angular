import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UploadServiceService } from './Service/upload-service.service';
import { View1Component } from './Components/view1/view1.component';

const appRoutes: Routes = [
  {path: "", component: AppComponent, title: "home"},
  {path: "upload/:id", component: View1Component}
]

@NgModule({
  declarations: [
    AppComponent,
    View1Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [UploadServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
