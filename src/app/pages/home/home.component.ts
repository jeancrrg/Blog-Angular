import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SubtitleComponent } from "../../components/subtitle/subtitle.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        RouterLink,
        MenuTitleComponent,
        BigCardComponent,
        SmallCardComponent,
        MenuBarComponent,
        FooterComponent,
        SubtitleComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
