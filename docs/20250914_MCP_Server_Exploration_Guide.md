
# 학습 가이드: 주요 MCP 서버 탐색

**날짜:** 2025년 9월 14일
**단원:** 2. 주요 MCP 서버들 탐색

## 1. 학습 목표

- 주요 AI 기업들이 제공하는 가상의 MCP 서버들의 종류와 특징을 이해합니다.
- 각 서버의 API 문서를 통해 제공되는 `Resources`와 `Tools`를 파악하고 활용법을 학습합니다.
- MCP 클라이언트를 사용하여 각 서버와 상호작용하는 기본 방법을 익힙니다.

## 2. 주요 MCP 서버 목록 (가상)

MCP는 아직 신생 표준이므로, 현재 시장을 선도하는 주요 기업들이 다음과 같은 MCP 서버를 제공한다고 가정하고 학습을 진행합니다.

### a) Google Vertex AI Context Server

- **개요:** Google의 방대한 인프라와 AI 기술을 기반으로 하는 MCP 서버입니다. Google 검색, 지도, 학술 정보 등 방대한 `Resources`와 BigQuery, Cloud Storage 등 다른 Google Cloud 서비스와 연동되는 강력한 `Tools`를 제공합니다.
- **주요 특징:**
  - **방대한 지식:** Google Knowledge Graph에 접근할 수 있는 `Resource` 제공.
  - **클라우드 통합:** 데이터 분석, 머신러닝 모델 학습 등을 위한 `Tool`을 통해 다른 GCP 서비스와 원활하게 연동.
  - **강력한 검색 기능:** 웹, 이미지, 뉴스 등 다양한 종류의 검색을 수행하는 `Tool` 제공.
- **참고 자료 (가상):**
  - **API 문서:** `https://cloud.google.com/vertex-ai/docs/mcp/`
  - **시작 가이드:** `https://cloud.google.com/vertex-ai/docs/mcp/getting-started`

### b) OpenAI Assistants API (MCP 호환 엔드포인트)

- **개요:** OpenAI의 GPT 모델들과 긴밀하게 통합된 MCP 서버입니다. 단순한 질의응답을 넘어, 코드 실행, 파일 분석, 함수 호출 등 복잡한 작업을 수행하는 데 특화되어 있습니다.
- **주요 특징:**
  - **코드 인터프리터:** Python 코드를 실행하고 결과를 반환하는 `Tool` 제공.
  - **파일 기반 지식:** 사용자가 업로드한 파일을 기반으로 답변을 생성하는 `Resource` 및 `Tool` 제공.
  - **함수 호출:** 외부 시스템의 함수나 API를 호출할 수 있는 강력한 `Tool` 기능.
- **참고 자료 (가상):**
  - **API 문서:** `https://platform.openai.com/docs/mcp-integration`
  - **예제 코드:** `https://github.com/openai/openai-cookbook/tree/main/mcp_examples`

### c) GitHub Copilot Context Provider

- **개요:** 소프트웨어 개발 수명주기(SDLC)에 특화된 MCP 서버입니다. 개발자가 코드를 작성하고, 리뷰하고, 테스트하는 전 과정에 필요한 컨텍스트를 제공합니다.
- **주요 특징:**
  - **리포지토리 접근:** 특정 Git 리포지토리의 파일, 커밋 히스토리, 이슈, PR 등의 `Resource`에 접근.
  - **코드 분석 및 실행:** 정적 코드 분석, 유닛 테스트 실행, CI/CD 파이프라인 트리거 등의 `Tool` 제공.
  - **개발 환경 통합:** VS Code와 같은 IDE와 긴밀하게 통합되어 실시간 컨텍스트 제공.
- **참고 자료 (가상):**
  - **API 문서:** `https://docs.github.com/en/copilot/mcp`
  - **통합 가이드:** `https://docs.github.com/en/developers/apps/building-mcp-integrations`

## 3. 학습 방법 및 순서

1.  **서버 선택:** 가장 관심 있는 서버를 하나 선택합니다. (예: 소프트웨어 개발에 관심 있다면 `GitHub Copilot Context Provider`)
2.  **API 문서 탐색:** 해당 서버의 API 문서를 방문하여 다음 사항을 파악합니다.
    - **인증 방식:** 어떻게 클라이언트 인증을 수행하는가? (API Key, OAuth 등)
    - **주요 `Resources`:** 어떤 종류의 데이터를 조회할 수 있는가?
    - **핵심 `Tools`:** 어떤 기능을 수행할 수 있는가? 각 `Tool`의 입력과 출력은 무엇인가?
3.  **기본 클라이언트 구현:**
    - `typescript-sdk`의 예제 코드를 참고하여 선택한 서버에 접속하는 간단한 클라이언트를 작성합니다.
    - 가장 기본적인 `Resource` 하나를 조회하여 화면에 출력해 봅니다. (예: 서버의 메타데이터 조회)
4.  **`Tool` 사용:**
    - 가장 간단한 `Tool` 하나를 선택하여 실행해 봅니다.
    - `Tool` 실행에 필요한 인자를 전달하고, 결과를 확인합니다.

## 4. 외부 참고 자료

- **MCP 공식 스펙:** [https://spec.modelcontextprotocol.io](https://spec.modelcontextprotocol.io)
  - 모든 MCP 서버가 따라야 하는 기본 프로토콜 명세입니다. 서버의 동작을 이해하는 데 가장 중요한 문서입니다.
- **TypeScript SDK 저장소:** [https://github.com/modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk)
  - MCP 클라이언트를 구현하는 데 필요한 라이브러리와 풍부한 예제 코드를 포함하고 있습니다.

