const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// 나중에 배포가 성공했는지 확인하기 쉽도록 버전을 추가합니다.
const VERSION = "1.0.1";

app.get('/', (req, res) => {
  res.send(`Hello from Deploy Land! 🚀\nVersion: ${VERSION}`);
});

app.listen(PORT, () => {
  console.log(`Sample app listening on port ${PORT}`);
});

// 테스트를 위해 app을 export 합니다.
module.exports = app;
