import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIconWrapperComponent } from './card-icon-wrapper.component';

describe('CardIconWrapperComponent', () => {
  let component: CardIconWrapperComponent;
  let fixture: ComponentFixture<CardIconWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIconWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIconWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
