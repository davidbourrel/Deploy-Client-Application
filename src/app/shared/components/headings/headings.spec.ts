import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headings } from './headings';

describe('Headings', () => {
  let component: Headings;
  let fixture: ComponentFixture<Headings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headings],
    }).compileComponents();

    fixture = TestBed.createComponent(Headings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
