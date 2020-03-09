import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      color: 'primary',
      selected: false
    },
    {
      color: 'secondary',
      selected: true
    },
    {
      color: 'tertiary',
      selected: false
    },
    {
      color: 'success',
      selected: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(check) {
    console.log(check);
  }

}
