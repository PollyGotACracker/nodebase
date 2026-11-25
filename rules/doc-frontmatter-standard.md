---
title: Frontmatter 규격
description: "원본 자료, Wiki 문서, 예약된 파일의 Frontmatter 요구사항을 정의한다. 문서 메타데이터를 작성하거나 검증할 때 참고한다."
type: instruction
created: 2026-10-25
modified: 2026-10-25
---

# Frontmatter 규격

- 필드의 날짜와 시각은 Asia/Seoul(KST, UTC+09:00) 기준으로 기록한다.

## 공통 필드

- `title`(필수): 문서 제목. 한국어로 작성한다.
- `description`(필수): 문서 내용을 요약한 한 문장. 한국어로 작성하며 큰따옴표로 감싼다.
- `type`(필수): 문서 유형
  - `AGENTS.md`: `instruction`
  - `rules/`: `instruction`
  - `schema/`: `schema`
  - `raw/`: `raw`
  - `wiki/concepts`: `concept`
  - `wiki/entities`: `entity`
  - `wiki/sources`: `source`
- `created`(필수): 문서의 최초 생성 날짜
- `modified`(필수): 현재 내용의 작성 날짜

## 문서별 필드

### 지침 및 스키마 문서

대상: `AGENTS.md`, `schema/`, `rules/` 문서
저장소 구조가 변경되는 경우 위 대상 목록도 함께 변경해야 한다.
필드 작성 예시는 다음과 같다.

```yaml
---
title: 공통 지침
description: "저장소 전체에 적용되는 지침과 작업별 기준을 명시한다."
type: <type>
created: <YYYY-MM-DD>
modified: <YYYY-MM-DD>
---
```

### raw

대상: `raw/` 폴더 내 문서
필드 작성 예시는 다음과 같다.

```yaml
---
title: Git 명령어
description: "Git 명령어 강의에서 학습한 변경 사항 확인, 커밋 생성, 브랜치 관리 방법과 실습 내용을 정리한 문서이다."
type: raw
tags:
  - <topic-1>
  - <topic-2>
status: <status>
sources:
  - id: lecture-git
    resource: https://example.com/courses/lecture?id=1234
    title: Git 명령어 강의 링크
  - id: git-reference
    resource: https://git-scm.com/docs
    title: Git 명령어 공식 문서
created: <YYYY-MM-DD>
modified: <YYYY-MM-DD>
verified: <YYYY-MM-DD>
---
```

#### 필드

- `tags`(필수): 문서를 분류하는 문자열 목록
- `status`(필수): 문서 내용의 사용 상태
  - `draft`: 검토 전이며 내용이 불완전할 수 있는 초안
  - `stable`: 현재 사용할 수 있는 문서
  - `deprecated`: 이력과 링크 보존을 위해 남겨 둔 이전 문서
- `sources`(선택): 이 문서의 근거가 된 출처 목록
  - `id`(항목별 필수): 출처 식별자. 본문에서 인용할 때 같은 식별자의 Markdown 각주로 연결한다.
  - `resource`(항목별 필수): 출처의 외부 URL 또는 문서 경로. `/`로 시작하는 경로는 bundle 루트인 `wiki/`를 기준으로 해석한다.
  - `title`(항목별 필수): 출처의 제목
- `verified`(검증 후 필수): 문서 내용을 출처나 실제 대상과 대조한 검증 날짜

### wiki

대상: `wiki/` 폴더 내 `concepts/`, `entities/`, `sources/`의 문서
다음은 `wiki/concepts/` 문서인 경우의 필드 작성 예시이다.

```yaml
---
title: Git 명령어 사용 가이드
description: "Git에서 변경 사항을 확인하고, 커밋을 생성하며, 브랜치를 관리하는 주요 명령어와 사용 예시를 설명한다."
aliases: []
type: <type>
tags:
  - <topic-1>
  - <topic-2>
status: <status>
sources:
  - id: long-running-agents
    resource: /sources/ai-harness-long-running-agents.md
    title: 장기 실행 에이전트 source 문서
created: <YYYY-MM-DD>
modified: <YYYY-MM-DD>
verified: <YYYY-MM-DD>
---
```

#### 필드

- `aliases`(선택): 문서의 다른 이름 목록
- `tags`(필수): 문서를 분류하는 문자열 목록
- `status`(필수): 문서 내용의 사용 상태
  - `draft`: 검토 전이며 내용이 불완전할 수 있는 초안
  - `stable`: 현재 사용할 수 있는 문서
  - `deprecated`: 이력과 링크 보존을 위해 남겨 둔 이전 문서
- `sources`(선택): 이 문서의 근거가 된 출처 목록
  - `id`(항목별 필수): 출처 식별자. 본문에서 인용할 때 같은 식별자의 Markdown 각주로 연결한다.
  - `resource`(항목별 필수): 출처의 외부 URL 또는 문서 경로. `/`로 시작하는 경로는 bundle 루트인 `wiki/`를 기준으로 해석한다.
  - `title`(항목별 필수): 출처의 제목
- `verified`(검증 후 필수): 문서 내용을 출처나 실제 대상과 대조한 검증 날짜

### 인용과 관련 문서

- 주장별 인용은 `sources[].id`와 같은 식별자의 Markdown 각주로 연결한다.
- 관련 문서는 본문 Markdown 링크와 주변 설명으로 연결한다.
- `wiki/sources/`의 `sources[].resource`는 원본을 `../../raw/파일명.md`로 참조한다.
- 다른 위키 문서는 해당 `wiki/sources/` 문서의 bundle 경로를 출처로 기록한다.

```markdown
A fact confirmed by the source.[^long-running-agents]

[^long-running-agents]: [Long-running agents](/sources/ai-harness-long-running-agents.md)
```

## 추가 속성

- `model`과 `effort` 및 기존 사용자 정의 속성은 확인한 값과 의미를 보존한다.
- 추가 속성의 설명은 해당 예시의 속성 순서에 맞춰 작성한다.

## 예약 파일

- `wiki/index.md`의 frontmatter에는 `okf_version: "0.2"`만 기록한다.
- 하위 `index.md`와 `log.md`는 frontmatter 없이 작성한다.
- 목차는 분류별 Heading 아래 실제 문서 링크와 설명을 기록한다.
- 목차는 수동으로 관리하며, 별도 승인으로 자동 생성을 켜는 경우 생성 도구가 관리한다.

## 참고 규격

- [OKF v0.2](https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md)
