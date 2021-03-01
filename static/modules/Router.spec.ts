const { expect } = require('chai');
const { Router } = require('./Router');

describe('Test Router module', () => {
  const router = new Router();

  it('should add route to routes[]', () => {
    router.use('/chat', {}, {}, function () {});
    expect(router.routes.length).to.equal(1);
  });

  it('check if added route is instance of Route', () => {
    expect(router.routes[0].constructor.name).to.equal('Route');
  });

  it('should add onpopstage listener to window on start', () => {
    router.routes[0].render = () => {};
    router.start();
    expect(typeof window.onpopstate).to.equal('function');
  });

  it('should find route by pathname', () => {
    const route = router.getRoute('/chat');
    expect(route.constructor.name).to.equal('Route');
    expect(route._pathname).to.equal('/chat');
  });

  it('should match passed path with stored', () => {
    const route = router.getRoute('/chat');
    expect(route.match('/chat')).to.equal(true);
  });
});
