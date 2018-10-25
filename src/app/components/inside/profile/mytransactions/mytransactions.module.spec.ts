import { MytransactionsModule } from './mytransactions.module';

describe('MytransactionsModule', () => {
  let mytransactionsModule: MytransactionsModule;

  beforeEach(() => {
    mytransactionsModule = new MytransactionsModule();
  });

  it('should create an instance', () => {
    expect(mytransactionsModule).toBeTruthy();
  });
});
