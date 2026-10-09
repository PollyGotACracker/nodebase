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
├── schema/            # ingest, query, lint 절차
├── wiki/              # 에이전트가 ingest로 작성하는 위키
│   ├── assets/        # 문서 내부 에셋
│   ├── sources/       # raw/ 문서 1개 요약
│   ├── entities/      # 사람, 조직, 제품, 도구 같은 고유명사
│   ├── concepts/      # 개념, 방법론, 원리
│   └── INDEX.md       # 위키 전체 목차
├── AGENTS.md          # 지침 통합 문서
├── CLAUDE.md          # Claude Code 전용 지침 통합 문서
└── README.md          # 저장소 정보 문서
```

## 운영 절차

| 작업   | 용도                                  | 문서                       |
| ------ | ------------------------------------- | -------------------------- |
| ingest | `raw/` 자료를 위키에 편입한다.        | [ingest](schema/ingest.md) |
| query  | 위키를 검색해 인용과 함께 답한다.     | [query](schema/query.md)   |
| lint   | 위키 품질을 점검하고 정리를 제안한다. | [lint](schema/lint.md)     |

작업을 요청할 때는 `raw/파일명`을 ingest해 줘"처럼 해당 문서를 지정한다.

## 참고 자료

- [Wiki Schema: Brian Wong](http://brianwong.com/Wiki/Schema/)
- [LLM Wiki: Karpathy](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
