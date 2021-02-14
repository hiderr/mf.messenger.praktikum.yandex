const {Link} = require("../../dist/components/Link/index.js");
const chai = require("chai");

chai.use(require('chai-dom'));

describe("Тест Link", function () {
    const link = new Link({});
    it("Проверка на вывод", function () {
        chai.expect(link.getContent()).to.have.descendant('a');
    });
});