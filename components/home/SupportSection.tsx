import Link from "next/link";
import { supportFeatures } from "@/lib/mockData";

export default function SupportSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* Left */}
          <div className="lg:w-96 flex-shrink-0">
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
              After-Sales Support
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-5 leading-tight">
              구매 이후에도
              <br />
              함께합니다
            </h2>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              장비 설치부터 정기 점검, 긴급 수리까지 — 대일테크의 전담 지원팀이 신속하게 대응합니다.
              B2B 고객에게 가장 중요한 것은 장비 도입 이후의 신뢰입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact?type=as"
                className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-navy-dark transition-colors"
              >
                A/S 신청하기
              </Link>
              <Link
                href="/contact?type=quote"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3.5 rounded-xl hover:bg-navy hover:text-white transition-colors"
              >
                지원팀 문의
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {supportFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface rounded-2xl p-7 border border-border hover:border-brand hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-navy font-bold text-base mb-2">{feature.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
