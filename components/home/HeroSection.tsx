import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1800&q=85"
          alt="연구소 배경"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-main w-full pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">
              B2B 토탈 솔루션 전문 기업
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            연구소부터
            <br />
            병원 약제부까지,
            <br />
            <span className="text-accent">신뢰할 수 있는</span>
            <br />
            장비 파트너
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
            생명과학 실험장비, 제약·바이오 솔루션, 병원·약국 자동화 시스템 —
            30년 이상의 경험으로 고객의 현장을 지원합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              솔루션 살펴보기
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact?type=quote"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-base border border-white/30 transition-all duration-200"
            >
              견적 문의하기
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "30년+", label: "업력" },
              { value: "50개+", label: "취급 브랜드" },
              { value: "1,000곳+", label: "납품 기관" },
              { value: "11개", label: "사업 분야" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-4"
              >
                <div className="text-2xl font-black text-accent">{stat.value}</div>
                <div className="text-slate-300 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs">스크롤</span>
        <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
