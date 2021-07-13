import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  template: `
  <input type="email" id="email" placeholder="E-mail">
  <br>
  `,
  styles: [`
  input{
    border-style: none none solid none;
    padding: 5px;
    margin:5px
  }`]
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
