---
title: 파일명 규칙
description: "문서 파일명과 OKF 개념 ID의 명명 규칙을 정의한다. 문서의 이름을 지정하거나 변경할 때 참고한다."
type: instruction
created: 2026-10-25
modified: 2026-10-25
---

# 파일명 규칙

- `index.md`와 `log.md`는 모든 깊이에서 소문자 예약 파일명으로 사용한다.
- `wiki/index.md`는 관리 파일명을 유지하고 아래 페이지 명명 규칙의 적용 대상에서 제외한다.
- 페이지 파일명은 영문 소문자, 숫자, 하이픈만으로 kebab-case로 구성한다.
- OKF concept ID는 bundle 안 경로에서 `.md`를 뺀 값이다.
  파일명이나 위치를 바꾸면 그 문서를 가리키는 링크와 `sources[].resource`를 함께 갱신한다.
- 대주제는 파일명의 첫 단어이며 파일명에는 대상을 구별하는 핵심 단어만 포함한다.
  같은 세부 주제의 페이지는 대주제의 이름순 정렬에서 함께 배치한다.

```text
wiki/entities/ai-harness-codex.md
wiki/entities/ai-loop-claude-agent-sdk.md
wiki/concepts/ai-harness-engineering.md
wiki/concepts/ai-loop-ralph-wiggum.md
wiki/concepts/ai-prompt-caching.md
wiki/sources/ai-harness-long-running-agents.md
```
