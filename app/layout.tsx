import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "(주)대일테크 | 생명과학 장비 & 병원·약국 자동화 토탈 솔루션",
  description:
    "생명과학 실험 장비, 연구소 장비, 제약·바이오 장비, 병원·약국 자동화 시스템, 온도 모니터링 시스템을 제공하는 B2B 토탈 솔루션 전문 기업 (주)대일테크입니다.",
  keywords:
    "대일테크, CO2 인큐베이터, 생물안전작업대, 병원자동화, 약국자동화, 온도모니터링, 제약바이오장비",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
