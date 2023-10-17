import { TestBed } from '@angular/core/testing';

import { BranchCoverageTestService } from './branch-coverage-tet.service';

describe('BranchCoverageTetService', () => {
  let service: BranchCoverageTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchCoverageTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute switch', () => {
    service.withSwitch('ADMIN');
    expect(service).toBeTruthy();
  });

  it('should execute object literal', () => {
    service.withLiteralObject('ADMIN');
    expect(service).toBeTruthy();
  });
});
