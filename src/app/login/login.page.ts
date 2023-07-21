import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 passwordType:string='password';
 passwordShown:boolean=false;
 
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatio" },
      { type: "pattern", message: "Debe poner un email valido" }
    ]
  }
  errorMessage: String = '';
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage:Storage,


    ) {
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
              Validators.minLength(6)
            ]
          )
        )
      }
    )
  }
  public togglepassword(){
    if(this.passwordShown){
      this.passwordShown=false;
      this.passwordType='password'
    }else{
      this.passwordShown=true;
      this.passwordType='text'
    }

  }


  ngOnInit() {
  }
  loginUser(credentials: any) {
    console.log(credentials);
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn",true);
      this.navCtrl.navigateForward("/menu/home");
    }).catch(err => {
      this.errorMessage = err;
      console.log(this.errorMessage);
    })

  }goToregister(){
  this.navCtrl.navigateForward("/register")
}
}