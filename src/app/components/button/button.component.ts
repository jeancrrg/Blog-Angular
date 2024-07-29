import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {

    @Input() nomeIcone: string = "";
    @Input() descricao: string = "";
    @Output() click = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    onClick(): void {
        this.click.emit();
    }

}
