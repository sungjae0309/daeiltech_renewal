import Link from "next/link";

const footerLinks = {
  솔루션: [
    { label: "세포 배양 & 생명과학", href: "/solutions#cell-culture" },
    { label: "제약·바이오 공정", href: "/solutions#pharma-biotech" },
    { label: "병원 약제 자동화", href: "/solutions#hospital-pharmacy" },
    { label: "약국 자동화", href: "/solutions#pharmacy-auto" },
    { label: "온도·환경 모니터링", href: "/solutions#monitoring" },
  ],
  제품: [
    { label: "배양기기", href: "/products?category=incubator" },
    { label: "냉동·보존 장비", href: "/products?category=freezer" },
    { label: "제약용 챔버", href: "/products?category=chamber" },
    { label: "모니터링 시스템", href: "/products?category=monitoring" },
    { label: "병원·약국 자동화", href: "/products?category=hospital-auto" },
  ],
  고객지원: [
    { label: "견적 문의", href: "/contact?type=quote" },
    { label: "A/S 신청", href: "/contact?type=as" },
    { label: "카탈로그 다운로드", href: "/contact?type=catalog" },
    { label: "공지사항", href: "/contact#notice" },
  ],
  회사소개: [
    { label: "회사 개요", href: "/about" },
    { label: "연혁", href: "/about#history" },
    { label: "취급 브랜드", href: "/about#brands" },
    { label: "오시는 길", href: "/about#location" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <span className="text-navy font-black text-lg leading-none">D</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-lg tracking-tight">대일테크</span>
                <span className="text-slate-400 text-[10px] tracking-widest uppercase">Daeiltech</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              생명과학 실험 장비 및<br />
              병원·약국 자동화 시스템<br />
              토탈 솔루션 전문 기업
            </p>

            {/* SNS */}
            <div className="flex gap-3 mt-6">
              {[
                { label: "블로그", icon: "B" },
                { label: "유튜브", icon: "Y" },
                { label: "카카오", icon: "K" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-navy-light hover:bg-brand flex items-center justify-center text-white text-xs font-bold transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold mb-4 text-sm">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-navy-light">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-slate-400">
            <span>📞 대표: 02-0000-0000</span>
            <span>📠 팩스: 02-0000-0001</span>
            <span>✉️ 이메일: info@daeiltech.co.kr</span>
            <span>🕐 영업시간: 월~금 09:00 ~ 18:00 (토·일·공휴일 휴무)</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container-main py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>
            (주)대일테크 | 사업자등록번호: 000-00-00000 | 대표: 홍길동 |
            서울시 ○○구 ○○로 000
          </p>
          <p>© 2026 Daeiltech Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
