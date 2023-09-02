import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMonedasComponent } from './select-monedas.component';

describe('SelectMonedasComponent', () => {
  let component: SelectMonedasComponent;
  let fixture: ComponentFixture<SelectMonedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMonedasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
