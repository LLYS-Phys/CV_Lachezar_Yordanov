import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website-cv-angular';
  openedIntroduction = false
  openedWorkExperience = false
  openedEducation = false
  openedSkills = false
  openedAchievements = false
  openedMoreAboutMe = false

  clickIntroduction() {
    this.openedIntroduction = true
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  clickWorkExperience() {
    this.openedIntroduction = false
    this.openedWorkExperience = true
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  clickEducation() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = true
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  clickSkills() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = true
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  clickAchievements() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = true
    this.openedMoreAboutMe = false
  }

  clickMoreAboutMe() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = true
  }

}
