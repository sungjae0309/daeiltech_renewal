import Link from "next/link";
import { trustStats, brands, companyHistory } from "@/lib/mockData";

export const metadata = {
  title: "회사소개 | 대일테크",
  description:
    "30년 이상 대한민국 연구·의료 현장과 함께한 (주)대일테크의 회사 소개, 연혁, 파트너 브랜드를 확인하세요.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              대한민국 생명과학 장비의
              <br />
              신뢰할 수 있는 파트너
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              (주)대일테크는 1990년대 창업 이후 30년 이상 연구소, 제약·바이오 기업,
              병원, 약국을 고객으로 최고 품질의 장비와 토탈 솔루션을 제공해 왔습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "전문성",
                description:
                  "생명과학 장비 분야 30년 이상의 노하우와 전문 교육을 이수한 엔지니어 팀이 고객의 프로젝트를 담당합니다.",
              },
              {
                icon: "🤝",
                title: "신뢰",
                description:
                  "글로벌 선도 브랜드와의 공식 파트너십, IQ/OQ 밸리데이션 지원으로 고객의 신뢰에 부응합니다.",
              },
              {
                icon: "🔧",
                title: "지속적 지원",
                description:
                  "구매 이후에도 정기 점검, A/S, 소모품 공급까지 장기적인 파트너로서 함께합니다.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center px-4">
                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="text-navy font-black text-xl mb-3">{v.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-8 text-center"
              >
                <div className="text-4xl font-black text-accent mb-1">
                  {stat.value}
                  <span className="text-2xl">{stat.unit}</span>
                </div>
                <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-slate-400 text-xs">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="bg-white py-24">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">History</p>
            <h2 className="text-3xl md:text-4xl font-black text-navy">연혁</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-16 top-0 bottom-0 w-px bg-border" />

              <div className="flex flex-col gap-8">
                {companyHistory.map((item) => (
                  <div key={item.year} className="flex gap-6 items-start">
                    {/* Year */}
                    <div className="w-12 flex-shrink-0 text-right">
                      <span className="text-sm font-black text-navy">{item.year}</span>
                    </div>
                    {/* Dot */}
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-accent mt-1.5 relative z-10 ring-4 ring-white" />
                    {/* Events */}
                    <div className="flex-1 pb-2">
                      {item.events.map((event, i) => (
                        <p key={i} className="text-sm text-text-main leading-relaxed mb-1 last:mb-0">
                          {event}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section id="brands" className="bg-surface py-24">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
              Official Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
              공식 파트너 브랜드
            </h2>
            <p className="text-text-muted text-base max-w-xl mx-auto">
              대일테크는 아래 글로벌 브랜드의 공식 딜러로서 정품 제품 공급, A/S, 기술 지원을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-brand hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-black text-navy group-hover:text-brand transition-colors">
                    {brand.name}
                  </span>
                  <span className="text-xs bg-surface px-2 py-0.5 rounded-full text-text-muted">
                    {brand.country}
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">{brand.description}</p>
                <span className="text-xs text-brand font-semibold flex items-center gap-1">
                  공식 사이트
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-white py-20">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">Location</p>
            <h2 className="text-3xl md:text-4xl font-black text-navy">오시는 길</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Map Placeholder */}
            <div className="bg-surface border border-border rounded-2xl h-72 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-3">🗺️</div>
                <p className="text-text-muted text-sm font-medium">지도 연동 예정</p>
                <p className="text-xs text-text-muted mt-1">서울시 ○○구 ○○로 000</p>
              </div>
            </div>

            {/* Address Info */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: "📍",
                  label: "주소",
                  value: "서울특별시 ○○구 ○○로 000 (우편번호 12345)",
                },
                { icon: "📞", label: "대표 전화", value: "02-0000-0000" },
                { icon: "📠", label: "팩스", value: "02-0000-0001" },
                { icon: "✉️", label: "이메일", value: "info@daeiltech.co.kr" },
                { icon: "🕐", label: "영업시간", value: "월~금 09:00 ~ 18:00\n(토·일·공휴일 휴무)" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-semibold uppercase mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm text-text-main whitespace-pre-line">{item.value}</div>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 mt-2">
                <Link
                  href="/contact?type=quote"
                  className="flex-1 text-center bg-navy text-white font-bold py-3.5 rounded-xl hover:bg-navy-dark transition-colors text-sm"
                >
                  견적 문의하기
                </Link>
                <a
                  href="https://pf.kakao.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-navy text-navy font-bold py-3.5 rounded-xl hover:bg-navy hover:text-white transition-colors text-sm"
                >
                  카카오 채널
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
