import Image from "next/image";
import Link from "next/link";
import { solutions, getProductsBySolution } from "@/lib/mockData";

export const metadata = {
  title: "솔루션 | 대일테크",
  description:
    "세포 배양, 제약·바이오, 병원 약제 자동화, 약국 자동화, 온도 모니터링까지 — 대일테크의 5가지 솔루션을 확인하세요.",
};

const colorMap: Record<string, { gradient: string; badge: string; border: string; icon: string }> = {
  blue: {
    gradient: "from-blue-50 to-surface",
    badge: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    icon: "bg-blue-100",
  },
  green: {
    gradient: "from-emerald-50 to-surface",
    badge: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    icon: "bg-emerald-100",
  },
  teal: {
    gradient: "from-teal-50 to-surface",
    badge: "bg-teal-100 text-teal-700",
    border: "border-teal-200",
    icon: "bg-teal-100",
  },
  orange: {
    gradient: "from-orange-50 to-surface",
    badge: "bg-orange-100 text-orange-700",
    border: "border-orange-200",
    icon: "bg-orange-100",
  },
  purple: {
    gradient: "from-purple-50 to-surface",
    badge: "bg-purple-100 text-purple-700",
    border: "border-purple-200",
    icon: "bg-purple-100",
  },
};

export default function SolutionsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              고객의 현장에 맞는
              <br />
              솔루션을 제안합니다
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              제품 단순 나열이 아닌 고객의 업무 환경과 니즈를 파악하여
              최적의 장비 조합을 솔루션으로 제안합니다.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap gap-3 mt-10">
            {solutions.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all"
              >
                <span>{s.icon}</span>
                <span>{s.shortName}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <div className="bg-white">
        {solutions.map((solution, idx) => {
          const colors = colorMap[solution.color] || colorMap.blue;
          const relatedProducts = getProductsBySolution(solution.id).slice(0, 3);
          const isEven = idx % 2 === 0;

          return (
            <section
              key={solution.id}
              id={solution.id}
              className={`py-20 ${isEven ? "bg-white" : "bg-surface"}`}
            >
              <div className="container-main">
                <div className={`flex flex-col lg:flex-row gap-12 items-start ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <div className="lg:w-5/12 flex-shrink-0">
                    <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96 shadow-xl">
                      <Image
                        src={solution.heroImage}
                        alt={solution.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-5 left-5">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold ${colors.badge}`}>
                          <span>{solution.icon}</span>
                          <span>{solution.shortName}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${colors.badge}`}>
                      대상: {solution.targetCustomer}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-navy mb-4 leading-tight">
                      {solution.name}
                    </h2>
                    <p className="text-text-muted text-base leading-relaxed mb-8">
                      {solution.longDescription}
                    </p>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-sm font-bold text-navy mb-4 uppercase tracking-wider">
                          주요 장비
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {relatedProducts.map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.id}`}
                              className={`group bg-white border-2 ${colors.border} rounded-xl p-4 hover:shadow-md transition-all`}
                            >
                              <div className="text-xs font-semibold text-text-muted mb-1">
                                {product.brand}
                              </div>
                              <div className="text-sm font-bold text-navy group-hover:text-brand transition-colors leading-snug">
                                {product.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/products?solution=${solution.id}`}
                        className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-navy-dark transition-colors"
                      >
                        관련 제품 전체 보기
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <Link
                        href="/contact?type=quote"
                        className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3.5 rounded-xl hover:bg-navy hover:text-white transition-colors"
                      >
                        솔루션 상담 문의
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="bg-navy py-20">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            원하시는 솔루션이 없으신가요?
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-lg mx-auto">
            대일테크는 고객의 업무 환경에 맞춘 맞춤형 솔루션을 제안합니다.
            전문 담당자와 상담해 보세요.
          </p>
          <Link
            href="/contact?type=quote"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-colors"
          >
            맞춤 솔루션 문의하기
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
