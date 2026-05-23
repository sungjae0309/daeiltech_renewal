"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/mockData";
import Badge from "@/components/ui/Badge";

const TABS = [
  { id: "all", label: "추천 제품" },
  { id: "incubator", label: "배양기기" },
  { id: "freezer", label: "냉동·보존" },
  { id: "hospital-auto", label: "자동화 시스템" },
  { id: "monitoring", label: "모니터링" },
];

export default function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const displayed =
    activeTab === "all"
      ? products.filter((p) => p.isFeatured).slice(0, 4)
      : products.filter((p) => p.categoryId === activeTab).slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
            Featured Products
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
            전문가가 선택한 검증된 장비
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto">
            국내외 연구기관과 의료기관이 신뢰하는 제품을 소개합니다.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-navy text-white shadow-md"
                  : "bg-surface text-text-muted hover:text-navy hover:bg-surface-dark"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayed.length > 0 ? (
            displayed.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white border border-border rounded-2xl overflow-hidden card-hover flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 bg-surface overflow-hidden">
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
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <span className="text-xs text-text-muted font-medium">{product.brand}</span>
                  <h3 className="text-sm font-bold text-navy leading-snug group-hover:text-brand transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed line-clamp-2 flex-1">
                    {product.shortDescription}
                  </p>
                  <div className="pt-3 border-t border-border flex items-center justify-between mt-auto">
                    <span className="text-xs text-brand font-semibold">자세히 보기</span>
                    <svg className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-4 text-center py-16 text-text-muted">
              해당 카테고리의 제품을 준비 중입니다.
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-navy font-semibold border-2 border-navy px-8 py-3.5 rounded-xl hover:bg-navy hover:text-white transition-all duration-200"
          >
            전체 제품 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
