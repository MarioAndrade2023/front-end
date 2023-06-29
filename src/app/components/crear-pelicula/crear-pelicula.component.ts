import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from '../../models/pelicula';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PeliculaService } from '../../services/pelicula.service';
declare var $: any;

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {
  peliculaForm: FormGroup;
  titulo = 'Crear Película';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _peliculaService: PeliculaService,
    private aRouter: ActivatedRoute
  ) {
    this.peliculaForm = this.fb.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      director: ['', Validators.required],
      anio: ['', Validators.required]
    });

    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  agregarPelicula() {
    const pelicula: Pelicula = {
      nombre: this.peliculaForm.get('nombre')?.value,
      genero: this.peliculaForm.get('genero')?.value,
      director: this.peliculaForm.get('director')?.value,
      anio: this.peliculaForm.get('anio')?.value
    };

    if (this.id !== null) {
      // Editar película
      this._peliculaService.editarPelicula(this.id, pelicula).subscribe(
        data => {
          this.toastr.success(pelicula.nombre, 'Película actualizada exitosamente');
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          this.peliculaForm.reset();
        }
      );
    } else {
      // Agregar película
      this._peliculaService.registrarPelicula(pelicula).subscribe(
        data => {
          this.toastr.success('Película registrada exitosamente');
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Película';
      this._peliculaService.obtenerPelicula(this.id).subscribe(data => {
        this.peliculaForm.setValue({
          nombre: data.nombre,
          genero: data.genero,
          director: data.director,
          anio: data.anio
        });
      });
    }
  }

  ngOnInit(): void {
    this.esEditar();
    $(document).ready(function() {
      $(".card").slideUp();
      $(".card").slideDown(3000);
    });
  }}


