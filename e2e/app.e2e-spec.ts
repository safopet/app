import { TohCliPage } from './app.po';

describe('toh-cli App', () => {
  let page: TohCliPage;

  beforeEach(() => {
    page = new TohCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
