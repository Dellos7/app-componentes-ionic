import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('Cargando siguientes...');

    setTimeout( () => {
      if ( this.data.length > 50 ) {
        this.infiniteScroll.disabled = true;
        event.target.complete();
        return;
      }
      this.data.push( ...Array(20) );
      event.target.complete(); // Finalizar el infinite-scroll
    }, 1000 );
  }

}
