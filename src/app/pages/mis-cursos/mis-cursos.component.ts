import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {
  // Puedes agregar los datos de los cursos aquí
  cursos = [
    { id: 1, nombre: 'Curso 1', descripcion: 'Descripción del curso 1' },
    { id: 2, nombre: 'Curso 2', descripcion: 'Descripción del curso 2' },
    { id: 3, nombre: 'Curso 3', descripcion: 'Descripción del curso 3' }
  ];

  constructor() { }

  ngOnInit(): void {}
}
