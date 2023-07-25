import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { IonAccordion, IonIcon, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})

export class LoginPage implements OnInit {
  showPassword = false;
  passwordType: string = 'password';
  passwordShown: boolean = false;

  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatio" },
      { type: "pattern", message: "Debe poner un email valido" }
    ]



  }
  validation_messagespassword = {
    password: [
      { type: "required", message:  "La contraseña es obligatoria" },
      { type: "pattern", message:  "Contraseña no valida" },
      { type: 'invalid', message: 'La contraseña no es válida.' },

    ]
  }


  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage


  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required,],
    });
    this.loginForm = this.formBuilder.group(
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
              Validators.minLength(6),

              
            ]
          )
        )
      }
    )
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  public togglepassword(): void {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password'
    } else {
      this.passwordShown = true;
      this.passwordType = 'text'
    }

  }


  ngOnInit() {
  }

  loginUser(credentials: any) {
    console.log(credentials);
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("/menu/home");

    }).catch(err => {

      this.errorMessage = err;
      console.log(this.errorMessage);
    })
      .catch((err) => {
        this.errorMessage = 'Contraseña incorrecta';
        console.log(this.errorMessage);
      });
  }

  goToRegister() {
    this.navCtrl.navigateForward("/register")
  }

}