import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsessionComponent } from './foodsession.component';

describe('FoodsessionComponent', () => {
  let component: FoodsessionComponent;
  let fixture: ComponentFixture<FoodsessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
