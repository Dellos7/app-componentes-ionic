import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverPage } from './popover.page';
import { ComponentsModule } from '../../components/components.module';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  }
];

@NgModule({
  // Este componente es necesario declararlo como entryComponent puesto que se crea
  // de forma dinámica al llamar al método .create() del popover. No ocurre lo mismo
  // con componentes que se crean al cargar la página, como podría ocurrir con el HeaderComponent
  entryComponents: [
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
