import { Component } from '@angular/core';

@Component({
    selector: 'nome',
    template: `
        <input type="text" id="nome" placeholder="Nome">
        <br>
    `,
     styles: [`
     input{
         border-style: none none solid none;
         padding: 5px;
         margin:5px
     }`]
        
})
export class NomeComponent { }
