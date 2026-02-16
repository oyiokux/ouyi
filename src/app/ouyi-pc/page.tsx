import React from 'react';
import { Monitor, Terminal, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '欧易 PC 客户端下载 | 欧易交易所桌面版',
    description: '专为高频交易者与专业分析师打造的欧易桌面端旗舰应用。欧易 PC 客户端提供更强大的图表工具与毫秒级响应速度。',
};

export default function PCPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center bg-black">
            <div className="max-w-6xl w-full">

                <div className="flex flex-col items-center text-center mb-20 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium text-purple-400 bg-purple-400/10 border border-purple-400/20 rounded-full">
                        <Cpu className="w-3 h-3" /> 专业版终端
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                        欧易桌面客户端
                    </h1>
                    <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed mb-10">
                        专为高频交易者与专业分析师打造的桌面端旗舰应用。欧易 PC 客户端集成了更强大的原生图表工具、更低的 API 延迟以及多屏显示支持。在瞬息万变的加密市场中，为您提供毫秒级的响应速度与沉浸式的交易环境，助您精准捕捉每一个市场机会。
                    </p>
                    <Button
                        size="lg"
                        href="https://okxcexcn.com"
                        target="_blank"
                        className="bg-white text-black hover:bg-zinc-200 px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    >
                        立即下载 PC 客户端
                    </Button>
                </div>

                {/* Hero Card */}
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-10 overflow-hidden mb-24">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">桌面级极致性能</h2>
                                <p className="text-zinc-400 leading-relaxed text-justify">
                                    摆脱浏览器的性能瓶颈，欧易桌面端充分利用本地硬件加速，即便是在行情剧烈波动、数据量巨大的情况下，依然能保持 K 线图表的流畅缩放与订单的极速撮合。无论是进行复杂的盘面技术分析，还是执行高频量化策略，都能游刃有余。
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    Windows 10 / 11 (64-bit)
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    macOS (支持 Intel 芯片及 Apple Silicon M1/M2/M3)
                                </div>
                            </div>

                            <div className="pt-4">
                                <div className="mt-4 text-sm text-zinc-500 font-mono">
                                    官方高速下载通道 • 安全无毒
                                </div>
                            </div>
                        </div>

                        {/* Abstract Visual Representation of a Screen */}
                        <div className="bg-black/50 border border-zinc-700/50 rounded-xl p-2 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 h-64 flex flex-col justify-between">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-1/3 bg-zinc-700 rounded"></div>
                                    <div className="h-32 w-full bg-gradient-to-r from-zinc-800 to-zinc-800/50 rounded flex items-center justify-center text-zinc-600 text-xs">
                                        TradingView Pro Chart Integration
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="h-2 w-1/4 bg-zinc-700 rounded"></div>
                                        <div className="h-2 w-1/4 bg-zinc-700 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
                        <Terminal className="w-8 h-8 text-zinc-300 mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">专业绘图工具</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">内置 TradingView 高级图表功能，支持数百种技术指标、画线工具及自定义脚本。支持多套看盘模版云端保存，随时随地调用您的分析系统。</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
                        <Monitor className="w-8 h-8 text-zinc-300 mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">多屏沉浸体验</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">支持多窗口独立弹出，您可以将 K 线图、深度图、最新成交及持仓列表拖拽至不同显示器，打造如华尔街交易员般的专业工作台。</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
                        <Cpu className="w-8 h-8 text-zinc-300 mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">更低网络延迟</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">采用优化的网络传输协议，直接与交易服务器通信，削减了浏览器中间层的损耗。相比网页版，行情推送更及时，下单响应速度提升 30% 以上。</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
