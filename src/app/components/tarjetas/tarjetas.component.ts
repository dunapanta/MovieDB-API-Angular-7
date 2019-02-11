import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.css"]
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verPelicula(item: any) {

    let peliculaId;

    peliculaId = item.id;
    /* let artistaId;

    if (item.type === "album") {
      artistaId = item.id;
    } else {
      artistaId = item.albums[0].id;
    } */

    this.router.navigate(["/pelicula", peliculaId]);
  }
}
