import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPartComponent } from './overview-part.component';

describe('OverviewPartComponent', () => {
  let component: OverviewPartComponent;
  let fixture: ComponentFixture<OverviewPartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewPartComponent]
    });
    fixture = TestBed.createComponent(OverviewPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
