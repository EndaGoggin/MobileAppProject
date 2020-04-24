import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage  {

  // variables for local storage
  firstname:string;
  secondname:string;
  email:string;

  constructor(private storage:Storage) { }

  // save register data to local storage
  onSave() {
    this.storage.set("firstname", this.firstname);
    this.storage.set("secondname", this.secondname);
    this.storage.set("email", this.email);
    
    // Alert saying that name is used on home screen
    const allInfo = '${this.firstname} is saved!'; 
    alert(allInfo); 
  }

}
