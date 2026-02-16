import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '欧易网页版 | 欧易 OKX 官网 | 在线交易',
    description: '打破设备限制，无需安装任何软件。欧易网页版通过浏览器即可直接访问，为您提供与客户端一致的完整交易功能。',
};

export default function WebPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center bg-black">
            <div className="max-w-4xl w-full text-center">

                <div className="mb-20 animate-fade-in">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <Globe className="w-8 h-8 text-blue-500" />
                    </div>
                    <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
                        欧易网页版
                    </h1>
                    <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        打破设备限制，无需安装任何软件。欧易网页版通过浏览器即可直接访问，为您提供与客户端一致的完整交易功能。无论是在 Windows、macOS 还是 Linux 系统上，您都能享受到安全、便捷的数字资产管理服务，即刻开启您的 Web3 之旅。
                    </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 max-w-2xl mx-auto mb-20 relative overflow-hidden group hover:border-zinc-600 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                    <div className="text-sm font-medium text-zinc-500 mb-4 tracking-wider">官方推荐交易入口</div>
                    <div className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-8 group-hover:text-blue-200 transition-colors">
                        进入网页版交易
                    </div>

                    <Button size="lg" href="https://okxcexcn.com" target="_blank" className="bg-white text-black hover:bg-zinc-200 rounded-full px-10 font-bold shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                        立即访问 <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
                    <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-colors">
                        <h4 className="text-white font-bold mb-3 text-lg">功能全覆盖</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            网页版支持欧易平台所有业务板块，包括基础的币币交易、C2C 法币买卖、杠杆合约交易，以及进阶的金融理财（Earn）、借贷服务与 Jumpstart 新币首发。无需下载 App，一个浏览器即可管理您的全方位加密资产。
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-colors">
                        <h4 className="text-white font-bold mb-3 text-lg">便捷接入与兼容性</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            完美适配 Chrome、Edge、Safari、Firefox 等主流浏览器。无论您是在办公室使用台式机，还是出差途中使用笔记本，只要有网络连接，打开网址即可登录账户，随时随地查看行情、管理订单。
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
