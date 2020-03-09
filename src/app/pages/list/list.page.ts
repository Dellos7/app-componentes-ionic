import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  users: Observable<any>;

  constructor( public dataSvc: DataService, public toastCtrl: ToastController ) { }

  ngOnInit() {
    this.users = this.dataSvc.getUsers();
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }

  favorite(user) {
    this.presentToast('Se guardó en favoritos');
    this.lista.closeSlidingItems();
  }

  share(user) {
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }

  borrar(user) {
    this.presentToast('Borrado');
    this.lista.closeSlidingItems();
  }

}
