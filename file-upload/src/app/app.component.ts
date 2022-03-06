import { Component } from '@angular/core';
import { FileUploadService } from 'src/services/file-upload/file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'file-upload';
  formData: FormData = new FormData();
  isUpload = false;

  constructor(public fileUploadService: FileUploadService) { }

  handleFileInput(event: any){
    let files = event.target.files
    console.log(files);
    if(files && files.length>0){
      Array.from(files).forEach((file: any) => {
        this.formData.append('file', file, file.name);
      })
    }
  }

  submit(){
    this.isUpload = true
    this.fileUploadService.upload_files(this.formData).subscribe(result=>{
      console.log(result);
      window.alert(result);
      this.isUpload = false
      location.reload();
    }, error=>{
      console.log(error);
      this.isUpload = false
    })
  }
}
