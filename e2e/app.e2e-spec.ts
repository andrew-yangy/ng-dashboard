import { NgDashboardPage } from './app.po';

describe('ng-dashboard App', () => {
  let page: NgDashboardPage;

  beforeEach(() => {
    page = new NgDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
