import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingPersonComponent } from './adding-person.component';

describe('AddingPersonComponent', () => {
  let component: AddingPersonComponent;
  let fixture: ComponentFixture<AddingPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
