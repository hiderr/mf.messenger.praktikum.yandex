global.Handlebars = require('../../../node_modules/handlebars/dist/handlebars');
const { ProfilePage } = require('../../dist/blocks/Profile/index');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html><body><div id="root"></div></body>`);
chai.use(require('chai-dom'));

global.window = dom.window;
global.document = dom.window.document;

describe('Тест ProfilePage', function () {
  const avatar = new ProfilePage({ children: [] });
  it('Проверка на вывод', function () {
    chai.expect(avatar.getContent().firstElementChild).to.have.class('profile');
  });
});
