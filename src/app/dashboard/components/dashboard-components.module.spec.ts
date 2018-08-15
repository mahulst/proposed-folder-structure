import { DashboardComponentsModule } from './dashboard-components.module';

describe('DashboardComponentsModule', () => {
  let componentsModule: DashboardComponentsModule;

  beforeEach(() => {
    componentsModule = new DashboardComponentsModule();
  });

  it('should create an instance', () => {
    expect(componentsModule).toBeTruthy();
  });
});
