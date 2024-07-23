import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kmh',
  standalone: true
})
export class KmhPipe implements PipeTransform {

  transform(value: number): unknown {
    const kmh = value * 3.6; // Conversión de m/s a km/h
    return Math.round(kmh); // Redondeo al número entero más cercano
  }

}

