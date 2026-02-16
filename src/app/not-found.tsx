import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - 页面未找到',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">404 - 页面未找到</h2>
            <p className="mb-8 text-zinc-400 max-w-md">
                抱歉，您访问的页面不存在或已被移除。
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
                返回首页
            </Link>
        </div>
    );
}
