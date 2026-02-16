import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';

export const metadata: Metadata = {
  metadataBase: new URL('https://oyiokux.github.io/ouyi'),
  title: {
    default: '欧易 OKX | 全球领先的数字资产交易平台',
    template: '%s | 欧易 OKX',
  },
  description: '欧易 OKX 为全球用户提供安全、极速的数字资产交易服务。支持比特币、以太坊及 Web3 生态。',
  alternates: {
    canonical: './',
  },
  openGraph: {
    siteName: '欧易 OKX',
    type: 'website',
    locale: 'zh_CN',
  },
  verification: {
    google: 'vljRRmq3OONiFR43yFjMW0Rv1FQDsuv7Svxj-2zExoc',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="bg-black text-white min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
