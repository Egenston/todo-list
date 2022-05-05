import { TestBed } from '@angular/core/testing';

import { LoadTodoService } from './load-todo.service';

describe('LoadTodoService', () => {
  let service: LoadTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
