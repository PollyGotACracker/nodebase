---
title: Git 규칙
description: "브랜치 이름, 커밋 범위, 커밋 메시지 작성 규칙을 정의한다. 브랜치나 커밋을 생성하기 전에 참고한다."
type: instruction
created: 2026-10-25
modified: 2026-10-25
---

# Git 규칙

## Branch

- 기본 브랜치는 `master`이다.
- 브랜치 생성 규칙은 `<type>/<issue-number>`이다.
- `type`은 `.github/`의 템플릿 파일을 확인한다.
  - 'custom' 템플릿은 정의되지 않은 추가적인 `type`을 위한 것이다.
- `issue-number`는 작업 중 생성했거나, open 상태의 관련 이슈 번호이다.

## Commit

- 커밋 단위는 승인된 변경 세트이다.
- 메시지 형식은 `<type>: <title>`이다.
- `type`의 허용 값은 `feat`, `fix`, `chore`, `docs` 이다.
- `title` 언어는 한국어이며, 길이는 40자 이내이다.

규칙은 아래 형식을 따른다.

```text
<type>: <title> (제목은 40자 이내)

<description> (한 줄 띄우고 작성. 72자 이내로 줄 바꿈)

Resolves: #<이슈번호>(생략 가능)
See also: #<이슈번호>(생략 가능)
```
