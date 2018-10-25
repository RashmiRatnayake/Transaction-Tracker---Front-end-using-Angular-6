import { MyinfoModule } from './myinfo.module';

describe('MyinfoModule', () => {
  let myinfoModule: MyinfoModule;

  beforeEach(() => {
    myinfoModule = new MyinfoModule();
  });

  it('should create an instance', () => {
    expect(myinfoModule).toBeTruthy();
  });
});
