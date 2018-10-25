import { SidenavigationModule } from './sidenavigation.module';

describe('SidenavigationModule', () => {
  let sidenavigationModule: SidenavigationModule;

  beforeEach(() => {
    sidenavigationModule = new SidenavigationModule();
  });

  it('should create an instance', () => {
    expect(sidenavigationModule).toBeTruthy();
  });
});
