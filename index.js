const express = require('express');
const path = require('path'); // 'path' 모듈 추가
const app = express();
const PORT = process.env.PORT || 8080;  

// 나중에 배포가 성공했는지 확인하기 쉽도록 버전을 추가합니다.
const VERSION = "1.0.1"; // 이 버전은 그대로 두셔도 됩니다.

// 'public' 폴더를 정적 파일 제공 폴더로 설정합니다.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // 텍스트 대신 'public' 폴더의 'index.html' 파일을 전송합니다.
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.listen()의 결과를 server 변수에 저장합니다.
const server = app.listen(PORT, () => {
  console.log(`Sample app listening on port ${PORT}`);
});

// app과 server를 "둘 다" export합니다.
module.exports = { app, server };