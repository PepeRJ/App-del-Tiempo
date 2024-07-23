import { Component, Input, OnChanges, inject, SimpleChanges} from '@angular/core';
import { City } from '../../interfaces/city';
import { Observable, of } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import {MatCardModule} from '@angular/material/card';
import { AsyncPipe, JsonPipe, NgIf, CommonModule, NgStyle } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { KmhPipe } from '../../pipes/kmh.pipe';



@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [MatCardModule, AsyncPipe,NgIf, JsonPipe, CommonModule, MatIconModule, NgStyle, KmhPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnChanges{

  @Input() selectedCity!: City;
  weatherData$!: Observable<any>;
  currentDate: Date = new Date();

  private weatherService = inject(WeatherService)

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCity'] && this.selectedCity) {
      this.weatherData$= this.weatherService.getWeather(this.selectedCity.lat, this.selectedCity.lon);
    }
  }
}


