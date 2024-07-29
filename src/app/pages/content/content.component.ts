import { Component, Input, OnInit } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { ButtonComponent } from "../../components/button/button.component";
import { listaConteudos } from '../../data/listaConteudos';

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [
    MenuBarComponent,
    RouterLink,
    MenuTitleComponent,
    FooterComponent,
    BigCardComponent,
    ButtonComponent
],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
})
export class ContentComponent implements OnInit {

    codigo: string | null = '';
    @Input() urlImagem: string = '';
    @Input() titulo: string = '';
    @Input() descricao: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        // Pega o código passado como parâmetro na rota
        this.route.paramMap.subscribe((valor) => {
            this.codigo = valor.get('codigo');
        });

        this.atribuirValores(this.codigo);
    }

    atribuirValores(codigo: string | null): void {
        const conteudoBuscado = listaConteudos.filter((conteudo) => conteudo.codigo == codigo)[0];
        this.urlImagem = conteudoBuscado.urlImagem;
        this.titulo = conteudoBuscado.titulo;
        this.descricao = conteudoBuscado.descricao;
    }

    voltarPagina(): void {
        this.router.navigateByUrl('');
    }
}
