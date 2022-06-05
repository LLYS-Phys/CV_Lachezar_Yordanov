import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit(): void {
  }

}
