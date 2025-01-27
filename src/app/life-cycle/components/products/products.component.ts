import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})

export class ProductsComponent implements OnInit, OnChanges {

  public isProductVisible: boolean = false;
  public currentPriceOne: number = 0;

  constructor() {
    console.info('Constructor - isProductVisible: ', this.isProductVisible);
  };

  ngOnInit(): void {
    console.info('ngOnInit - isProductVisible: ', this.isProductVisible);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('ngOnChanges - isProductVisible: ', this.isProductVisible, ' Changes: ', changes);
  }

  ngDoCheck(): void {
    console.info('ngDoCheck - isProductVisible: ', this.isProductVisible);
  }
  ngAfterContentInit(): void {
    console.info('ngAfterContentInit - isProductVisible: ', this.isProductVisible);
  }

  ngAfterContentChecked(): void {
    console.info('ngAfterContentChecked - isProductVisible: ', this.isProductVisible);
  }

  ngAfterViewInit(): void {
    console.info('ngAfterViewInit - isProductVisible: ', this.isProductVisible);
  }

  ngAfterViewChecked(): void {
    console.info('ngAfterViewChecked - isProductVisible: ', this.isProductVisible);
  }

  ngOnDestroy(): void {
    console.info('ngOnDestroy - isProductVisible: ', this.isProductVisible);
  }

  increasePrice = (): void => {
    this.currentPriceOne++;
  }
}