import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string;

  usuario = {
    email: 'al259345@uji.es',
    password: '123'
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('on submit template');
    console.log(this.usuario);
  }

}
