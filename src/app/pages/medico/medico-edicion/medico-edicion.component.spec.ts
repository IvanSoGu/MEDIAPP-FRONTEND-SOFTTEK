import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoEdicionComponent } from './medico-edicion.component';

describe('MedicoEdicionComponent', () => {
  let component: MedicoEdicionComponent;
  let fixture: ComponentFixture<MedicoEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoEdicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
