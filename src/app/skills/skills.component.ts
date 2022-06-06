import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  @Input() titleSkills = ''
  @Input() techSkills = ''
  @Input() bgLang = true
  @Input() personalSkills = ''
  @Input() langsTitle = ''
  @Input() langsTableTitle = ''
  @Input() langsLevelTitle = ''
  @Input() langsMoreInformationTitle = ''
  @Input() lang1 = ''
  @Input() lang2 = ''
  @Input() lang3 = ''
  @Input() langNative = ''
  @Input() langInfo1 = ''
  @Input() langInfo2 = ''
  @Input() langInfo3 = ''
  @Input() clientsTitle = ''

  ngOnInit(): void {
  }

}
