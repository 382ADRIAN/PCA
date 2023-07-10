import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title:"Perro",
      img: "assets/image/perro.webp",
      icon: "beer-outline",
      description: "Hola soy la explicación del slide"
    },
    {
      title:"Gato",
      img: "assets/image/gato.webp",
      icon: "barbell-outline",
      description: "Hola soy la explicación del slide"
    }
  ]
  
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  finish(){
    this.router.navigateByUrl("/home");
    console.log("salir")

}
}
