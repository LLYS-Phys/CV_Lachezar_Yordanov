import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  constructor() { }

  @Input() titleAchievements = ''
  @Input() shDescription = ''
  @Input() learnMore = ''
  @Input() chDescription = ''
  @Input() awardsTitle = ''
  @Input() shNominationsTitle = ''
  @Input() personalAwards = ''
  @Input() nomination1 = ''
  @Input() nomination2 = ''
  @Input() nomination3 = ''
  @Input() nomination4 = ''
  @Input() nomination5 = ''
  @Input() nomination6 = ''
  @Input() nomination7 = ''
  @Input() award1 = ''
  @Input() award2 = ''

  ngOnInit(): void {
  }

}
