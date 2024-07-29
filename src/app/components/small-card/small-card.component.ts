import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-small-card',
    standalone: true,
    imports: [],
    templateUrl: './small-card.component.html',
    styleUrl: './small-card.component.scss',
})
export class SmallCardComponent implements OnInit {

    @Input() caminhoImagem: string = "";
    @Input() titulo: string = "";
    @Input() descricao: string = "";

    constructor() {}

    ngOnInit(): void {}

}
