# NODEBASE

Obsidian 기반 개인 지식 관리 구조  
에이전트 설정: [Nestlab 저장소](https://github.com/PollyGotACracker/nestlab)

## 폴더 구조

```text
./
├── .claude/           # Claude Code 설정
├── .github/           # github 설정
├── .claudian/         # (ignore) Claude Code Plugin 설정
├── .obsidian/         # (ignore) Obsidian 설정
├── assets/            # 저장소 에셋
├── raw/               # 사용자 작성 또는 수집 자료
├── rules/             # 저장소 상세 규칙
├── schema/            # ingest, query, lint 절차
├── site/              # Quartz 사이트 도구
├── wiki/              # 에이전트가 ingest로 작성하는 위키
│   ├── assets/        # 문서 내부 에셋
│   ├── sources/       # raw/ 문서 1개 요약
│   ├── entities/      # 사람, 조직, 제품, 도구 같은 고유명사
│   ├── concepts/      # 개념, 방법론, 원리
│   └── index.md       # 위키 전체 목차
├── AGENTS.md          # 공통 지침과 작업별 읽기 조건
├── CLAUDE.md          # AGENTS.md를 읽는 Claude Code 진입점
├── README.md          # 저장소 정보 문서
└── package.json       # 사이트 실행 커맨드 정의
```

공통 규칙의 경로와 읽기 조건은 [공통 지침](AGENTS.md)에 기록한다.
`rules/`는 형식과 판단 기준을, `schema/`는 작업별 실행 순서와 검증 절차를 담는다.

## OKF 적용 범위

`wiki/` 문서는 Open Knowledge Format(OKF) v0.2 기준으로 작성한다.
`raw/` 원본은 기존 형식을 유지하며, 위키 문서는 [위키 목차](wiki/index.md)에서 찾을 수 있다.

## 운영 절차

작업을 요청할 때는 "`raw/파일명`을 ingest해 줘"처럼 해당 문서를 지정한다.

| 작업   | 용도                                  |
| ------ | ------------------------------------- |
| ingest | `raw/` 자료를 위키에 편입한다.        |
| query  | 위키를 검색해 인용과 함께 답한다.     |
| lint   | 위키 품질을 점검하고 정리를 제안한다. |

## 사이트 게시

사이트 게시는 Quartz 도구를 사용한다.
`raw/` 경로를 페이지로 사용하며, 페이지 index는 `raw/index.md`이다.
관련 커맨드는 `package.json` 파일이 존재하는 저장소 루트 경로에서 실행한다.

```bash
# 개발 서버 실행
pnpm dev

# 빌드 및 실행
pnpm build
pnpm preview
```

## Quartz 업데이트

`site/`는 Quartz 소스를 포함하는 Git subtree이며, 이 저장소에서 함께 관리한다.
초기 편입 기준은 Quartz `97a2d05`이며, 업데이트 대상은 upstream의 `v5` 브랜치이다.

추적 파일의 변경은 커밋하거나 별도 보관한 뒤 저장소 루트에서 실행한다.
로컬 전용 변경을 stash한 경우 업데이트가 끝난 뒤 복원하고 충돌을 확인한다.

```bash
# Quartz 소스, 의존성과 플러그인 갱신
pnpm sync

# 빌드 확인
pnpm build
```

소스 갱신에는 `git subtree pull --prefix=site --squash`를 사용한다.
사이트 설정과 upstream 변경이 충돌하면 충돌 파일을 병합한 뒤 의존성과 플러그인을 갱신한다.

```bash
cd site
pnpm install
pnpm run quartz plugin install --from-config
```

## 참고 링크

- [Google OKF](https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md)
- [Wiki Schema: Brian Wong](http://brianwong.com/Wiki/Schema/)
- [LLM Wiki: Karpathy](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [jackyzha0/quartz](https://github.com/jackyzha0/quartz)
