import { Component, Input, Output, inject } from '@angular/core';
import { City } from '../../interfaces/city';
import { WeatherService } from '../../services/weather.service';
import { Observable } from 'rxjs';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { WeatherComponent } from '../weather/weather.component';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-list-cities',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, MatListModule, WeatherComponent],
  templateUrl: './list-cities.component.html',
  styleUrl: './list-cities.component.scss'
})
export class ListCitiesComponent {

  @Input() citiesList$!: Observable<City[]>;
  @Output() selectCityEvent = new EventEmitter<City>();
 

 }
 

