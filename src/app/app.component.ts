import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website-cv-angular';
  openedIntroduction = true
  openedWorkExperience = false
  openedEducation = false
  openedSkills = false
  openedAchievements = false
  openedMoreAboutMe = false
  bgLang = true
  introductionText = 'Представяне'
  workExperienceText = 'Трудов опит'
  educationText = 'Образование'
  skillsText = 'Умения'
  achievementsText = 'Постижения'
  moreAboutMeText = 'Още за мен'

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

  setLangEn() {
    this.bgLang = false
    this.introductionText = 'Introduction'
    this.workExperienceText = 'Work Experience'
    this.educationText = 'Education'
    this.skillsText = 'Skills'
    this.achievementsText = 'Achievements'
    this.moreAboutMeText = 'More About Me'
  }

  setLangBg() {
    this.bgLang = true
    this.introductionText = 'Представяне'
    this.workExperienceText = 'Трудов опит'
    this.educationText = 'Образование'
    this.skillsText = 'Умения'
    this.achievementsText = 'Постижения'
    this.moreAboutMeText = 'Още за мен'
  }

}
