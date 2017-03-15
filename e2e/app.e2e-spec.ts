import { MyGentelellaPage } from './app.po';

describe('my-gentelella App', function() {
  let page: MyGentelellaPage;

  beforeEach(() => {
    page = new MyGentelellaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
