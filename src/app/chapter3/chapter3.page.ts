import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter3',
  templateUrl: './chapter3.page.html',
  styleUrls: ['./chapter3.page.scss'],
})
export class Chapter3Page implements OnInit {
  public chapter =[
    {
      title: "Chapter 3 | My Ionic Book",
      url: '/chapter3'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
