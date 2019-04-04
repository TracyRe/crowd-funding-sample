import { GimmePage } from './app.po';

describe('gimme App', () => {
  let page: GimmePage;

  beforeEach(() => {
    page = new GimmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
