const { expect } = require('chai');
const sinon = require('sinon');
const { HTTP } = require('./http/HTTP');

let inputParams, server;
const http = new HTTP('https://ya-praktikum.tech/api/v2');

describe('Test HTTP module', () => {
  before(() => {
    global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
    server = sinon.fakeServer.create();
  });

  after(() => {
    server.restore();
  });

  it('should save url prefix to variable', () => {
    expect(http.baseUrl).to.equal('https://ya-praktikum.tech/api/v2');
  });

  it('should convert object to query params', () => {
    http.get('/test', {
      data: {
        param1: 1,
        param2: 2,
      },
    });
    expect(server.requests[0].url).to.equal(`${http.baseUrl}/test?param1=1&param2=2`);
  });

  it('should set header application/json', () => {
    http.post('/test', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(server.requests[1].requestHeaders['Content-Type']).to.equal(
      'application/json;charset=utf-8',
    );
  });

  it('should send request type GET', () => {
    http.get('/test');
    expect(server.requests[2].method).to.equal('GET');
  });

  it('should send request type POST', () => {
    http.post('/test');
    expect(server.requests[3].method).to.equal('POST');
  });

  it('should send request type PUT', () => {
    http.put('/test');
    expect(server.requests[4].method).to.equal('PUT');
  });

  it('should send request type DELETE', () => {
    http.delete('/test');
    expect(server.requests[5].method).to.equal('DELETE');
  });
});
