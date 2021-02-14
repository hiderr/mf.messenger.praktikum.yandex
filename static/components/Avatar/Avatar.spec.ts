global.Handlebars = require("../../../node_modules/handlebars/dist/handlebars.js");
const {Avatar} = require("../../dist/components/Avatar/index.js");
const chai = require("chai");
require('global-jsdom')();

chai.use(require('chai-dom'));

describe("Тест Avatar", function () {
    const avatar = new Avatar({});
    it("Проверка на вывод", function () {
        chai.expect(avatar.getContent()).to.have.descendant('img');
    });
});