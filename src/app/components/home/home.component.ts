import { Component, OnInit , inject} from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { AsyncPipe, JsonPipe, NgClass, NgFor, NgIf, NgStyle, } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { City } from '../../interfaces/city';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { ListCitiesComponent } from '../list-cities/list-cities.component';
import { WeatherComponent } from '../weather/weather.component';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe, FormsModule, NgFor, NgIf, NgStyle, AsyncPipe, MatCardModule, MatListModule, MatInputModule, MatButtonModule, ListCitiesComponent, WeatherComponent, MatIcon,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

  
})
  
export class HomeComponent  {

city: string = ''
citiesList$!: Observable<City[]>;
showCityList: boolean = true;
selectedCity!: City;
weatherData$!: Observable<any>;



  private weatherService = inject(WeatherService)

  searchCity(): void {
    this.citiesList$ = this.weatherService.getCoordinates(this.city);
    this.showCityList = true
    
  }


  selectCity(city: City): void {
    this.selectedCity = city;
    this.weatherData$ = this.weatherService.getWeather(city.lat, city.lon);
   this.showCityList=false
  }
}