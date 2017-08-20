import { PluggingAwayPage } from './app.po';

describe('plugging-away App', () => {
  let page: PluggingAwayPage;

  beforeEach(() => {
    page = new PluggingAwayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
