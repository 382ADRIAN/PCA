import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';
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
      description: "esta raza de perro son demasiado activo,cariñoso y muy obediente etc"
    },
    {
      title:"Gato",
      img: "assets/image/gato.webp",
      icon: "barbell-outline",
      description: "esta raza de gato son muy casadores"
    },
    {
      title:"buho",
      img: "assets/image/buho.jpg",
      icon: "barbell-outline",
      description: "esta ave es nocturna, buena casadoras"
    }, 
    {
      title:"elefante",
      img: "assets/image/elefante.jpg",
      icon: "barbell-outline",
      description: "este tipo de animales son super protectores con la crias"
    },
     {
      title:"tigre",
      img: "assets/image/tigre.avif",
      icon: "barbell-outline",
      description: "esta raza de gaton son muy casadores"
    }
  ]
  
  
  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  finish(){
    this.storage.set("introShow", true);
    this.router.navigateByUrl("/home");


}
}
