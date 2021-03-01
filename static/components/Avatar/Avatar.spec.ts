const { Avatar } = require('../Avatar/index');
const chai = require('chai');

chai.use(require('chai-dom'));

describe('Тест Avatar', function () {
  const avatar = new Avatar({});
  it('Проверка на вывод', function () {
    chai.expect(avatar.getContent()).to.have.descendant('img');
  });
});
