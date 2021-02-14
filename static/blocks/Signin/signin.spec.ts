global.Handlebars = require("../../../node_modules/handlebars/dist/handlebars.js");
const {SigninPage} = require("../../dist/blocks/Signin/index.js");
const chai = require("chai");
const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><body><div id="root"></div></body>`);
chai.use(require('chai-dom'));

global.window = dom.window;
global.document = dom.window.document;

describe("Тест SigninPage", function () {
    const avatar = new SigninPage({children: []});
    it("Проверка на вывод", function () {
        chai.expect(avatar.getContent().firstElementChild).to.have.class('login_box');
    });
});