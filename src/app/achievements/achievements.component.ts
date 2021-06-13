import { Component, OnInit } from '@angular/core';
import { PortfolioHelperService } from 'src/app/services/portfolio-helper.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  achivementInfo:any = {};
  constructor(
    protected appHelper:PortfolioHelperService
  ) { }

  ngOnInit(): void {
    this.achivementInfo = this.appHelper.achievments;
  }

}
