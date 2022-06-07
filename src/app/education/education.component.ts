import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  @Input() titleEducation = ''
  @Input() eduEntry1 = ''
  @Input() eduEntry2 = ''
  @Input() eduSpec1 = ''
  @Input() eduSpec2 = ''
  @Input() eduDescription1 = ''
  @Input() eduDescription2 = ''
  @Input() eduEntry4 = ''
  @Input() eduSpec4 = ''
  @Input() eduDescription3 = ''
  @Input() eduDescription4 = ''

  clickedEdu1 = false
  clickedEdu2 = false
  clickedEdu3 = false
  clickedEdu4 = false
  clickEduAny = false
  
  ngOnInit(): void {
  }

  clickEdu1(){
    var popup = document.getElementsByClassName("educationPopUp")[0] as HTMLElement
    popup.style.top = '20%'
    this.clickedEdu1 = true
    this.clickedEdu2 = false
    this.clickedEdu3 = false
    this.clickedEdu4 = false
    this.clickEduAny = true
  }

  clickEdu2(){
    var popup = document.getElementsByClassName("educationPopUp")[0] as HTMLElement
    popup.style.top = '20%'
    this.clickedEdu2 = true
    this.clickedEdu1 = false
    this.clickedEdu3 = false
    this.clickedEdu4 = false
    this.clickEduAny = true
  }

  clickEdu3(){
    var popup = document.getElementsByClassName("educationPopUp")[0] as HTMLElement
    popup.style.top = '20%'
    this.clickedEdu1 = false
    this.clickedEdu2 = false
    this.clickedEdu3 = true
    this.clickedEdu4 = false
    this.clickEduAny = true
  }

  clickEdu4(){
    var popup = document.getElementsByClassName("educationPopUp")[0] as HTMLElement
    popup.style.top = '20%'
    this.clickedEdu2 = false
    this.clickedEdu1 = false
    this.clickedEdu3 = false
    this.clickedEdu4 = true
    this.clickEduAny = true
  }

  closePopUp(){
    var popup = document.getElementsByClassName("educationPopUp")[0] as HTMLElement
    popup.style.top = '-100%'
    this.clickEduAny = false
  }

}
