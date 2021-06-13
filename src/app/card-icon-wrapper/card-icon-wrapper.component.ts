import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-icon-wrapper',
  templateUrl: './card-icon-wrapper.component.html',
  styleUrls: ['./card-icon-wrapper.component.css']
})
export class CardIconWrapperComponent implements OnInit {
   @Input() iconArray : Array<any> = [];
   @Input() isExperience : boolean = true;
   @Input() title:string = 'Tech Stack'
  constructor() { }

  ngOnInit(): void {
  }

}
