import { Component } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name = 'Srinivas Kattamuri';
  caption = 'Developer';
 // items: Observable<any>;
  allSkills:Array<any> = [];

  constructor(public db: AngularFireDatabase) {
    //this.items = db.list('Skills').valueChanges();
  }

  ngOnInit(){
    // this.items.subscribe((res:any) => {
    //   this.allSkills = res;
    // })
  }

}
