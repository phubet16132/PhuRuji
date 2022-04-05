import { TestBed } from '@angular/core/testing';

import { ProgressResolver } from './progress.resolver';

describe('ProgressResolver', () => {
  let resolver: ProgressResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProgressResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
