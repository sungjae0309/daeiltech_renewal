"use client";

import { useState } from "react";

export default function ContactCTASection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-navy py-24">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* Left: Text */}
          <div className="lg:w-1/2 flex-shrink-0">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
              지금 바로
              <br />
              전문가와 상담하세요
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              제품 선택부터 견적, 설치까지 전담 담당자가 도와드립니다.
              부담 없이 문의해 주세요.
            </p>

            {/* Contact Methods */}
            <div className="flex flex-col gap-4">
              {[
                { icon: "📞", label: "전화 문의", value: "02-0000-0000", sub: "월~금 09:00~18:00" },
                { icon: "💬", label: "카카오채널", value: "@대일테크", sub: "실시간 채팅 상담" },
                { icon: "✉️", label: "이메일", value: "info@daeiltech.co.kr", sub: "24시간 접수" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-0.5">{c.label}</div>
                    <div className="text-white font-semibold text-sm">{c.value}</div>
                    <div className="text-slate-500 text-xs">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-3xl">
                    ✅
                  </div>
                  <h3 className="text-navy font-bold text-xl">문의가 접수되었습니다</h3>
                  <p className="text-text-muted text-sm">
                    담당자가 확인 후 빠르게 연락드리겠습니다.
                    <br />
                    영업시간 내 1시간 이내 응대를 원칙으로 합니다.
                  </p>
                  <button
                    onClick={() => { setForm({ name: "", phone: "", message: "" }); setSubmitted(false); }}
                    className="text-brand text-sm font-semibold hover:underline mt-2"
                  >
                    다시 문의하기
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-navy font-bold text-xl mb-6">빠른 문의</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text-main focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                      />
                    </div>
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
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text-main focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-main mb-1.5">
                        문의 내용 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="관심 있는 제품 또는 솔루션을 알려주세요."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text-main focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-navy-dark transition-colors text-base mt-1"
                    >
                      문의 접수하기
                    </button>
                    <p className="text-xs text-text-muted text-center">
                      * 수집된 정보는 문의 처리 목적으로만 사용됩니다.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
