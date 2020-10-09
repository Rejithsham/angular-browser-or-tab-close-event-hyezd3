import { Component, NgModule, HostListener,Injectable  } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  // Keep me Signed in
  public doUnload(): void {
    this.doBeforeUnload();
  }

  // Keep me Signed in
  public doBeforeUnload(): void {
    // Clear localStorage
    localStorage.removeItem('username_key');
  }

  public storeData(txt): void {
    localStorage.setItem('username_key', txt);
  }
   @HostListener('window:beforeunload', ['$event'])
     public beforeunloadHandler($event) {
       console.log("data success");
       //return "Are you sure?";
     $event.returnValue = "Are you sure?";
     if($event.returnValue === true){
       console.log("Api call Success");
     }
     
    }

}

