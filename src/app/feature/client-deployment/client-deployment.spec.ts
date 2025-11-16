import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDeployment } from './client-deployment';

describe('ClientDeployment', () => {
  let component: ClientDeployment;
  let fixture: ComponentFixture<ClientDeployment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDeployment],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientDeployment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
