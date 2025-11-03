const request = require('supertest');
const app = require('./index'); // index.js에서 export한 app을 가져옵니다.

describe('GET /', () => {
  it('should respond with Hello from Deploy Land!', async () => {
    const response = await request(app).get('/');
    
    // 1. HTTP 상태 코드가 200인지 확인합니다.
    expect(response.statusCode).toBe(200);
    
    // 2. 응답 텍스트에 "Hello from Deploy Land!"가 포함되어 있는지 확인합니다.
    expect(response.text).toContain('Hello from Deploy Land!');
  });

  // --- 💡 데모를 위한 팁 ---
  // "Test Failed" 시나리오를 데모할 때,
  // 아래 주석을 풀고 "Hello"를 "Goodbye"로 바꾸면
  // 이 테스트가 실패하여 CodeBuild 단계가 멈춥니다.
  /*
  it('should FAIL intentionally', () => {
    expect('Hello').toBe('Goodbye');
  });
  */
});
