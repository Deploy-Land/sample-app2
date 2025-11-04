const request = require('supertest');
const server = require('./index'); // 이 라인에서 서버가 시작됨

describe('GET /', () => {
  it('should respond with Hello from Deploy Land!', async () => {
    const response = await request(app).get('/');
    
    // HTTP 상태 코드가 200인지 확인합니다.
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello from Deploy Land!');
  });

  // 테스트가 모두 완료된 후 서버를 닫습니다.
  afterAll((done) => {
    server.close(done);
  });
});

