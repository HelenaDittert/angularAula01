import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anos',
  template: `
        <input type="number" id="idade" placeholder="Idade" min="18">
        <br>
    `,
     styles: [`
     input{
         border-style: none none solid none;
         padding: 5px;
         margin:5px;
    
         
     }`]
})
export class AnosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
