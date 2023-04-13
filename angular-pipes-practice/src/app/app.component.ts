import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Pipes Practice';
  name:any="Srinivas Polaveni";
  role:any="UI Developer";
  dateObject=new Date();
  amount=200;
  value=0.26;

  message="Hello World!"

}
