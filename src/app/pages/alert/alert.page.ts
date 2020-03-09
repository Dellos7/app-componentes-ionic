import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo = 'action sheet page';

  constructor( private alertCtrl: AlertController ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async pedirNombre() {
    const alert = await this.alertCtrl.create({
      header: 'Introduce tu nombre:',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm cancel');
          }
        },
        {
          text: 'Ok',
          role: 'ok',
          handler: (data) => {
            console.log(`Tu nombre es: ${data.nombre}`);
            this.titulo = data.nombre;
          }
        }
      ]
    });

    await alert.present();
  }

}
