# 1. Node.js 18-alpine 버전을 기반으로 합니다.
FROM node:18-alpine

# 2. 앱 디렉토리를 생성합니다.
WORKDIR /usr/src/app

# 3. package.json 파일을 복사하고 의존성을 설치합니다.
# (package-lock.json도 복사하면 더 좋습니다.)
COPY package*.json ./
RUN npm install

# 4. 소스 코드를 복사합니다.
COPY . .

# 5. App Runner가 사용할 포트(8080)를 노출합니다.
EXPOSE 8080

# 6. 앱을 실행합니다.
CMD [ "node", "index.js" ]
