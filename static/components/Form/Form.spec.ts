const { Form } = require('../Form/index');
const chai = require('chai');

chai.use(require('chai-dom'));

describe('Тест Form', function () {
  const form = new Form({ children: [] });
  it('Проверка на вывод', function () {
    chai.expect(form.getContent()).to.have.descendant('form');
  });
});
