import { Component, OnInit } from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Title, Meta, MetaDefinition} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  //  Variables
  private titulo: string;

  constructor( private router: Router,
               private titlle: Title,
               private meta: Meta) {

    this.getDataRouter()
      .subscribe(data => {
        console.log(data);
        this.titulo = data.titulo;
        this.titlle.setTitle(this.titulo);

        //  Agregando meta datos
        const metaTag: MetaDefinition = {
          content: this.titulo,
          name: 'description'
        };

        this.meta.updateTag(metaTag);
        console.log(metaTag);
      });
  }

  ngOnInit() {
  }

  // Obtener data de la pagina actual en la que estamos
  private getDataRouter(){
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild == null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}
