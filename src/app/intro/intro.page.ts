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
      title:"Avril lavgine",
      img: "../../assets/image/evril-removebg-preview.png",
      icon: "arrow-down",
      description: "Es una cantante, compositora, diseñadora de moda y actriz canadiense. Algunos medios de comunicación y críticos se refieren a ella como la princesa del pop punk."
    },
    {
      title:"Green day",
      img: "../../assets/image/green_day-removebg-preview.png",
      icon: "barbell-outline",
      description: "es una banda estadounidense de punk rock integrada por Billie Joe Armstrong (guitarra y voz), Mike Dirnt (bajo y coros) y Tré Cool (batería y coros)"
    },
    {
      title:"Paramore",
      img: "../../assets/image/paramore-removebg-preview.png",
      icon: "barbell-outline",
      description: "Paramore es una banda de rock estadounidense de Franklin, Tennessee , formada en 2004. Actualmente, la banda está formada por la vocalista principal Hayley Williams , "
    }, 
    {
      title:"30 Segund to mars",
      img: "../../assets/image/30segund-removebg-preview.png",
      icon: "barbell-outline",
      description: " es una banda de rock estadounidense de Los Ángeles, California, formada en 1998. La banda está formada por los hermanos Jared Leto (voz principal, guitarra, bajo, teclados) y Shannon Leto (batería, percusión)."
    },
     {
      title:"rihana",
      img: "../../assets/image/rihana-removebg-preview.png",
      icon: "barbell-outline",
      description: "Rihanna, es una cantante, actriz, diseñadora y empresaria barbadense. Es conocida por fusionar algunos géneros caribeños con música pop y por reinventar su imagen a través de los años. "
    }
  ]
  
  
  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  finish(){
    this.storage.set("introShow", true);
    // this.router.navigateByUrl("/home");
    this.router.navigateByUrl("/menu/home")
    console.log("salir")

}
}
