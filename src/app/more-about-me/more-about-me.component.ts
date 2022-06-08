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
      image: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/guitars-full-size.jpg',
      thumbImage: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/guitars-small.jpg'
    }, {
      image: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/f1-full-size.jpg',
      thumbImage: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/f1-small.jpg'
    }, 
    {
      image: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/chess-full-size.jpeg',
      thumbImage: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/chess-small.jpg'
    }, {
      image: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/hiking-full-size.jpg',
      thumbImage: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/hiking-small.jpg'
    },
    {
      image: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/composing-full-size.jpg',
      thumbImage: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/composing-small.jpg'
    }, {
      image: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/driving-full-size.jpg',
      thumbImage: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/driving-small.jpg'
    },
    {
      image: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/reading-full-size.jpg',
      thumbImage: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/reading-small.jpg'
    }, {
      image: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/biking-full-size.jpg',
      thumbImage: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/biking-small.jpg'
    },
    {
      image: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/heroes-full-size.jpg',
      thumbImage: 'https://llys-phys.github.io/CV_Lachezar_Yordanov/assets/heroes-small.jpg'
    }
];

}
