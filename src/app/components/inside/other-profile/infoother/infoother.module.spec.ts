import { InfootherModule } from './infoother.module';

describe('InfootherModule', () => {
  let infootherModule: InfootherModule;

  beforeEach(() => {
    infootherModule = new InfootherModule();
  });

  it('should create an instance', () => {
    expect(infootherModule).toBeTruthy();
  });
});
