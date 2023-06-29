import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPeliculaComponent } from './crear-pelicula.component';

describe('CrearPeliculaComponent', () => {
  let component: CrearPeliculaComponent;
  let fixture: ComponentFixture<CrearPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPeliculaComponent]
    });
    fixture = TestBed.createComponent(CrearPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
