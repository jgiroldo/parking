import { UdiParkingPage } from './app.po';

describe('udi-parking App', () => {
  let page: UdiParkingPage;

  beforeEach(() => {
    page = new UdiParkingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
