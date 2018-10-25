import { MypostsModule } from './myposts.module';

describe('MypostsModule', () => {
  let mypostsModule: MypostsModule;

  beforeEach(() => {
    mypostsModule = new MypostsModule();
  });

  it('should create an instance', () => {
    expect(mypostsModule).toBeTruthy();
  });
});
