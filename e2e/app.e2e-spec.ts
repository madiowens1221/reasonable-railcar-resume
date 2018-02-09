import { ResumeProjectPage } from './app.po';

describe('resume-project App', () => {
  let page: ResumeProjectPage;

  beforeEach(() => {
    page = new ResumeProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
