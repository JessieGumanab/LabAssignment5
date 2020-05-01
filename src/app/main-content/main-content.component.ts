import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  studentArray: Array<object> = [];
  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Jessie',
        lastName: 'Gumanab',
        course: 'Programming'
      },
      {
        id: 2,
        firstName: 'Raja',
        lastName: 'Gemini',
        course: 'Fashion'
      },
      {
        id: 3,
        firstName: 'Alyssa',
        lastName: 'Edwards',
        course: 'Adv Modern'
      }
    ];
  }

addStudent() {
  this.studentArray.unshift({
    id: 1,
    firstName: 'Jessie',
    lastName: 'Gumanab',
    course: 'Programming'
  });
}

}
