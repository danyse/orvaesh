import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRouterComponent } from './home-router-component';

describe('HomeRouterComponent', () => {
  let component: HomeRouterComponent;
  let fixture: ComponentFixture<HomeRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRouterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeRouterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
