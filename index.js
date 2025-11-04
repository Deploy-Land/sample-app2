const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// 나중에 배포가 성공했는지 확인하기 쉽도록 버전을 추가합니다.
const VERSION = "1.0.1";

app.get('/', (req, res) => {
  res.send(`Hello from Deploy Land! 🚀\nVersion: ${VERSION}`);
});

// app.listen()의 결과를 server 변수에 저장합니다.
const server = app.listen(PORT, () => {
  console.log(`Sample app listening on port ${PORT}`);
});

// app과 server를 "둘 다" export합니다.
module.exports = { app, server };

