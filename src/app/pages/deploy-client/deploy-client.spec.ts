import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployClient } from './deploy-client';

describe('DeployClient', () => {
  let component: DeployClient;
  let fixture: ComponentFixture<DeployClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeployClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeployClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
