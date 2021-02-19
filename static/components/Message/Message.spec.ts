const {Message} = require("../../dist/components/Message/index");
const chai = require("chai");

chai.use(require('chai-dom'));

describe("Тест Message", function () {
    const message = new Message({});
    it("Проверка на вывод", function () {
        chai.expect(message.getContent()).to.have.descendant('span');
    });
});