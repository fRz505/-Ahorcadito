import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  vidas: number = 3;
  palabra: string = 'Bicicleta';
  palabraArray: string[] = [];
  letraSeleccionada: string = '';
  constructor() { }

  ngOnInit() {
    this.palabraArray = this.palabra.split('');
    console.log(this.palabraArray);
    
  }

  traerLetra(letra: string) {
    console.log("clickeaste la " + letra);
    this.letraSeleccionada = letra;
  }
  ahorcado() {
    var contador = 0;
    for (let i = 0; i<this.palabra.length; i++){ 
        if (this.palabra[i] === this.letraSeleccionada) {
            console.log(i);
            contador++;
        }
        if (contador === 0) {
          this.vidas --;       
        }
    }
    
}

}
//
