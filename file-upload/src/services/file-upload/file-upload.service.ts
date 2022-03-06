import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(public http: HttpClient) { }

  upload_files(file: any){
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //       'Content-Type': 'multipart/form-data',
    //   })
    // };
    console.log(file);
    return this.http.post('http://file-upload.com:4200/upload', file);
  }

}
