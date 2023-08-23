import { Router, RouterModule } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadServiceService } from './Service/upload-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'day38_workshop_angular';

  constructor(private fb: FormBuilder, private uploadSvc: UploadServiceService, private router: Router) {}

  @ViewChild("audioUpload")
  toUpload!: ElementRef

  uploadForm!: FormGroup
  ngOnInit() : void {
    this.uploadForm = this.fb.group({

    })
  }

  process() {
    const value = this.uploadForm.value
    this.uploadSvc.upload(this.toUpload)
      .then(resp => {
        console.info(">>>> resp: ", resp)
        this.router.navigate(
          ['upload', resp.id])
      })
      .catch(error=>{
        console.error("error", error)
      })
  }


}
