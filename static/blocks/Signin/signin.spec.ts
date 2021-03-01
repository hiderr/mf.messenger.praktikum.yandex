global.Handlebars = require('../../../node_modules/handlebars/dist/handlebars');
const { SigninPage } = require('../Signin/index');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html><body><div id="root"></div></body>`);
chai.use(require('chai-dom'));

global.window = dom.window;
global.document = dom.window.document;

describe('Тест SigninPage', function () {
  const signinPage = new SigninPage({ children: [] });
  it('Проверка на вывод', function () {
    chai
      .expect(signinPage.getContent().firstElementChild.firstElementChild)
      .to.have.class('login_box');
  });
});
