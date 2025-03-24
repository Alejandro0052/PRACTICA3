import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './cardusers.component.html',
  styleUrl: './cardusers.component.css'
})
export class CardusersComponent {
  @Input() user:any;

  ngOnInit(){
    console.log(this.user);
  }

}