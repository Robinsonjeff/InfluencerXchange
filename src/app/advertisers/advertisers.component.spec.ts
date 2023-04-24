import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisersComponent } from './advertisers.component';

describe('AdvertisersComponent', () => {
  let component: AdvertisersComponent;
  let fixture: ComponentFixture<AdvertisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
