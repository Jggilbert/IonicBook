import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.page.html',
  styleUrls: ['./chapter2.page.scss'],
})
export class Chapter2Page implements OnInit {
  public chapter =[
    {
      title: "Chapter 2 | My Ionic Book",
      url: '/chapter2'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
