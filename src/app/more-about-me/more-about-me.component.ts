import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-about-me',
  templateUrl: './more-about-me.component.html',
  styleUrls: ['./more-about-me.component.scss']
})
export class MoreAboutMeComponent implements OnInit {

  constructor() { }

  @Input() titleMore = ''

  ngOnInit(): void {
  }

}
