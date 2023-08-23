import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private http: HttpClient) { }

  upload(elemRef: ElementRef) : Promise<any> {
    console.info(">>>>> files: ", elemRef.nativeElement.files)
    const data = new FormData()
    data.set("myFile", elemRef.nativeElement.files[0])
    return firstValueFrom(
      this.http.post<any>("/upload", data)
    )
  }
}
