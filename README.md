# (주)대일테크 홈페이지 리뉴얼 — 프론트엔드 프로토타입

> 기존 홈페이지(daeiltech.co.kr) 리뉴얼 제안을 위한 프론트엔드 디자인 시안입니다.
> 서버·DB 연동 없이 mockData 기반으로 동작하는 **정적 프로토타입**입니다.

---

## 실행 방법

```bash
# 의존성 설치 (최초 1회)
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열면 바로 확인할 수 있습니다.

---

## 기술 스택

| 항목 | 버전 |
|------|------|
| Next.js | 16.x (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| 폰트 | Noto Sans KR, Inter (Google Fonts) |

---

## 페이지 구성

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | 메인 | Hero, 솔루션 탐색, 신뢰 지표, 추천 제품, 브랜드, A/S, 뉴스, 문의 CTA |
| `/solutions` | 솔루션 | 5개 솔루션 상세 소개 + 관련 제품 연결 |
| `/products` | 제품 목록 | 카테고리·솔루션 필터 + 검색 |
| `/products/[id]` | 제품 상세 | 이미지, 특징, 스펙 표, 관련 제품, 문의 폼 |
| `/about` | 회사소개 | 핵심 가치, 연혁 타임라인, 파트너 브랜드, 오시는 길 |
| `/contact` | 문의 | 견적·A/S·일반·카탈로그 탭 폼 + 공지사항 |

---

## 프로젝트 구조

```
daeiltech_renewal/
├── app/                        # Next.js App Router 페이지
│   ├── layout.tsx              # 루트 레이아웃 (Header, Footer 포함)
│   ├── page.tsx                # 메인 페이지
│   ├── globals.css             # 전역 스타일 + Tailwind 커스텀 색상
│   ├── solutions/page.tsx      # 솔루션 페이지
│   ├── products/
│   │   ├── page.tsx            # 제품 목록 (필터·검색)
│   │   └── [id]/page.tsx       # 제품 상세
│   ├── about/page.tsx          # 회사소개
│   └── contact/page.tsx        # 문의하기
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # 고정 헤더 + 드롭다운 메뉴 + 모바일 메뉴
│   │   └── Footer.tsx          # 4열 링크 + 회사 정보
│   ├── home/                   # 메인 페이지 섹션 컴포넌트
│   │   ├── HeroSection.tsx
│   │   ├── SolutionFinderSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── FeaturedProductsSection.tsx  # 탭 인터랙션 (Client)
│   │   ├── BrandsSection.tsx
│   │   ├── SupportSection.tsx
│   │   ├── NewsSection.tsx
│   │   └── ContactCTASection.tsx        # 문의 폼 (Client)
│   └── ui/
│       ├── Button.tsx          # 재사용 버튼 컴포넌트
│       ├── SectionHeader.tsx   # 섹션 제목 컴포넌트
│       └── Badge.tsx           # 태그 배지
│
└── lib/
    ├── types.ts                # TypeScript 타입 정의
    └── mockData.ts             # 제품·솔루션·브랜드·뉴스 전체 Mock 데이터
```

---

## 디자인 컬러 시스템

| 이름 | HEX | 용도 |
|------|-----|------|
| `navy` | `#1A3A5C` | 주요 배경, 강조 텍스트, 버튼 |
| `navy-dark` | `#0F2236` | 호버 상태 |
| `brand` | `#2E7DC5` | 링크, 보조 강조 |
| `accent` | `#00A3A3` | CTA 버튼, 포인트 |
| `surface` | `#F5F7FA` | 섹션 배경 |
| `border` | `#DCE3EC` | 카드 테두리 |

---

## mockData 수정 방법

실제 데이터로 교체할 때는 `lib/mockData.ts` 파일을 수정하세요.

```typescript
// 제품 추가 예시
export const products: Product[] = [
  {
    id: "new-product",
    name: "새 제품명",
    brand: "브랜드",
    model: "모델명",
    categoryId: "incubator",       // categories 배열의 id 중 하나
    solutionIds: ["cell-culture"], // solutions 배열의 id 중 하나 이상
    shortDescription: "한 줄 설명",
    description: "상세 설명",
    features: ["특징 1", "특징 2"],
    specs: [{ label: "온도", value: "37℃" }],
    image: "https://...",
    catalogUrl: "/catalogs/sample.pdf",
    isFeatured: false,
  },
];
```

---

## 향후 실제 서버 연동 시 변경 포인트

- `lib/mockData.ts` → API 호출 함수로 교체
- `app/contact/page.tsx` 폼 submit → 실제 메일 발송 API 연결
- `app/products/[id]/page.tsx` → DB 기반 동적 라우팅
- 카탈로그 다운로드 → 실제 PDF 파일 경로 연결
- 이미지 → 실제 제품 이미지로 교체 (Unsplash 플레이스홀더 대체)

---

## 참고

- 기획 문서: `기획서_대일테크_홈페이지_리뉴얼.md`
- 기존 홈페이지: [https://www.daeiltech.co.kr](https://www.daeiltech.co.kr)
