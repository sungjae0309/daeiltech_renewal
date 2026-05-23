import Link from "next/link";
import { solutions } from "@/lib/mockData";
import SectionHeader from "@/components/ui/SectionHeader";

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  blue: {
    bg: "hover:bg-blue-50",
    border: "hover:border-blue-300",
    icon: "bg-blue-100 text-blue-700",
    badge: "bg-blue-600",
  },
  green: {
    bg: "hover:bg-emerald-50",
    border: "hover:border-emerald-300",
    icon: "bg-emerald-100 text-emerald-700",
    badge: "bg-emerald-600",
  },
  teal: {
    bg: "hover:bg-teal-50",
    border: "hover:border-teal-300",
    icon: "bg-teal-100 text-teal-700",
    badge: "bg-teal-600",
  },
  orange: {
    bg: "hover:bg-orange-50",
    border: "hover:border-orange-300",
    icon: "bg-orange-100 text-orange-700",
    badge: "bg-orange-600",
  },
  purple: {
    bg: "hover:bg-purple-50",
    border: "hover:border-purple-300",
    icon: "bg-purple-100 text-purple-700",
    badge: "bg-purple-600",
  },
};

export default function SolutionFinderSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-main">
        <SectionHeader
          label="Solution Finder"
          title="어떤 환경을 구축하고 계신가요?"
          subtitle="원하는 분야를 선택하면 필요한 장비와 솔루션을 바로 안내해 드립니다."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.slice(0, 5).map((solution) => {
            const colors = colorMap[solution.color] || colorMap.blue;
            return (
              <Link
                key={solution.id}
                href={`/solutions#${solution.id}`}
                className={`group bg-white border-2 border-border rounded-2xl p-7 flex flex-col gap-4 transition-all duration-200 card-hover ${colors.bg} ${colors.border}`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${colors.icon} transition-all duration-200`}
                >
                  {solution.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-bold text-navy group-hover:text-navy-dark leading-tight">
                    {solution.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Target Customer */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted">대상:</span>
                  <span className="text-xs font-medium text-navy">
                    {solution.targetCustomer}
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-1 text-brand text-sm font-semibold group-hover:gap-2 transition-all">
                  자세히 보기
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            );
          })}

          {/* All Products CTA Card */}
          <Link
            href="/products"
            className="group bg-navy border-2 border-navy rounded-2xl p-7 flex flex-col justify-between gap-4 transition-all duration-200 hover:bg-navy-dark"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-4">
                📦
              </div>
              <h3 className="text-lg font-bold text-white leading-tight mb-2">
                전체 제품 카탈로그
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                솔루션 분야 외에도 다양한 실험장비 카테고리를 검색하고 탐색하세요.
              </p>
            </div>
            <div className="flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
              전체 제품 보기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
