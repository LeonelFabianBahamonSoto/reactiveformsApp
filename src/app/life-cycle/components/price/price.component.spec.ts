import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceComponent } from './price.component';
import { CommonModule } from '@angular/common';
import { LifeCycleRoutingModule } from '../../life-cycle-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

describe('PriceComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceComponent],
      imports: [
        CommonModule,
        LifeCycleRoutingModule,
        MaterialModule,
        SharedModule,
        FormsModule,
      ]
    });
    fixture = TestBed.createComponent(PriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The component must exist', () => {
    const fixture = TestBed.createComponent(PriceComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  })

  it('The component must return to valid name', () => {
    const fixture = TestBed.createComponent(PriceComponent);
    const app = fixture.componentInstance
    fixture.detectChanges();

    let userName = app.userName;
    const usernameDos = app.userNameDos;
    userName = "Fabian Bahamon";

    expect(usernameDos).toEqual("Fabian Bahamon");
  })
});
