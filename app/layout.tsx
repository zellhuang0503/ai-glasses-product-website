import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 眼鏡｜第一人稱即時錄影",
  description: "為行銷現場打造的 AI 眼鏡：高畫質、低延遲、長時間工作。立即預約線下定點免費體驗。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
