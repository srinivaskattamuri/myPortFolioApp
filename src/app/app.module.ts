import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { CardIconWrapperComponent } from './card-icon-wrapper/card-icon-wrapper.component';
import { CommonModule } from '@angular/common';
import { CompanyExperienceComponent } from './company-experience/company-experience.component';
import { SocialConnectionsComponent } from './social-connections/social-connections.component';

const appRoutes: Routes = [
  {path:'', component: AboutComponent},
  {path:'education', component: EducationComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'skills', component: SkillsComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'achievements', component: AchievementsComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    GalleryComponent,
    AchievementsComponent,
    ContactComponent,
    CardWrapperComponent,
    CardIconWrapperComponent,
    CompanyExperienceComponent,
    SocialConnectionsComponent  ],
  imports: [
    BrowserModule,
    CommonModule ,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
