import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { EducationComponent } from './education/education.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MoreAboutMeComponent } from './more-about-me/more-about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ContactsComponent } from './more-about-me/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    AchievementsComponent,
    EducationComponent,
    IntroductionComponent,
    MoreAboutMeComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
