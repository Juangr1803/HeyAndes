import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBannersComponent } from './business-banners.component';

describe('BusinessBannersComponent', () => {
  let component: BusinessBannersComponent;
  let fixture: ComponentFixture<BusinessBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessBannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
