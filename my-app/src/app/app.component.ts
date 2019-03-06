import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  nombre = 'Luis';

  // Usando una funcion
  getNombre(){
    return this.nombre;
  }

}
