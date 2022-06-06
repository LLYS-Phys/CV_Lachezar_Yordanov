import { Component } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';

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
  name = 'Лъчезар Йорданов'
  titleIntro = "Представяне"
  introText=`Казвам се Лъчезар Йорданов.
  
На 25 години съм и съм сравнително нов в програмирането, но се уча бързо.
  
Бих го оценил, ако разгледате моя Уебсайт-CV.
  
Ако сте получили този уебсайт, значи смятам компанията ви за страхотна.
  
Бих се радвал да имаме възможността да работим заедно.`
  helloText='Здравейте!'
  navText='И така, ако обичате, разгледайте моя Уебсайт-CV.'

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
    this.name = "Lachezar Yordanov"
    this.titleIntro = "Introduction"
    this.introText=`My name is Lachezar Yordanov.

I am 25 years old and fairly new to programming, but I am a really quick learner.

I would appreciate it if you take a look at my Website-CV.

If you have received that website, I consider your company to be awesome.

I would be glad to join your company.`
    this.helloText='Hello!'
    this.navText='So, if you will, take the trip and check out my Website-CV.'
  }

  setLangBg() {
    this.bgLang = true
    this.introductionText = 'Представяне'
    this.workExperienceText = 'Трудов опит'
    this.educationText = 'Образование'
    this.skillsText = 'Умения'
    this.achievementsText = 'Постижения'
    this.moreAboutMeText = 'Още за мен'
    this.name = 'Лъчезар Йорданов'
    this.titleIntro = "Представяне"
    this.introText=`Казвам се Лъчезар Йорданов.
  
На 25 години съм и съм сравнително нов в програмирането, но се уча бързо.
      
Бих го оценил, ако разгледате моя Уебсайт-CV.
      
Ако сте получили този уебсайт, значи смятам компанията ви за страхотна.
      
Бих се радвал да имаме възможността да работим заедно.`
    this.helloText="Здравейте!"
    this.navText="И така, ако обичате, разгледайте моя Уебсайт-CV."
  }

  introWork(){
    this.openedIntroduction = false
    this.openedWorkExperience = true
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  introEducation(){
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = true
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  introSkills(){
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = true
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  introAchievements() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = true
    this.openedMoreAboutMe = false
  }

  introMore() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = true
  }

}
