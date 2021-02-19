const {Popup} = require("../../dist/components/Popup/index");
const chai = require("chai");

chai.use(require('chai-dom'));

describe("Тест Popup", function () {
    const popup = new Popup({children: []});
    it("Проверка на вывод", function () {
        chai.expect(popup.getContent().firstElementChild).to.have.class('overlay');
    });
});