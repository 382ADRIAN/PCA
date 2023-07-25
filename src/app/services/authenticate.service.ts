import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage, private toastController: ToastController) { }

  async loginUser(credentials: any) {
    return new Promise((resolve, reject) => {
      if (credentials.email === "caballeroadrian18@gmail.com" && credentials.password === "123456789") {
        this.showToast("Login exitoso");
        resolve("Login exitoso");
      } else {
        this.showToast("Verifique sus credenciales");
        reject("Verifique sus credenciales");
      }
    });
  }

  registerUser(userData: any) {
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      
      position: 'bottom' 
    });
    toast.present();
  }
}
