import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardusersComponent } from './cardusers.component';

describe('CardusersComponent', () => {
  let component: CardusersComponent;
  let fixture: ComponentFixture<CardusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
