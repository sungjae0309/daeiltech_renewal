"use client";

import { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { products, categories, solutions } from "@/lib/mockData";
import Badge from "@/components/ui/Badge";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initCategory = searchParams.get("category") || "all";
  const initSolution = searchParams.get("solution") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initCategory);
  const [selectedSolution, setSelectedSolution] = useState(initSolution);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch =
        selectedCategory === "all" || p.categoryId === selectedCategory;
      const solMatch =
        selectedSolution === "all" || p.solutionIds.includes(selectedSolution);
      const searchMatch =
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase()) ||
        p.model.toLowerCase().includes(search.toLowerCase());
      return catMatch && solMatch && searchMatch;
    });
  }, [selectedCategory, selectedSolution, search]);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="container-main">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Products
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            전체 제품
          </h1>
          <p className="text-slate-300 text-base mb-8">
            생명과학 실험장비부터 병원·약국 자동화 시스템까지 — 대일테크의 전체 제품 라인업을 검색하세요.
          </p>
          {/* Search */}
          <div className="relative max-w-lg">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="제품명, 브랜드, 모델명 검색..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:bg-white/15 focus:border-white/40 transition-all"
            />
          </div>
        </div>
      </section>

      <div className="bg-surface min-h-screen">
        <div className="container-main py-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filter */}
            <aside className="lg:w-60 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-border p-5 sticky top-24">
                <h2 className="text-sm font-black text-navy uppercase tracking-wider mb-5">
                  필터
                </h2>

                {/* Solution Filter */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                    솔루션
                  </h3>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => setSelectedSolution("all")}
                      className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedSolution === "all"
                          ? "bg-navy text-white font-semibold"
                          : "text-text-main hover:bg-surface"
                      }`}
                    >
                      전체 솔루션
                    </button>
                    {solutions.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSolution(s.id)}
                        className={`text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                          selectedSolution === s.id
                            ? "bg-navy text-white font-semibold"
                            : "text-text-main hover:bg-surface"
                        }`}
                      >
                        <span>{s.icon}</span>
                        <span>{s.shortName}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                    카테고리
                  </h3>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === "all"
                          ? "bg-navy text-white font-semibold"
                          : "text-text-main hover:bg-surface"
                      }`}
                    >
                      전체 카테고리
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === cat.id
                            ? "bg-navy text-white font-semibold"
                            : "text-text-main hover:bg-surface"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset */}
                {(selectedCategory !== "all" || selectedSolution !== "all" || search) && (
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedSolution("all");
                      setSearch("");
                    }}
                    className="mt-5 w-full text-sm text-red-500 font-semibold hover:text-red-700 border border-red-200 rounded-lg py-2 transition-colors"
                  >
                    필터 초기화
                  </button>
                )}
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-5">
                <p className="text-text-muted text-sm">
                  <span className="font-bold text-navy">{filtered.length}개</span>의 제품
                </p>
              </div>

              {filtered.length === 0 ? (
                <div className="bg-white rounded-2xl border border-border p-16 text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-navy font-bold text-lg mb-2">검색 결과가 없습니다</h3>
                  <p className="text-text-muted text-sm">다른 검색어나 필터를 시도해 보세요.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filtered.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="group bg-white border border-border rounded-2xl overflow-hidden card-hover flex flex-col"
                    >
                      <div className="relative h-44 bg-surface overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.isNew && (
                          <div className="absolute top-3 left-3">
                            <Badge variant="teal">NEW</Badge>
                          </div>
                        )}
                        {product.isFeatured && (
                          <div className="absolute top-3 right-3">
                            <Badge variant="blue">추천</Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-5 flex flex-col gap-2 flex-1">
                        <span className="text-xs text-text-muted font-medium">{product.brand}</span>
                        <h3 className="text-sm font-bold text-navy leading-snug group-hover:text-brand transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-xs text-text-muted leading-relaxed line-clamp-2 flex-1">
                          {product.shortDescription}
                        </p>
                        <div className="pt-3 border-t border-border flex items-center justify-between mt-auto">
                          <div className="flex gap-1.5">
                            <a
                              href={product.catalogUrl}
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs text-text-muted hover:text-navy font-medium border border-border rounded-lg px-2.5 py-1 transition-colors"
                            >
                              카탈로그
                            </a>
                          </div>
                          <span className="text-xs text-brand font-semibold flex items-center gap-1">
                            상세보기
                            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Contact CTA */}
              <div className="mt-10 bg-navy rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-5">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    원하는 제품을 찾지 못하셨나요?
                  </h3>
                  <p className="text-slate-300 text-sm">
                    담당자에게 문의하시면 적합한 제품을 찾아드립니다.
                  </p>
                </div>
                <Link
                  href="/contact?type=quote"
                  className="flex-shrink-0 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
                >
                  견적 문의하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="pt-32 min-h-screen flex items-center justify-center"><span className="text-text-muted">로딩 중...</span></div>}>
      <ProductsContent />
    </Suspense>
  );
}
