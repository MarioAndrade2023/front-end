import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../models/pelicula';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit {
  listarPeliculas: Pelicula[] = [];

  constructor(private _peliculaService: PeliculaService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerPeliculas();
    $(document).ready(function() {
      $(".card").slideUp(500).slideDown(3000);
    });
  }

  obtenerPeliculas() {
    this._peliculaService.getPeliculas().subscribe(
      data => {
        this.listarPeliculas = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  eliminarPelicula(id: any) {
    this._peliculaService.eliminarPelicula(id).subscribe(
      data => {
        this.toastr.error('Película eliminada con éxito', id);
        this.obtenerPeliculas();
      },
      error => {
        console.log(error);
      }
    );
  }
}
