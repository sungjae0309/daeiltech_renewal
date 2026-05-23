"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  getProductById,
  getCategoryById,
  products,
} from "@/lib/mockData";
import Badge from "@/components/ui/Badge";

const TABS = ["제품 소개", "스펙 / 규격", "관련 제품"];

export default function ProductDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const product = getProductById(id);

  const [activeTab, setActiveTab] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", inquiry: "" });

  if (!product) return notFound();

  const category = getCategoryById(product.categoryId);
  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border pt-24 pb-0">
        <div className="container-main py-4">
          <nav className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/" className="hover:text-navy transition-colors">홈</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-navy transition-colors">제품</Link>
            <span>/</span>
            {category && (
              <>
                <Link href={`/products?category=${category.id}`} className="hover:text-navy transition-colors">
                  {category.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-navy font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Info */}
      <section className="bg-surface py-10">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Image */}
            <div className="lg:w-5/12 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96 bg-white border border-border shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="teal">NEW</Badge>
                  </div>
                )}
              </div>
              {/* Thumbnail row placeholder */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-3 mt-3">
                  {product.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-border cursor-pointer hover:border-brand transition-colors"
                    >
                      <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-bold text-brand">{product.brand}</span>
                <span className="text-border">|</span>
                <span className="text-sm text-text-muted">{product.model}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-navy mb-4 leading-snug">
                {product.name}
              </h1>
              <p className="text-text-muted text-base leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Key Features */}
              <div className="bg-white rounded-2xl border border-border p-5 mb-6">
                <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-4">
                  주요 특징
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-text-main">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={product.catalogUrl}
                  className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold px-6 py-3.5 rounded-xl hover:bg-navy-dark transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  카탈로그 다운로드
                </a>
                <Link
                  href={`/contact?type=quote&product=${product.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3.5 rounded-xl transition-colors"
                >
                  견적 문의하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-t border-border">
        <div className="container-main">
          {/* Tab Bar */}
          <div className="flex gap-0 border-b border-border">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-4 text-sm font-semibold border-b-2 transition-all ${
                  activeTab === i
                    ? "border-navy text-navy"
                    : "border-transparent text-text-muted hover:text-navy"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-10">
            {/* Tab 0: 제품 소개 */}
            {activeTab === 0 && (
              <div className="max-w-3xl">
                <p className="text-text-main text-base leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Tab 1: 스펙 */}
            {activeTab === 1 && (
              <div className="max-w-2xl">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-surface">
                      <th className="text-left px-5 py-3 text-xs font-black text-navy uppercase tracking-wider border border-border w-40">
                        항목
                      </th>
                      <th className="text-left px-5 py-3 text-xs font-black text-navy uppercase tracking-wider border border-border">
                        사양
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-surface"}
                      >
                        <td className="px-5 py-3.5 text-sm font-semibold text-navy border border-border">
                          {spec.label}
                        </td>
                        <td className="px-5 py-3.5 text-sm text-text-main border border-border">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-text-muted mt-4">
                  * 사양은 예고 없이 변경될 수 있습니다. 정확한 사양은 담당자에게 문의해 주세요.
                </p>
              </div>
            )}

            {/* Tab 2: 관련 제품 */}
            {activeTab === 2 && (
              <div>
                {relatedProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {relatedProducts.map((rp) => (
                      <Link
                        key={rp.id}
                        href={`/products/${rp.id}`}
                        className="group bg-surface border border-border rounded-2xl overflow-hidden card-hover flex flex-col"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <Image src={rp.image} alt={rp.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-4 flex flex-col gap-1.5">
                          <span className="text-xs text-text-muted">{rp.brand}</span>
                          <h3 className="text-sm font-bold text-navy group-hover:text-brand transition-colors line-clamp-2">{rp.name}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-text-muted text-sm">관련 제품이 없습니다.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Inquiry */}
      <section className="bg-surface py-16 border-t border-border">
        <div className="container-main max-w-xl">
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <h3 className="text-navy font-black text-xl mb-2">이 제품이 궁금하신가요?</h3>
            <p className="text-text-muted text-sm mb-6">
              담당자가 빠르게 답변 드립니다. 재고·납기·맞춤 견적 등 무엇이든 문의하세요.
            </p>
            {submitted ? (
              <div className="text-center py-6">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-navy font-bold">문의가 접수되었습니다. 곧 연락 드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  required
                  placeholder="이름"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
                />
                <input
                  type="tel"
                  required
                  placeholder="연락처"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
                />
                <textarea
                  rows={3}
                  placeholder={`${product.name}에 대해 문의드립니다.`}
                  value={form.inquiry}
                  onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                  className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 resize-none"
                />
                <button
                  type="submit"
                  className="bg-navy text-white font-bold py-3.5 rounded-xl hover:bg-navy-dark transition-colors"
                >
                  문의 접수하기
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
