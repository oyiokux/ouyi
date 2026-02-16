import React from 'react';
import { Button } from '@/components/ui/Button';
import { MarketTicker } from '@/components/MarketTicker';
import { Globe, Zap, Shield, Layers, Lock, CheckCircle2, ExternalLink, Activity } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '欧易 OKX | 全球领先的数字资产交易平台 | 官网入口',
  description: '欧易 OKX 为全球 5,000 万用户提供安全、极速的数字资产交易服务。支持比特币、以太坊及 Web3 生态，助您轻松探索加密世界，畅享极致交易体验。',
  keywords: '欧易, OKX, 比特币交易, 加密货币, 数字资产, 区块链',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: '欧易 OKX | 全球领先的数字资产交易平台',
            url: 'https://oyiokux.github.io/ouyi',
            description: '欧易 OKX 为全球 5,000 万用户提供安全、极速的数字资产交易服务。支持比特币、以太坊及 Web3 生态。',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://oyiokux.github.io/ouyi/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 border-b border-zinc-900/50 overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left Column: Text */}
          <div className="animate-fade-in flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              官方通道 • 实时更新
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              欧易交易所(OKX)<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">官网访问入口</span>
            </h1>

            <p className="text-lg text-zinc-400 mb-10 max-w-lg leading-relaxed text-justify sm:text-center">
              欧易 OKX 为全球 5,000 万用户提供安全、极速的数字资产交易服务。支持比特币、以太坊及 Web3 生态，助您轻松探索加密世界，畅享极致交易体验。
            </p>

            <div className="flex justify-center w-full">
              <Button
                size="lg"
                href="https://okxcexcn.com"
                target="_blank"
                className="min-w-[180px] h-14 text-lg bg-white text-black hover:bg-zinc-200 border-none shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-full font-bold tracking-wide"
              >
                欧易官方入口
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Mockup - More Organic */}
          <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800/60 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              {/* Header Mock */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-6">
                  <div className="h-2 w-16 bg-zinc-700/50 rounded-full"></div>
                  <div className="h-2 w-16 bg-zinc-700/50 rounded-full"></div>
                </div>
                <div className="h-8 px-2 bg-blue-600 rounded-full flex items-center justify-center min-w-[32px]">
                  <span className="text-[10px] font-bold text-white tracking-widest leading-none">OKX</span>
                </div>
              </div>
              {/* Main Number */}
              <div className="mb-8">
                <div className="text-zinc-500 text-sm mb-2">BTC / USDT</div>
                <div className="flex items-baseline gap-4">
                  <div className="text-5xl font-bold text-white tracking-tight font-mono">64,230.50</div>
                  <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm font-medium">+2.4%</div>
                </div>
              </div>
              {/* Abstract Chart */}
              <div className="h-32 w-full flex items-end justify-between gap-1">
                {[40, 65, 55, 78, 92, 85, 110, 95, 120, 105, 130, 115, 88, 70, 90, 100].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-full bg-gradient-to-t from-blue-900/40 to-blue-500/80 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                  ></div>
                ))}
              </div>
            </div>
            {/* Decorative Elements behind */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      <MarketTicker />

      {/* Feature Section - Cards with slight depth */}
      <div className="py-24 bg-black">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">值得信赖的加密资产交易平台</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">欧易 OKX 始终将用户资产安全放在首位，通过领先的技术架构与严格的风控体系，为全球用户打造安全、稳定、可信的数字金融环境。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">银行级风控体系</h3>
              <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                采用多重签名冷钱包技术，实现冷热钱包物理隔离，有效防止黑客攻击。OKX 率先在行业内推行 100% 储备金证明 (POR)，并每月定期公布审计报告，确保每一分用户资产都公开透明、有据可查。
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">新一代撮合引擎</h3>
              <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                自主研发的第三代高性能撮合系统，支持微秒级响应与海量并发处理。无论市场行情如何剧烈波动，系统始终保持 99.99% 的可用性，确保您的每一笔交易都能快速、准确地达成，告别卡顿与延迟。
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">全球化本地服务</h3>
              <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                服务网络覆盖全球 200 多个国家和地区，支持多种法定货币与语言。我们提供 7x24 小时全天候专业客服支持，无论是新手入门还是专业交易问题，都能得到及时响应与解决。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Content Section - Better Typography */}
      <div className="py-24 border-t border-zinc-900/50">
        <div className="max-w-[1000px] mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-zinc-500" />
                完整的一站式产品生态
              </h2>
              <p className="text-zinc-400 leading-relaxed text-justify mb-6">
                欧易不仅是顶尖的加密货币交易所，更是通往 Web3 世界的门户。我们提供从基础的币币交易、法币买币，到进阶的杠杆合约、期权交易以及策略交易机器人等全方位金融服务。同时，内置的 OKX Web3 钱包让您一键探索 DeFi、NFT 市场及 DApp 应用，轻松管理多链资产，体验去中心化金融的无限可能。
              </p>
              <ul className="space-y-3">
                {['现货与衍生品交易：深度极佳，流动性充沛', 'Web3 钱包：异构多链，私钥自持', '赚币理财：稳健增值，灵活存取', '策略广场：大神策略，一键跟单'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-blue-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Lock className="w-5 h-5 text-zinc-500" />
                行业领先的安全架构
              </h2>
              <p className="text-zinc-400 leading-relaxed text-justify mb-6">
                安全是欧易的立身之本。我们利用大数据与 AI 技术构建了行业领先的风控系统（Risk Shield），能够实时识别并阻断异常登录与可疑交易。我们的冷热钱包分离机制与私钥离线存储方案，使得 OKX 平台在运营十余年间从未发生过用户资产被盗事件。
              </p>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-zinc-500" />
                为什么选择欧易 OKX？
              </h2>
              <p className="text-zinc-400 leading-relaxed text-justify">
                作为加密行业的领军者，欧易 OKX 始终坚持技术创新与用户至上。我们不仅拥有行业最全的交易品类与最深的市场流动性，更致力于推动区块链技术的普及与应用。选择欧易，即是选择了一个安全、专业、开放的数字资产管理伙伴。
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/30 rounded-2xl p-8 border border-zinc-800/50 text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">准备好开始您的加密之旅了吗？</h2>
            <p className="text-zinc-500 mb-8 max-w-xl mx-auto">
              全球数千万投资者的共同选择。立即下载欧易 App，体验更安全、更智能的数字资产交易服务，开启财富增长新篇章。
            </p>
            <Button
              href="https://ouyicex.com"
              target="_blank"
              className="bg-white text-black hover:bg-zinc-200 px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              欧易下载中心
            </Button>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="https://www.okx.com/cn/join?channelId=ACE528829"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-500 hover:text-white transition-colors text-sm font-medium group"
            >
              欧易国际官网
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <span className="text-[10px] text-zinc-600 font-mono border border-zinc-800 rounded px-1.5 py-0.5 w-fit bg-zinc-900/50">
              需能够访问的国际网络环境
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
