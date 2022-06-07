import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-about-me',
  templateUrl: './more-about-me.component.html',
  styleUrls: ['./more-about-me.component.scss']
})
export class MoreAboutMeComponent implements OnInit {

  constructor() { }

  @Input() titleMore = ''
  @Input() titleHobbies = ''
  @Input() pitchText = ''
  @Input() city = ''

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
    {
      image: '../../assets/guitars-full-size.jpg',
      thumbImage: '../../assets/guitars-small.jpg'
    }, {
      image: '../../assets/f1-full-size.jpg',
      thumbImage: '../../assets/f1-small.jpg'
    }, 
    {
      image: '../../assets/chess-full-size.jpeg',
      thumbImage: '../../assets/chess-small.jpg'
    }, {
      image: '../../assets/hiking-full-size.jpg',
      thumbImage: '../../assets/hiking-small.jpg'
    },
    {
      image: '../../assets/composing-full-size.jpg',
      thumbImage: '../../assets/composing-small.jpg'
    }, {
      image: '../../assets/driving-full-size.jpg',
      thumbImage: '../../assets/driving-small.jpg'
    },
    {
      image: '../../assets/reading-full-size.jpg',
      thumbImage: '../../assets/reading-small.jpg'
    }, {
      image: '../../assets/biking-full-size.jpg',
      thumbImage: '../../assets/biking-small.jpg'
    },
    {
      image: '../../assets/heroes-full-size.jpg',
      thumbImage: '../../assets/heroes-small.jpg'
    }
];

}
