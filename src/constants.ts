import { CoinData, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
    { label: '首页', href: '/' },
    { label: '电脑版', href: '/ouyi-pc/' },
    { label: 'APP下载', href: '/ouyi-app/' },
    { label: '网页版', href: '/ouyi-web' },
    { label: '注册教程', href: '/ouyi-zhuce/' },
    { label: '下载教程', href: '/ouyi-xiazai/' },
];

export const MOCK_COINS: CoinData[] = [
    {
        id: 'bitcoin',
        symbol: 'BTC',
        name: 'Bitcoin',
        price: 64230.50,
        change24h: 2.45,
        volume: '34.2B',
        history: [62000, 62500, 63000, 62800, 63500, 64000, 64230]
    },
    {
        id: 'ethereum',
        symbol: 'ETH',
        name: 'Ethereum',
        price: 3450.12,
        change24h: 1.20,
        volume: '15.8B',
        history: [3300, 3350, 3320, 3380, 3400, 3420, 3450]
    },
    {
        id: 'okb',
        symbol: 'OKB',
        name: 'OKB',
        price: 52.30,
        change24h: 0.8,
        volume: '120M',
        history: [51, 51.5, 51.2, 51.8, 52, 52.1, 52.3]
    },
    {
        id: 'solana',
        symbol: 'SOL',
        name: 'Solana',
        price: 145.60,
        change24h: -0.5,
        volume: '4.2B',
        history: [150, 148, 149, 147, 146, 145, 145.6]
    }
];
