import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesCalculadoraComponent } from './botones-calculadora.component';

describe('BotonesCalculadoraComponent', () => {
  let component: BotonesCalculadoraComponent;
  let fixture: ComponentFixture<BotonesCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonesCalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
