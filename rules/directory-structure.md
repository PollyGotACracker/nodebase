---
title: 폴더 구조
description: "저장소 경로를 해석하고 문서를 배치하는 규칙을 정의한다. 파일을 생성하거나 이동할 때 참고한다."
type: instruction
created: 2026-10-25
modified: 2026-10-25
---

# 폴더 구조

## 경로 기준

- 작업 대상 경로의 `raw/`, `wiki/`, `schema/`, `rules/`는 저장소 루트를 기준으로 해석한다.
- `raw/`를 가리키는 `sources[].resource`의 상대경로는 해당 문서 위치를 기준으로 해석한다.
- `/`로 시작하는 OKF 경로는 bundle 루트인 `wiki/`를 기준으로 해석한다.
- 새 링크의 작성 형식은 [Markdown 링크 규칙](markdown-link-rules.md)을 따른다.
- 저장소 루트를 명시한 지침 및 `.github/` 템플릿 경로는 저장소 루트를 기준으로 해석한다.

## 폴더

### 구성

| 경로             | 역할                                |
| ---------------- | ----------------------------------- |
| `raw/`           | 사용자 작성 또는 수집 자료          |
| `rules/`         | 저장소 상세 규칙                    |
| `wiki/assets/`   | 위키 문서 내부에 사용되는 에셋 파일 |
| `wiki/entities/` | 고유명사 1개당 1페이지              |
| `wiki/concepts/` | 개념, 방법론, 원리 1개당 1페이지    |
| `wiki/sources/`  | `raw/` 문서 1개당 요약 1페이지      |
| `wiki/index.md`  | 위키 전체 목차                      |
| `schema/`        | ingest, query, lint 절차            |
| `site/`          | Quartz 사이트 도구                  |
| `package.json`   | 사이트 실행 커맨드 정의             |

### 배치 기준

`entities`, `concepts`, `sources` 페이지의 정렬 기준은 [파일명 규칙](file-naming-rules.md)을 따른다.
