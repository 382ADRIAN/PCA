import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
          ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        ),
        name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        ),
        last_name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        )
      }
    )
   } 
   validation_messages = {
     email: [
       { type: "required", message: "El email es obligatio" },
       { type: "pattern", message: "Debe poner un email valido" }
     ]
     
     
 
   }
   validation_messagespassword = {
    password: [
      { type: "required", message: "La contraseña es obligatoria" },
      { type: "pattern", message: "Contraseña no valida" }
    ]
    
    

  }
  validation_messagesname = {
    name: [
      { type: "required", message: "El nombre es obligatorio" },
      { type: "pattern", message: "Nombre no valida" }
    ]
    
    

  }
  validation_messageslast_name = {
    last_name: [
      { type: "required", message: "El apellido es obligatorio" },
      { type: "pattern", message: "Apellido no valida" }
    ]
    
    

  }

  ngOnInit() {
  }
  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
  
  registerUser(userData:any){
    console.log(userData);
    this.authService.registerUser(userData).then(() =>{
      this.navCtrl.navigateBack("/login");
    }   
    )
 
  }
}