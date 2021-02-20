const { Title } = require('../../dist/components/Title/index');
const chai = require('chai');

chai.use(require('chai-dom'));

describe('Тест Title', function () {
  const title = new Title({});
  it('Проверка на вывод', function () {
    chai.expect(title.getContent()).to.have.descendant('h1');
  });
});
