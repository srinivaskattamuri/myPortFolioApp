import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.css']
})
export class CardWrapperComponent implements OnInit {
  @Input() title:string = '';
  @Input() detailArray : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
