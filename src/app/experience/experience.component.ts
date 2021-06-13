import { Component, OnInit } from '@angular/core';
import { UtilsService } from './../services/utils.service';
import { PortfolioHelperService } from '../services/portfolio-helper.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  detailsInfo: any;
  experience: any;
  iconArray:any = {}
  constructor(private utilsservice: UtilsService,
  protected apphelper:PortfolioHelperService) { }

  ngOnInit() {
    var dateDiff = this.utilsservice.dateDiff("2016-07-30");
    this.experience = dateDiff.years + " Years "+ dateDiff.months+ " Month(s) " + dateDiff.days + " Day(s)";
    this.iconArray = this.apphelper.companyTech.fis.iconArray;
    this.detailsInfo = this.apphelper.companyTech.fis.aboutProd;  }

  showSelectedCompany(event:any) {
    switch (+event.target.value) {
        case 0: {
          this.iconArray = this.apphelper.companyTech.fis.iconArray;
          this.detailsInfo = this.apphelper.companyTech.fis.aboutProd;
          break;
        }
        case 1: {
          this.iconArray = this.apphelper.companyTech.zenmonics.iconArray;
          this.detailsInfo = this.apphelper.companyTech.zenmonics.aboutProd;
          break;
        }
        case 2: {
          this.iconArray = this.apphelper.companyTech.wipro.iconArray;
          this.detailsInfo = this.apphelper.companyTech.wipro.aboutProd;
          break;
        }
        case 3: {
          this.iconArray = this.apphelper.companyTech.wiproIntern.iconArray;
          this.detailsInfo = this.apphelper.companyTech.wiproIntern.aboutProd;
          break;
        }
        default: {
          this.iconArray = this.apphelper.companyTech.fis.iconArray;
          this.detailsInfo = this.apphelper.companyTech.fis.aboutProd;
          break;
        }
    }
  }
}
