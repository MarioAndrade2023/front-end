export class Pelicula{
    _id?: number;
    nombre: string;
    genero: string;
    director: string;
    anio: number;

    constructor(nombre: string, genero:string, director:string, anio:number){
        this.nombre=nombre;
        this.genero=genero;
        this.director=director;
        this.anio=anio;
    }
}
