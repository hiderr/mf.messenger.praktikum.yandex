const { Input } = require('../Input/index');
const chai = require('chai');

chai.use(require('chai-dom'));

describe('Тест Input', function () {
  const input = new Input({});
  it('Проверка на вывод', function () {
    chai.expect(input.getContent()).to.have.descendant('input');
  });
});
