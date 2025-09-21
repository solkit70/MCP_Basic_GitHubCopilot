# MCP 서버 탐색 학습 가이드
날짜: 2025년 9월 21일

## 1. MCP 서버의 기본 이해

### 1.1 MCP 서버의 정의
MCP 서버는 AI 애플리케이션이 외부 시스템과 상호작용할 수 있도록 하는 표준화된 인터페이스를 제공하는 서비스입니다. MCP 프로토콜 버전 2025-06-18을 기준으로 작성되었습니다.

### 1.2 MCP 서버의 주요 기능
1. **리소스 제공 (Resources)**
   - 데이터 접근을 위한 GET 스타일 엔드포인트
   - 파일, 데이터베이스, API 등의 데이터 소스 노출
   - 컨텍스트 정보 제공

2. **도구 제공 (Tools)**
   - 기능 실행을 위한 POST 스타일 엔드포인트
   - 계산, 변환, 외부 시스템 조작 등의 작업 수행
   - 부작용이 있는 작업 처리

3. **프롬프트 관리 (Prompts)**
   - LLM과의 상호작용을 위한 템플릿 제공
   - 재사용 가능한 대화 패턴 정의
   - 일관된 응답 형식 보장

## 2. 서버 구현 예제 분석

### 2.1 기본 계산기 서버
```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const server = new McpServer({
  name: "calculator",
  version: "1.0.0"
});

server.registerTool("add", {
  title: "Addition",
  description: "Add two numbers",
  inputSchema: {
    a: z.number(),
    b: z.number()
  }
}, async ({ a, b }) => ({
  content: [{ type: "text", text: String(a + b) }]
}));
```

### 2.2 파일 시스템 서버
```typescript
server.registerResource(
  "files",
  new ResourceTemplate("file://{path}"),
  {
    title: "File System",
    description: "Access local files"
  },
  async (uri, { path }) => ({
    contents: [{
      uri: uri.href,
      text: await readFile(path)
    }]
  })
);
```

## 3. 검증된 참조 자료

### 3.1 공식 문서
- MCP TypeScript SDK GitHub 저장소
  - URL: https://github.com/modelcontextprotocol/typescript-sdk
  - 최신 버전: 1.18.1 (2025년 9월 기준)
  - MIT 라이선스

- 주요 문서 섹션:
  1. README.md: 기본 사용법과 개념 설명
  2. /examples: 실제 구현 예제
  3. /src: 소스 코드 및 타입 정의

### 3.2 예제 코드 위치
SDK의 examples 디렉토리에서 다음 예제들을 찾을 수 있습니다:
1. client/simpleStreamableHttp.ts
2. server/toolWithSampleServer.ts
3. server/demoInMemoryOAuthProvider.ts

## 4. 실습 가이드

### 4.1 기본 서버 구현
1. 프로젝트 설정
   ```bash
   npm init -y
   npm install @modelcontextprotocol/sdk typescript
   ```

2. TypeScript 설정
   ```json
   {
     "compilerOptions": {
       "target": "es2018",
       "module": "commonjs",
       "outDir": "./dist",
       "strict": true,
       "esModuleInterop": true
     }
   }
   ```

3. 서버 구현
   - 리소스 정의
   - 도구 구현
   - 프롬프트 설정

### 4.2 테스트 및 디버깅
- SDK의 내장 테스트 도구 활용
- 로깅 시스템 구현
- 에러 처리 패턴

## 5. 보안 고려사항

### 5.1 인증 및 권한
- OAuth 2.0 지원
- 세션 관리
- 접근 제어

### 5.2 데이터 보호
- 입력 검증
- 출력 필터링
- 리소스 접근 제한

## 6. 성능 최적화

### 6.1 응답 시간 최적화
- 캐싱 전략
- 비동기 처리
- 배치 처리

### 6.2 리소스 관리
- 메모리 사용 최적화
- 연결 풀링
- 타임아웃 처리

## 참고: 실제 검증된 MCP 서버 구현체

1. TypeScript SDK 예제 서버
   - 위치: typescript-sdk/src/examples/server/
   - 용도: 학습 및 참조
   - 기능: 기본적인 MCP 기능 구현

2. 테스트용 서버
   - 위치: typescript-sdk/src/integration-tests/
   - 용도: 테스트 및 검증
   - 기능: 다양한 시나리오 테스트

## 학습 체크리스트

1. 기본 개념 이해
   - [ ] MCP 서버의 역할
   - [ ] 리소스, 도구, 프롬프트의 차이
   - [ ] 프로토콜 버전 확인

2. 환경 설정
   - [ ] TypeScript SDK 설치
   - [ ] 프로젝트 구조 설정
   - [ ] 개발 도구 구성

3. 구현 연습
   - [ ] 기본 서버 생성
   - [ ] 리소스 구현
   - [ ] 도구 추가
   - [ ] 프롬프트 정의

4. 테스트
   - [ ] 단위 테스트 작성
   - [ ] 통합 테스트 수행
   - [ ] 성능 테스트

## 다음 단계
1. 실제 서비스 시나리오 선정
2. 프로토타입 서버 구현
3. 테스트 및 최적화
4. 문서화 및 배포