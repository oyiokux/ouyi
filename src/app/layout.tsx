import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '欧易 OKX | 全球领先的数字资产交易平台',
  description: '欧易 OKX 为全球用户提供安全、极速的数字资产交易服务。支持比特币、以太坊及 Web3 生态。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
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
