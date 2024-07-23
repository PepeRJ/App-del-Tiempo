import { HttpClient,} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }


  private apiURL_geolocation = 'http://api.openweathermap.org/geo/1.0/direct';
  private apiURL_weather = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = environment.apiKey


  private http = inject(HttpClient)


  getCoordinates(city: string): Observable<any> {
    // Llama a la API de geolocalización para obtener las coordenadas de la ciudad
    return this.http.get(`${this.apiURL_geolocation}?q=${city}&limit=5&appid=${this.apiKey}&lang=es&units=metric`);
  }

  getWeather(lat: number, lon: number): Observable<any> {
    // Llama a la API de OpenWeatherMap para obtener los datos meteorológicos con las coordenadas
    return this.http.get(`${this.apiURL_weather}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=es&units=metric`);
  }
}

