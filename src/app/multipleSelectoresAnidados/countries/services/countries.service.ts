import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';
import { environments } from 'src/environments/environment.prod';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {
  private baseRegionUrl = environments.regionBaseUrl;
  private _regions: Region[] = [ Region.Americas, Region.Asia, Region.Europe, Region.Oceania, Region.Africa ];

  constructor( private http: HttpClient ) { }

  get regions(): Region[] {
    return [...this._regions];
  };

  getCountriesByRegion = ( region: Region ): Observable<SmallCountry[]> => {
    if(!region) return of([]);

    return this.http.get<Country[]>(`${ this.baseRegionUrl }/region/${ region }?field=cca3,name,borders`)
      .pipe(
        map( countries => countries.map( country => ({
          name: country.name?.common ?? 'No indica',
          cca3: country.cca3 ?? 'No indica',
          borders: country.borders ?? [],
        }))),
        catchError( error => {
          console.error('Error to get countries by region request: ', error);
          return of([]);
        })
        // tap( response => console.info( 'regionsResponse: ', response )),
      )
  };
}
