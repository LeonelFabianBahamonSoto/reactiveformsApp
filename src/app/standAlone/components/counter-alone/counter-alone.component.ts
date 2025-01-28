import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../shared/shared.module";
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-counter-alone',
  standalone: true,
  imports: [CommonModule, SharedModule, MaterialModule],
  templateUrl: './counter-alone.component.html',
  styleUrls: ['./counter-alone.component.sass']
})
export class CounterAloneComponent {
  public count: number = 0;

  increment = (): void =>{
    this.count += 1;
  }

  decrement = (): void =>{
    if( this.count === 0 ) return;

    this.count -= 1;
  }
}
