import { Component, OnInit } from '@angular/core';
// import { SkillsService } from './../services/skills.service';
// import {IAbilities} from './../services/IAbilities';
// import {ISkills} from './../services/ISkills';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { PortfolioHelperService } from '../services/portfolio-helper.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  _skills : any = '';
   items: Observable<any>;
   allSkills:Array<any> = [];
   programmingSkills:Array<any> = [];
   backEndSkills:Array<any> = [];
   frontEndDevelopment:Array<any> = [];
   databases:Array<any> = [];
   tools:Array<any> = [];

  constructor(
    public db: AngularFireDatabase,
    protected appHelper:PortfolioHelperService) {
    this.items = db.list('Skills').valueChanges();
  }

  ngOnInit() {
    //   this.items.subscribe((res:any) => {
    //   this.allSkills = res;
    // })

    // reading from Assets
    this.programmingSkills = this.appHelper.programmingLanguages;
    this.frontEndDevelopment = this.appHelper.forntEndDevelopment;
    this.backEndSkills = this. appHelper.backEndSkills;
    this.databases = this.appHelper.databases;
    this.tools = this.appHelper.tools;
  }



}
