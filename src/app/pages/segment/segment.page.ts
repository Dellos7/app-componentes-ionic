import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheroes: Observable<any[]>;
  publisher = '';

  @ViewChild(IonSegment) segment: IonSegment;

  constructor( private dataSvc: DataService ) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superheroes = this.dataSvc.getHeroes();
  }

  segmentChanged(event) {
    const valorSegmento = event.detail.value;
    if ( valorSegmento === 'todos' ) {
      this.publisher = '';
    } else {
      this.publisher = valorSegmento;
    }
  }

}
