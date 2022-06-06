import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  @Input() titleIntro = ''
  @Input() introText = ''
  @Input() helloText = ''
  @Input() navText = ''
  @Input() workExperienceText = ''
  @Input() educationText = ''
  @Input() skillsText = ''
  @Input() achievementsText = ''
  @Input() moreAboutMeText = ''

  @Output()
  workClicked: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  educationClicked: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  skillsClicked: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  achievementsClicked: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  moreClicked: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  contactsClicked: EventEmitter<boolean> = new EventEmitter<boolean>()

  ngOnInit(): void {
  }

  clickWork(){
    this.workClicked.emit(true)
  }

  clickEducation(){
    this.educationClicked.emit(true)
  }

  clickSkills(){
    this.skillsClicked.emit(true)
  }

  clickAchievements(){
    this.achievementsClicked.emit(true)
  }

  clickMore(){
    this.moreClicked.emit(true)
  }

  clickContact(){
    this.contactsClicked.emit(true)
  }

}
