import { Component, OnInit } from "@angular/core";
import { MoviedbService } from "../../services/moviedb.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  peliculas: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) {}

  buscar(termino: string) {
    console.log(termino);

    this.loading = true;
    this.moviedb.getBusquedaPeliculas(termino).subscribe((data: any) => {
      console.log(data);

      this.peliculas = data;
      this.loading = false;
    });
  }
}
