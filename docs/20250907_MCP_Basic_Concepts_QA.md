# MCP 기본 개념 학습 관련 Q&A
날짜: 2025년 9월 7일

## 질문
"Phase 1에 있는 MCP 기본 개념 이해를 위해서 필요한 내용을 알려 주세요. 그리고 그 내용의 소스(웹페이지 등) 도 알려 주세요."

## 답변

### 1. MCP 기본 개념 학습을 위한 핵심 내용

#### MCP의 정의와 목적
- Model Context Protocol (MCP)는 AI 애플리케이션을 외부 시스템과 연결하기 위한 오픈소스 표준
- AI 애플리케이션과 외부 시스템 간의 안전하고 표준화된 통신 방법 제공
- "AI 애플리케이션을 위한 USB-C 포트"와 같은 역할

#### MCP의 핵심 구성 요소
1. Resources (리소스)
   - 데이터를 노출하는 방법
   - REST API의 GET 엔드포인트와 유사
   - 데이터 제공에 중점, 큰 연산이나 부작용 없음

2. Tools (도구)
   - 기능을 제공하는 방법
   - REST API의 POST 엔드포인트와 유사
   - 실제 연산 수행 및 부작용 발생 가능

3. Prompts (프롬프트)
   - LLM과의 상호작용을 위한 재사용 가능한 템플릿
   - 서버와의 효과적인 상호작용을 위한 패턴 정의

### 2. 학습 소스

#### a) 공식 문서
- MCP 공식 웹사이트: https://modelcontextprotocol.io
  - 기본 개념과 아키텍처 설명
  - 시작 가이드
  - 사용 사례

- MCP 스펙 문서: https://spec.modelcontextprotocol.io
  - 프로토콜의 세부 사항
  - 기술적 명세

#### b) GitHub 리소스
- TypeScript SDK 저장소: https://github.com/modelcontextprotocol/typescript-sdk
  - 예제 코드
  - 구현 가이드
  - API 문서

- 예제 서버 저장소: https://github.com/modelcontextprotocol/servers
  - 실제 구현 사례
  - 다양한 사용 시나리오

#### c) 실습 자료
- SDK의 examples 폴더 내 예제들:
  - 기본 클라이언트 구현
  - 단순 서버 구현
  - 고급 기능 구현

### 3. 권장 학습 순서

1. 기초 단계
   - MCP 공식 웹사이트의 "Getting Started" 문서 읽기
   - 기본 개념과 아키텍처 이해하기
   - 간단한 예제 살펴보기

2. 실습 단계
   - TypeScript SDK 예제 코드 실행해보기
   - 기본 클라이언트 애플리케이션 만들어보기
   - 간단한 도구 사용해보기

3. 심화 단계
   - 프로토콜 스펙 문서 자세히 학습하기
   - 고급 기능 구현해보기
   - 실제 사용 사례 구현해보기
