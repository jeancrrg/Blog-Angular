import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-subtitle',
    standalone: true,
    imports: [],
    templateUrl: './subtitle.component.html',
    styleUrl: './subtitle.component.scss',
})
export class SubtitleComponent implements OnInit {

    @Input() primeiroSubtitulo: string = "";
    @Input() segundoSubtitulo: string = "";

    constructor() {}

    ngOnInit(): void {}
}
