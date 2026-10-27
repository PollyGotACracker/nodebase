---
title: Markdown 링크 규칙
description: "Wiki 링크, 출처 참조, 외부 링크에 관한 규칙을 정의한다. Markdown 링크를 생성하거나 수정할 때 참고한다."
type: instruction
created: 2026-10-25
modified: 2026-10-25
---

# Markdown 링크 규칙

## 기본 형식

- 위키 문서의 관계는 `[표시 이름](/경로.md)` 형식으로 작성한다.
- 경로는 bundle 루트 `wiki/`를 기준으로 `/`로 시작하며 `.md` 확장자를 붙인다.
- 표시 이름에는 문서 제목이나 문맥에 맞는 별칭을 사용한다.
- 다음은 다른 위키 문서를 참조하는 예시이다.

```markdown
[Harness engineering](/concepts/ai-harness-engineering.md)
[Ralph Wiggum loop](/concepts/ai-loop-ralph-wiggum.md)
[Long-running agents](/sources/ai-harness-long-running-agents.md)
```

## 원본 링크

- 원본은 `wiki/sources/` 문서의 `sources[].resource`에서만 `../../raw/파일명.md`로 참조한다.
- 다른 위키 문서는 원본 대신 해당 `wiki/sources/` 문서를 참조한다.
- 원본을 옮기면 그 원본을 가리키는 `sources[].resource`를 갱신한다.
- bundle만 배포하는 경우 원본 상대경로를 열려면 원본을 별도로 배치해야 한다.

## 외부 링크

- 외부 URL은 `[표시 이름](URL)` 형식의 마크다운 링크로 작성한다.
- 표시 이름은 서비스명 또는 `소유자/저장소`이다.
- 코드 블록 안의 원문 URL은 원문 보존을 위해 변환에서 제외한다.

```markdown
- [TypeSafe](https://typesafe.ai/)
- [PollyGotACracker/nestlab](https://github.com/PollyGotACracker/nestlab)
```

## 표 안 링크

- 표에서도 표준 Markdown 링크를 사용한다.

```markdown
| **문서**                                         | **설명**                            |
| :----------------------------------------------- | :---------------------------------- |
| [Prompt caching](/concepts/ai-prompt-caching.md) | 반복되는 프롬프트 앞부분을 캐시한다 |
```
