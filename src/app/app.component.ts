import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  url: string = "";
  urlArray: string[] = [];

  constructor(private storage: AngularFireStorage) {

  }

  uploadFile(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const fileName: string = files[i].name;
      const task = this.storage.upload(fileName, files[i]);
      task.then(() => {
        this.storage.ref(fileName).getDownloadURL().subscribe(url => {
          this.urlArray.push(url);
        })
      });
    }
  }


  
  


}
