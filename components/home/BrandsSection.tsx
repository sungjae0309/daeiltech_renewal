import Link from "next/link";
import { brands } from "@/lib/mockData";
import SectionHeader from "@/components/ui/SectionHeader";

export default function BrandsSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container-main">
        <SectionHeader
          label="Official Partners"
          title="세계 선도 브랜드의 공식 파트너"
          subtitle="대일테크는 글로벌 생명과학 장비 브랜드와의 공식 파트너십을 통해 최고 품질의 제품을 국내 연구·의료 현장에 공급합니다."
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-border rounded-xl h-20 flex flex-col items-center justify-center gap-1 px-3 hover:border-brand hover:shadow-md transition-all duration-200"
              title={`${brand.name} (${brand.country})`}
            >
              <span className="text-sm font-bold text-navy group-hover:text-brand transition-colors text-center leading-tight">
                {brand.name}
              </span>
              <span className="text-[10px] text-text-muted">{brand.country}</span>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about#brands"
            className="text-brand font-semibold text-sm hover:underline inline-flex items-center gap-1"
          >
            전체 취급 브랜드 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
