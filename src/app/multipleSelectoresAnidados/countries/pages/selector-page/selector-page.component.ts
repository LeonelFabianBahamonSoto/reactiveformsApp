import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CountriesService } from '../../services/countries.service';

import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { catchError, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.sass']
})

export class SelectorPageComponent implements OnInit {

  public countriesByRegion: SmallCountry[] = [];

  public myForm: FormGroup = this.fb.group({
    region:  ['', [ Validators.required ]],
    country: ['', [ Validators.required ]],
    borders: ['', [ Validators.required ]],
  });

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {};

  ngOnInit(): void {
    const countries = ['Mexico', 'United States', 'Canada', 'Brazil'];
    this.myForm.get('country')?.setValue(countries);

    this.onRegionChange();
  };

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  get dynamicClasses(): { [key: string]: boolean } {
    return {
      'sm:col-span-1 md:col-span-1 lg:col-span-1': this.countriesByRegion.length > 0,
      'sm:col-span-1 md:col-span-2 lg:col-span-3': this.countriesByRegion.length === 0
    };
  }

  onRegionChange = (): void => {
    this.myForm.get('region')!.valueChanges
      .pipe(
        tap(() => {
          this.myForm.get('country')?.setValue('');
          this.countriesByRegion = [];
        }),
        switchMap( region =>
          this.countriesService.getCountriesByRegion(region).pipe(
            catchError( err => {
              console.error('No fue posible consultar los paises');
              return of([]);
            })
          )
        )
      ).subscribe( regionsResponse => {
        if( regionsResponse.length > 1 ){
          this.countriesByRegion = regionsResponse;
        }
      });

    //VERSION MEJORADA QUE LA DE ABAJO
    // .subscribe(( region ) => {
      //   this.countriesService.getCountriesByRegion( region )
      //     .subscribe( regionsResponse => {
      //       console.info( '---> regionsResponse: ', regionsResponse );
      //       this.myForm.get('country')?.setValue( regionsResponse );
      //     });
      // });
  };

}
