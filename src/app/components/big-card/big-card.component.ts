import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-big-card',
    standalone: true,
    imports: [],
    templateUrl: './big-card.component.html',
    styleUrl: './big-card.component.scss',
})
export class BigCardComponent implements OnInit {

    @Input() caminhoImagem: string = "";
    @Input() titulo: string = "";
    @Input() descricao: string = "";

    constructor() {}

    ngOnInit(): void {}

}
