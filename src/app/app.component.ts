import { Component, NgModule, HostListener,Injectable  } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';


   @HostListener('window:beforeunload', ['$event'])
     public beforeunloadHandler($event) {
       console.log("data success");
       //return "Are you sure?";
       /* In this Section we can use the remove local store as well as generate Server side  token deacttivating*/
       $event.returnValue = "Are you sure?";
    
     
    }

}

