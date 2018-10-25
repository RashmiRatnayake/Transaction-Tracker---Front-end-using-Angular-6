import { MycircleModule } from './mycircle.module';

describe('MycircleModule', () => {
  let mycircleModule: MycircleModule;

  beforeEach(() => {
    mycircleModule = new MycircleModule();
  });

  it('should create an instance', () => {
    expect(mycircleModule).toBeTruthy();
  });
});
