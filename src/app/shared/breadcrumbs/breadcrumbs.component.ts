import { Component, OnInit } from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  //  Variables
  private titulo: string;
  constructor(private router: Router) {
    this.getDataRouter()
      .subscribe(data => {
        console.log(data);
        this.titulo = data.titulo;
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
