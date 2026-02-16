export interface NavItem {
    label: string;
    href: string;
}

export interface CoinData {
    id: string;
    symbol: string;
    name: string;
    price: number;
    change24h: number;
    volume: string;
    history: number[];
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
    timestamp: number;
}
