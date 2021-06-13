import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 age: number = 0;
 items: Observable<any>;

  currentAddress: string = "Bengaluru,560048";
  downloadResume : String = '';
  constructor(
    public db: AngularFireDatabase
  ) {
     this.items = db.list('Resume').valueChanges();
  }

  ngOnInit() {

    var today: Date = new Date();
    var birthday: Date = new Date(1995, 1, 23);

    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

    this.age = Math.floor(differenceInMilisecond / 31536000000);

      this.items.subscribe((res:any) => {
      this.downloadResume = res;
    })

   }

}
