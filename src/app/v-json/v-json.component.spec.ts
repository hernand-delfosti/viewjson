import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VJsonComponent } from './v-json.component';

describe('VJsonComponent', () => {
  let component: VJsonComponent;
  let fixture: ComponentFixture<VJsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VJsonComponent]
    });
    fixture = TestBed.createComponent(VJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
