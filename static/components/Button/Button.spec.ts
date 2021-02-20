const { Button } = require('../../dist/components/Button/index');
const chai = require('chai');

chai.use(require('chai-dom'));

describe('Тест Button', function () {
  const button = new Button({});
  it('Проверка на вывод', function () {
    chai.expect(button.getContent()).to.have.descendant('button');
  });
});
