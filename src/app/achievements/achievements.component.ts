import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  constructor() { }

  @Input() titleAchievements = ''

  ngOnInit(): void {
  }

}
