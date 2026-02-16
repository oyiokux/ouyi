'use client';
import React from 'react';
import Image from 'next/image';
import { MOCK_COINS } from '@/constants';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import { ArrowRight } from 'lucide-react';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/ouyi' : '';

// Client-side only chart wrapper
const ClientChart = ({ data, color }: { data: any[], color: string }) => {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <YAxis domain={['dataMin', 'dataMax']} hide />
                <Area
                    type="monotone"
                    dataKey="val"
                    stroke={color}
                    strokeWidth={2}
                    fillOpacity={0.1}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export const MarketTicker: React.FC = () => {
    return (
        <div className="py-12 border-b border-zinc-900/50 bg-black/50 backdrop-blur-sm">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-1">热门币种行情</h2>
                        <p className="text-sm text-zinc-500">实时更新全球主流资产价格</p>
                    </div>
                    <a href="#markets" className="flex items-center text-zinc-400 text-sm hover:text-white transition-colors group">
                        查看全部
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {MOCK_COINS.map((coin) => {
                        const isPositive = coin.change24h >= 0;
                        const chartData = coin.history.map((val, idx) => ({ i: idx, val }));
                        const color = isPositive ? '#10B981' : '#F43F5E';

                        return (
                            <div key={coin.id} className="bg-zinc-900/20 border border-zinc-800/60 rounded-xl p-5 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all cursor-pointer group">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-8 h-8 rounded-full overflow-hidden opacity-90 grayscale group-hover:grayscale-0 transition-all">
                                            <img
                                                src={`${BASE_PATH}/icons/${coin.id}.png`}
                                                alt={coin.symbol}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white leading-none text-base">{coin.symbol}</h3>
                                            <span className="text-xs text-zinc-500 font-medium mt-0.5 block">/ USDT</span>
                                        </div>
                                    </div>
                                    <div className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-400' : 'text-rose-400'}`}>
                                        {isPositive ? '+' : ''}{coin.change24h}%
                                    </div>
                                </div>

                                <div className="flex items-end justify-between">
                                    <div className="text-xl font-bold text-white tracking-tight font-mono">
                                        ${coin.price.toLocaleString()}
                                    </div>
                                    <div className="h-10 w-24 opacity-60 group-hover:opacity-100 transition-opacity">
                                        {/* Use client-side only rendering for Recharts to avoid SSR issues */}
                                        <ClientChart data={chartData} color={color} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
