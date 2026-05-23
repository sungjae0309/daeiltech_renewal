"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "솔루션",
    href: "/solutions",
    children: [
      { label: "세포 배양 & 생명과학 연구", href: "/solutions#cell-culture" },
      { label: "제약·바이오 공정", href: "/solutions#pharma-biotech" },
      { label: "병원 약제 자동화", href: "/solutions#hospital-pharmacy" },
      { label: "약국 자동화", href: "/solutions#pharmacy-auto" },
      { label: "온도·환경 모니터링", href: "/solutions#monitoring" },
    ],
  },
  {
    label: "제품",
    href: "/products",
    children: [
      { label: "배양기기", href: "/products?category=incubator" },
      { label: "생물안전 & 클린 장비", href: "/products?category=clean-bench" },
      { label: "냉동·보존 장비", href: "/products?category=freezer" },
      { label: "제약용 챔버 & 오븐", href: "/products?category=chamber" },
      { label: "항온조 & 칠러", href: "/products?category=thermostat" },
      { label: "모니터링 시스템", href: "/products?category=monitoring" },
      { label: "병원·약국 자동화", href: "/products?category=hospital-auto" },
    ],
  },
  {
    label: "취급 브랜드",
    href: "/about#brands",
  },
  {
    label: "회사 소개",
    href: "/about",
    children: [
      { label: "회사 개요", href: "/about" },
      { label: "연혁", href: "/about#history" },
      { label: "오시는 길", href: "/about#location" },
    ],
  },
  {
    label: "고객지원",
    href: "/contact",
    children: [
      { label: "견적 문의", href: "/contact?type=quote" },
      { label: "A/S 신청", href: "/contact?type=as" },
      { label: "공지사항", href: "/contact#notice" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-border"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-navy text-white text-sm">
        <div className="container-main flex justify-between items-center py-2">
          <span className="text-slate-300">
            생명과학 장비 & 병원·약국 자동화 토탈 솔루션
          </span>
          <div className="flex items-center gap-4">
            <a
              href="tel:02-0000-0000"
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <span>📞</span>
              <span>02-0000-0000</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://pf.kakao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <span>💬</span>
              <span>카카오채널</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-lg leading-none">D</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-navy font-black text-lg tracking-tight">대일테크</span>
            <span className="text-text-muted text-[10px] tracking-widest uppercase">
              Daeiltech
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  activeDropdown === item.label
                    ? "text-navy bg-surface"
                    : "text-text-main hover:text-navy hover:bg-surface"
                }`}
              >
                {item.label}
                {item.children && (
                  <svg
                    className="w-3.5 h-3.5 text-text-muted transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-border py-2 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-text-main hover:text-navy hover:bg-surface transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact?type=catalog"
            className="text-sm font-semibold text-text-muted hover:text-navy transition-colors"
          >
            카탈로그
          </Link>
          <Link
            href="/contact?type=quote"
            className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-dark transition-colors"
          >
            견적 문의하기
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg text-text-main hover:bg-surface transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-main py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-semibold text-navy rounded-lg hover:bg-surface"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-text-muted hover:text-navy hover:bg-surface rounded-lg"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-border">
              <Link
                href="/contact?type=quote"
                className="block text-center bg-accent text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-accent-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                견적 문의하기
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
