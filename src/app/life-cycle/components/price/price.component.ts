import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.sass']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input() currentPrice: number = 0;

  public interval$?: Subscription;

  constructor() {
    console.info('--> C.Hijo - Constructor - CurrentPrice: ', this.currentPrice);
  };

  ngOnInit(): void {
    console.info('--> C.Hijo - ngOnInit - CurrentPrice: ', this.currentPrice);
    this.interval$ = interval(1000).subscribe(value => console.info('TICK: ', value));
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.info('--> C.Hijo - ngOnChanges - CurrentPrice: ', this.currentPrice, ' Changes: ', changes);
  };

  ngOnDestroy(): void {
    console.info('--> C.Hijo - ngOnDestroy - CurrentPrice: ', this.currentPrice);
    this.interval$?.unsubscribe();
  };

}
