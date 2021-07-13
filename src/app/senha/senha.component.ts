import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senha',
  template: `
  <input type="password" id="senha" placeholder="Senha">
  <br>
`,
styles: [`
input{
   border-style: none none solid none;
   padding: 5px;
   margin:5px
}`]
})
export class SenhaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
