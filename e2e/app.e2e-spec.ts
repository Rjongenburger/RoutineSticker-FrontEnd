import { RoutineStickerPage } from './app.po';

describe('routine-sticker App', () => {
  let page: RoutineStickerPage;

  beforeEach(() => {
    page = new RoutineStickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
