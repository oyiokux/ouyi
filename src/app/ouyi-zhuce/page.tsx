import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '欧易注册教程 | 如何注册欧易账户',
    description: '只需三步，轻松开启您的 Web3 数字资产之旅。欧易账户注册详细教程。',
};

export default function RegisterPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center bg-black">
            <div className="max-w-3xl w-full">
                <h1 className="text-5xl font-bold text-white mb-4 tracking-tight text-center">
                    欧易账户注册教程
                </h1>
                <p className="text-zinc-500 text-center mb-10 text-lg">
                    只需三步，轻松开启您的 Web3 数字资产之旅
                </p>

                <div className="flex justify-center mb-16">
                    <Button
                        size="lg"
                        href="https://oyizhuce.com"
                        target="_blank"
                        className="bg-white text-black hover:bg-zinc-200 px-12 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        立即注册欧易
                    </Button>
                </div>

                <div className="space-y-12">
                    {/* Step 1 */}
                    <div className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white z-10">1</div>
                        <div className="absolute left-4 top-8 w-0.5 h-full bg-zinc-800 -z-0"></div>

                        <h3 className="text-2xl font-bold text-white mb-4">访问官方入口</h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            为了保障您的资产安全，防止网络钓鱼与诈骗，请务必通过上方的官方验证按钮进入注册页面。欧易支持手机号码（全球）或电子邮箱进行注册。如果您使用微信/QQ邮箱，请留意邮件可能会被归入垃圾箱。
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative pl-12 pt-4">
                        <div className="absolute left-0 top-4 w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center font-bold text-zinc-300 z-10">2</div>
                        <div className="absolute left-4 top-12 w-0.5 h-full bg-zinc-800 -z-0"></div>

                        <h3 className="text-2xl font-bold text-white mb-4">设置安全密码</h3>
                        <p className="text-zinc-400 mb-4 leading-relaxed">
                            输入您收到的 6 位数验证码后，系统将提示您设置登录密码。为了账户安全，建议设置高强度密码：长度不少于 10 位，且必须包含大写字母、小写字母、数字以及特殊符号（如 !@#%）。请勿向任何人透露您的密码或验证码。
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative pl-12 pt-4">
                        <div className="absolute left-0 top-4 w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center font-bold text-zinc-300 z-10">3</div>

                        <h3 className="text-2xl font-bold text-white mb-4">完成身份认证 (KYC)</h3>
                        <p className="text-zinc-400 mb-4 leading-relaxed">
                            为了符合全球监管要求并保障交易安全，注册成功后需完成基础身份认证。请准备好您的身份证件（身份证/护照/驾照），按照页面提示拍摄上传，通常系统会在 2 分钟内自动完成审核。
                        </p>
                        <div className="bg-blue-900/10 border border-blue-900/30 p-5 rounded-lg text-blue-300 text-sm leading-relaxed">
                            <strong>为什么需要认证？</strong><br />
                            完成 KYC 认证后，您将解锁法币交易（C2C买卖币）权限，并大幅提升每日提币额度与交易限额，享受平台提供的完整服务权益。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
