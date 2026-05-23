import { trustStats, brands } from "@/lib/mockData";

export default function TrustSection() {
  return (
    <section className="bg-navy py-20">
      <div className="container-main">
        {/* Stats */}
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Trust & Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            숫자로 증명하는 전문성
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            30년 이상 대한민국 연구·의료 현장과 함께한 대일테크의 신뢰 지표입니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">
                {stat.value}
                <span className="text-2xl">{stat.unit}</span>
              </div>
              <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-slate-400 text-xs">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-slate-400 text-sm text-center mb-8 font-medium tracking-wide">
            공식 파트너 브랜드
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl h-14 flex items-center justify-center transition-colors px-2"
                title={brand.name}
              >
                <span className="text-white/60 hover:text-white text-xs font-bold text-center leading-tight transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
