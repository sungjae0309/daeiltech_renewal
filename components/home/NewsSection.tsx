import Link from "next/link";
import Image from "next/image";
import { newsItems } from "@/lib/mockData";
import Badge from "@/components/ui/Badge";

const categoryVariant: Record<string, "blue" | "teal" | "orange"> = {
  공지: "blue",
  뉴스: "teal",
  이벤트: "orange",
};

export default function NewsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-main">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
              News & Notice
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-navy">
              최신 소식
            </h2>
          </div>
          <Link
            href="/contact#notice"
            className="hidden md:flex items-center gap-1 text-navy font-semibold text-sm hover:text-brand transition-colors"
          >
            전체 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className={`group bg-white rounded-2xl overflow-hidden border border-border card-hover flex flex-col ${
                index === 0 ? "md:col-span-1" : ""
              }`}
            >
              {/* Image */}
              {item.image && (
                <div className="relative h-44 overflow-hidden bg-surface">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={categoryVariant[item.category] || "blue"}>
                      {item.category}
                    </Badge>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <time className="text-xs text-text-muted">{item.date}</time>
                <h3 className="text-sm font-bold text-navy leading-snug group-hover:text-brand transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed line-clamp-3 flex-1">
                  {item.summary}
                </p>
                <div className="text-xs text-brand font-semibold flex items-center gap-1 mt-1">
                  자세히 보기
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/contact#notice"
            className="text-brand font-semibold text-sm hover:underline"
          >
            전체 공지 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
