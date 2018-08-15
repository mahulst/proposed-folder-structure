import { AppComponentsModule } from './app-components.module';

describe('AppComponentsModule', () => {
  let componentsModule: AppComponentsModule;

  beforeEach(() => {
    componentsModule = new AppComponentsModule();
  });

  it('should create an instance', () => {
    expect(componentsModule).toBeTruthy();
  });
});
