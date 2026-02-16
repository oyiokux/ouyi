import React from 'react';
import { Smartphone, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '欧易下载安装教程 | 解决安装失败问题',
    description: '遇到“无法安装”、“风险提示”或“未受信任”？请查看欧易 APP 下载安装详细指南。',
};

export default function DownloadTutorialPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center bg-black">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        下载安装问题指南
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
                        {'遇到“无法安装”、“风险提示”或“未受信任”？请查看下方的详细解决方案。'}
                    </p>

                    <div className="flex justify-center flex-col sm:flex-row gap-4">
                        <Button
                            href="https://oyixiazai.com"
                            target="_blank"
                            className="bg-white text-black hover:bg-zinc-200 px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            前往下载中心
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Android Section */}
                    <div className="bg-zinc-900/20 border border-zinc-800 p-8 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-green-900/20 rounded-lg flex items-center justify-center text-green-500 font-bold">A</div>
                            <h3 className="text-xl font-bold text-white">Android 安卓安装问题</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-medium mb-2 text-sm">安装被系统拦截或提示有风险？</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                                    {'由于安卓系统的开放性及各手机厂商的安全策略不同，部分国产手机（如华为、小米、OPPO等）可能会将区块链类应用误报为“高风险”或“病毒”。这属于正常的行业现象，欧易官方 App 经过严格安全检测，请放心安装。'}
                                </p>
                            </div>
                            <div className="bg-zinc-950 p-5 rounded-lg border border-zinc-900">
                                <h5 className="text-zinc-300 text-xs font-bold mb-2">通用解决办法：</h5>
                                <ul className="list-disc list-inside text-zinc-500 text-sm space-y-2 marker:text-zinc-600">
                                    <li>{'点击弹窗中的“更多详情”、“了解风险”或“单次安装”。'}</li>
                                    <li>{'勾选“我已了解风险”并选择“无视风险安装”或“继续安装”。'}</li>
                                    <li><strong>华为鸿蒙系统：</strong>{'请在设置中关闭“纯净模式”后再尝试安装。'}</li>
                                    <li>若依然无法安装，请尝试断开网络（开启飞行模式）后进行本地安装。</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* iOS Section */}
                    <div className="bg-zinc-900/20 border border-zinc-800 p-8 rounded-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold">i</div>
                            <h3 className="text-xl font-bold text-white">iOS 苹果安装问题</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-medium mb-2 text-sm">{'提示“未受信任的企业级开发者”？'}</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                                    欧易 iOS 企业版 App 为了绕过 App Store 的限制方便用户下载，使用了企业证书签名。首次安装后打开时，苹果系统出于安全机制会弹出此提示，您需要手动信任该证书才能使用。
                                </p>
                            </div>
                            <div className="bg-zinc-950 p-5 rounded-lg border border-zinc-900">
                                <h5 className="text-zinc-300 text-xs font-bold mb-2">信任证书步骤：</h5>
                                <ul className="list-disc list-inside text-zinc-500 text-sm space-y-2 marker:text-zinc-600">
                                    <li>打开 iPhone 的 [设置] 应用。</li>
                                    <li>{'进入 [通用] > [VPN与设备管理]（旧版本可能显示为“描述文件与设备管理”）。'}</li>
                                    <li>{'在“企业级 App”下方找到对应的企业证书名称。'}</li>
                                    <li>{'点击该证书，选择“信任 ...”，在弹窗中再次点击“信任”即可。'}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-zinc-500 mb-4 text-sm">问题已解决？</h3>
                </div>
            </div>
        </div>
    );
}
