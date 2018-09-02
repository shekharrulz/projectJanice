import { TestBed, inject } from '@angular/core/testing';

import { WebsocketRunnerService } from './websocket-runner.service';

describe('WebsocketRunnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketRunnerService]
    });
  });

  it('should be created', inject([WebsocketRunnerService], (service: WebsocketRunnerService) => {
    expect(service).toBeTruthy();
  }));
});
