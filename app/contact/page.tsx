"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { newsItems } from "@/lib/mockData";
import Badge from "@/components/ui/Badge";

type InquiryType = "quote" | "as" | "general" | "catalog";

const typeLabels: Record<InquiryType, string> = {
  quote: "제품 견적 문의",
  as: "A/S 신청",
  general: "일반 문의",
  catalog: "카탈로그 요청",
};

const PRODUCTS_INTEREST = [
  "CO2 인큐베이터",
  "쉐이킹 인큐베이터",
  "생물안전작업대",
  "바이오리액터",
  "-80℃ 초저온 냉동고",
  "약품 안정성 시험 챔버",
  "동결건조기",
  "자동 알약 계수기",
  "IV 자동 조제 시스템",
  "온습도 모니터링 시스템",
  "항온조 / 칠러",
  "기타",
];

const categoryVariant: Record<string, "blue" | "teal" | "orange"> = {
  공지: "blue",
  뉴스: "teal",
  이벤트: "orange",
};

function ContactContent() {
  const searchParams = useSearchParams();
  const initType = (searchParams.get("type") as InquiryType) || "quote";

  const [activeType, setActiveType] = useState<InquiryType>(initType);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="container-main">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            문의하기
          </h1>
          <p className="text-slate-300 text-base">
            견적 문의, A/S 신청, 카탈로그 요청까지 — 전담 담당자가 빠르게 답변 드립니다.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-main">
          <div className="flex flex-col xl:flex-row gap-10">
            {/* Left: Contact Info */}
            <div className="xl:w-80 flex-shrink-0 flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-border p-6">
                <h2 className="text-navy font-black text-base mb-5">빠른 연락 수단</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: "📞", label: "대표 전화", value: "02-0000-0000", sub: "월~금 09~18시" },
                    { icon: "💬", label: "카카오채널", value: "@대일테크", sub: "실시간 채팅" },
                    { icon: "✉️", label: "이메일", value: "info@daeiltech.co.kr", sub: "24시간 접수" },
                  ].map((c) => (
                    <div key={c.label} className="flex gap-3 items-start">
                      <div className="w-9 h-9 bg-surface rounded-xl flex items-center justify-center text-base flex-shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <div className="text-xs text-text-muted">{c.label}</div>
                        <div className="text-sm font-bold text-navy">{c.value}</div>
                        <div className="text-xs text-text-muted">{c.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy rounded-2xl p-6">
                <h3 className="text-white font-bold text-sm mb-3">문의 처리 안내</h3>
                <ul className="flex flex-col gap-2 text-slate-300 text-xs leading-relaxed">
                  <li>• 영업시간 내 접수된 문의는 1시간 내 응대를 원칙으로 합니다.</li>
                  <li>• 긴급 A/S의 경우 전화 또는 카카오채널로 직접 연락해 주세요.</li>
                  <li>• 카탈로그는 이메일로 발송됩니다.</li>
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl border border-border overflow-hidden">
                {/* Type Tabs */}
                <div className="flex border-b border-border overflow-x-auto">
                  {(Object.keys(typeLabels) as InquiryType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveType(type)}
                      className={`flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                        activeType === type
                          ? "border-navy text-navy"
                          : "border-transparent text-text-muted hover:text-navy"
                      }`}
                    >
                      {typeLabels[type]}
                    </button>
                  ))}
                </div>

                <div className="p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-4xl">
                        ✅
                      </div>
                      <div>
                        <h3 className="text-navy font-black text-2xl mb-2">
                          문의가 접수되었습니다
                        </h3>
                        <p className="text-text-muted text-base">
                          담당자가 확인 후 빠르게 연락드리겠습니다.
                          <br />
                          영업시간 내 1시간 이내 응대를 원칙으로 합니다.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setForm({ name: "", company: "", phone: "", email: "", product: "", message: "", agree: false });
                          setSubmitted(false);
                        }}
                        className="text-brand text-sm font-bold hover:underline"
                      >
                        다시 문의하기
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-text-main mb-1.5">
                            이름 / 담당자명 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="홍길동"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-text-main mb-1.5">
                            기관 / 회사명
                          </label>
                          <input
                            type="text"
                            placeholder="○○대학교 / ○○제약"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-text-main mb-1.5">
                            연락처 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="010-0000-0000"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-text-main mb-1.5">
                            이메일
                          </label>
                          <input
                            type="email"
                            placeholder="example@company.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                          />
                        </div>
                      </div>

                      {(activeType === "quote" || activeType === "as") && (
                        <div>
                          <label className="block text-sm font-semibold text-text-main mb-1.5">
                            관심 제품
                          </label>
                          <select
                            value={form.product}
                            onChange={(e) => setForm({ ...form, product: e.target.value })}
                            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all bg-white"
                          >
                            <option value="">제품을 선택해 주세요</option>
                            {PRODUCTS_INTEREST.map((p) => (
                              <option key={p} value={p}>{p}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-semibold text-text-main mb-1.5">
                          문의 내용 <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder={
                            activeType === "quote"
                              ? "원하시는 제품, 수량, 납기, 특이사항 등을 자유롭게 작성해 주세요."
                              : activeType === "as"
                              ? "장비명, 모델명, 증상, 구매일 등을 적어주시면 빠르게 처리해 드립니다."
                              : "문의하실 내용을 자유롭게 작성해 주세요."
                          }
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
                        />
                      </div>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={form.agree}
                          onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                          className="mt-0.5 w-4 h-4 accent-navy flex-shrink-0"
                        />
                        <span className="text-sm text-text-muted">
                          수집된 개인정보(이름, 연락처, 이메일)는 문의 처리 목적으로만 사용되며 처리 완료 후 즉시 파기됩니다.{" "}
                          <span className="text-red-500 font-semibold">동의합니다. (필수)</span>
                        </span>
                      </label>

                      <button
                        type="submit"
                        className="w-full bg-navy text-white font-black py-4 rounded-xl hover:bg-navy-dark transition-colors text-base mt-1"
                      >
                        문의 접수하기
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section id="notice" className="bg-white py-16 border-t border-border">
        <div className="container-main">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-black text-navy">공지사항 & 뉴스</h2>
          </div>
          <div className="flex flex-col gap-3">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-5 bg-surface rounded-xl px-6 py-4 border border-border hover:border-brand transition-colors group cursor-pointer"
              >
                <Badge variant={categoryVariant[item.category] || "blue"}>{item.category}</Badge>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-navy group-hover:text-brand transition-colors line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5 line-clamp-1">{item.summary}</p>
                </div>
                <time className="text-xs text-text-muted flex-shrink-0">{item.date}</time>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-32 min-h-screen flex items-center justify-center"><span className="text-text-muted">로딩 중...</span></div>}>
      <ContactContent />
    </Suspense>
  );
}
