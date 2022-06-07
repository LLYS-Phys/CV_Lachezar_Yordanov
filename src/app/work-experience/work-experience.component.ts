import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  @Input() titleWork = ''
  @Input() jobTitle1 = ''
  @Input() jobTitle2 = ''
  @Input() jobTitle3 = ''
  @Input() jobTitle4 = ''
  @Input() jobTitle5 = ''
  @Input() jobTitle6 = ''
  @Input() jobDescription1 = ''
  @Input() jobDescription2 = ''
  @Input() jobDescription3 = ''
  @Input() jobDescription4 = ''
  @Input() jobDescription5 = ''
  @Input() jobDescription6 = ''

  clickedJob1 = false
  clickedJob2 = false
  clickedJob3 = false
  clickedJob4 = false
  clickedJob5 = false
  clickedJob6 = false
  clickJobAny = false

  ngOnInit(): void {
  }

  clickJob1(){
    var popup = document.getElementsByClassName("workDescriptionPopUp")[0] as HTMLElement
    popup.style.top = '20%'
    this.clickedJob1 = true
    this.clickedJob2 = false
    this.clickedJob3 = false
    this.clickedJob4 = false
    this.clickedJob5 = false
    this.clickedJob6 = false
    this.clickJobAny = true
  }

  clickJob2(){
    var popup = document.getElementsByClassName("workDescriptionPopUp")[0] as HTMLElement
    popup.style.top = '20%'
    this.clickedJob2 = true
    this.clickedJob1 = false
    this.clickedJob3 = false
    this.clickedJob4 = false
    this.clickedJob5 = false
    this.clickedJob6 = false
    this.clickJobAny = true
  }

  clickJob3(){
    var popup = document.getElementsByClassName("workDescriptionPopUp")[0] as HTMLElement
    popup.style.top = '20%'
    this.clickedJob3 = true
    this.clickedJob1 = false
    this.clickedJob2 = false
    this.clickedJob4 = false
    this.clickedJob5 = false
    this.clickedJob6 = false
    this.clickJobAny = true
  }

  clickJob4(){
    var popup = document.getElementsByClassName("workDescriptionPopUp")[0] as HTMLElement
    popup.style.top = '20%'
    this.clickedJob4 = true
    this.clickedJob1 = false
    this.clickedJob2 = false
    this.clickedJob3 = false
    this.clickedJob5 = false
    this.clickedJob6 = false
    this.clickJobAny = true
  }

  clickJob5(){
    var popup = document.getElementsByClassName("workDescriptionPopUp")[0] as HTMLElement
    popup.style.top = '20%'
    this.clickedJob5 = true
    this.clickedJob1 = false
    this.clickedJob2 = false
    this.clickedJob3 = false
    this.clickedJob4 = false
    this.clickedJob6 = false
    this.clickJobAny = true
  }

  clickJob6(){
    var popup = document.getElementsByClassName("workDescriptionPopUp")[0] as HTMLElement
    popup.style.top = '20%'
    this.clickedJob6 = true
    this.clickedJob1 = false
    this.clickedJob2 = false
    this.clickedJob3 = false
    this.clickedJob4 = false
    this.clickedJob5 = false
    this.clickJobAny = true
  }

  closePopUp(){
    var popup = document.getElementsByClassName("workDescriptionPopUp")[0] as HTMLElement
    popup.style.top = '-100%'
    this.clickJobAny = false
  }

}
