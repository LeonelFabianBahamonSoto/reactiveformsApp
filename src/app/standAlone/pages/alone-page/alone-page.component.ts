import { Component } from '@angular/core';

import { SharedModule } from "../../../shared/shared.module";

import { CounterAloneComponent } from "../../components/counter-alone/counter-alone.component";

@Component({
  // selector: 'app-alone-page',
  standalone: true,
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.sass'],
  imports: [SharedModule, CounterAloneComponent]
})
export class AlonePageComponent {

}
