import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hero = '';
   additem = null;
item(){
this.hero = this.additem

}

 constructor(){

 }
}
