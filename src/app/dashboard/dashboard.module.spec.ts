import { DashboardModule } from './dashboard.module';

describe('DashboardModule', () => {
  let dashboardComponentModule: DashboardModule;

  beforeEach(() => {
    dashboardComponentModule = new DashboardModule();
  });

  it('should create an instance', () => {
    expect(dashboardComponentModule).toBeTruthy();
  });
});
