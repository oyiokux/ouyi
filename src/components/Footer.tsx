import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-bold text-sm">OK</div>
                        <span className="text-2xl font-bold text-white tracking-tighter">OKX</span>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <h4 className="text-white font-bold mb-6">平台服务</h4>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li><a href="#" className="hover:text-white transition-colors">快捷买币</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">行情数据</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">专业交易</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Web3 钱包</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">支持中心</h4>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">API 文档</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">费率标准</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">节点计划</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-2">
                        <h4 className="text-white font-bold mb-6">风险提示</h4>
                        <p className="text-zinc-600 text-xs leading-relaxed max-w-lg text-justify">
                            数字资产是一种高风险的投资方式，价格波动剧烈，可能在短时间内出现大幅上涨或下跌。在决定投资前，请您务必充分了解相关风险，根据自身的风险承受能力和投资经验，理性判断，谨慎投资。欧易平台仅提供交易撮合服务，不对任何投资行为承担担保、赔偿等责任。
                        </p>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-xs">
                        &copy; {new Date().getFullYear()} OKX. All rights reserved. | 欧易数字资产交易平台
                    </p>
                </div>
            </div>
        </footer>
    );
};
