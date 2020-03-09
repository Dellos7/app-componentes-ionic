import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array: any[], texto: string, columna: string): any[] {
    if ( !texto ) {
      return array;
    }
    texto = texto.toLowerCase();
    return array.filter( item => {
      return item[columna].toLowerCase().includes( texto );
    });
  }

}
