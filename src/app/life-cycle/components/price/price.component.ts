import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

interface data {
  "name": string,
  "temperature": string,
  "wind": string,
  "humidity": string,
}

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.sass']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  public cities: data[] = [
    {
        "name": "San Jose",
        "temperature": "36º F",
        "wind": "31Kmph",
        "humidity": "66%"
    },
    {
        "name": "Seattle",
        "temperature": "30º F",
        "wind": "4Kmph",
        "humidity": "9%"
    },
    {
        "name": "New York",
        "temperature": "20º F",
        "wind": "8Kmph",
        "humidity": "61%"
    },
    {
        "name": "Chicago",
        "temperature": "27º F",
        "wind": "35Kmph",
        "humidity": "2%"
    },
    {
        "name": "Atlanta",
        "temperature": "22º F",
        "wind": "25Kmph",
        "humidity": "5%"
    },
    {
        "name": "Austin",
        "temperature": "25º F",
        "wind": "1Kmph",
        "humidity": "5%"
    },
    {
        "name": "Denver",
        "temperature": "30º F",
        "wind": "8Kmph",
        "humidity": "48%"
    },
    {
        "name": "New York",
        "temperature": "22",
        "wind": "44kmph",
        "humidity": "61%"
    }
  ];

  public userName: string = 'FAbian';
  public userNameDos: string = '';

  public cityName = "";
  public climateByCity: data = {
    name: '',
    temperature: '',
    wind: '',
    humidity: ''
  };

  @Input() currentPrice: number = 0;

  public interval$?: Subscription;

  constructor() {
    console.info('--> C.Hijo - Constructor - CurrentPrice: ', this.currentPrice);
  };

  findClimateByCity = (cityToFound: string) => {
    const currentData = this.cities.filter(city => city.name.toLowerCase() === cityToFound.toLowerCase());
    console.info('City: ', currentData.length);

    (currentData.length > 0)
      && (this.climateByCity = currentData[0]);

    (currentData[0] == undefined || currentData[0] == null || currentData.length == 0 )
      && (this.climateByCity = {name: '', temperature: '', wind: '', humidity: ''});
  };

  change = (dato: any) => {
    console.info('EVENTO: ', dato);
    this.userNameDos = this.userName;
  };

  ngOnInit(): void {
    console.info('--> C.Hijo - ngOnInit - CurrentPrice: ', this.currentPrice);
    // this.interval$ = interval(1000).subscribe(value => console.info('TICK: ', value));
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.info('--> C.Hijo - ngOnChanges - CurrentPrice: ', this.currentPrice, ' Changes: ', changes);
  };

  ngOnDestroy(): void {
    console.info('--> C.Hijo - ngOnDestroy - CurrentPrice: ', this.currentPrice);
    this.interval$?.unsubscribe();
  };

}
