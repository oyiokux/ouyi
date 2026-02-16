import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export const initializeChat = (): boolean => {
    if (!API_KEY) {
        console.warn("Gemini API Key is missing.");
        return false;
    }

    try {
        genAI = new GoogleGenAI({ apiKey: API_KEY });
        chatSession = genAI.chats.create({
            model: 'gemini-3-flash-preview',
            config: {
                systemInstruction: "You are the helpful support assistant for OK-Crypto, a leading digital asset exchange. Your goal is to help users with app downloads, account security, and basic trading questions. Keep answers concise, professional, and friendly. If asked about download links, guide them to the official download section on the page. Respond in the same language as the user (default to Chinese).",
                thinkingConfig: { thinkingBudget: 0 }
            },
        });
        return true;
    } catch (error) {
        console.error("Failed to initialize Gemini chat:", error);
        return false;
    }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
    if (!chatSession) {
        const initialized = initializeChat();
        if (!initialized || !chatSession) {
            // Fallback mock response if API key is missing or init fails
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve("您好！我是智能助手。由于目前无法连接到 AI 服务，请直接点击页面上方的“下载”按钮获取最新 App。如有其他问题，请联系人工客服。");
                }, 1000);
            });
        }
    }

    try {
        const result: GenerateContentResponse = await chatSession.sendMessage({ message });
        return result.text || "抱歉，我现在无法回答。";
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        return "抱歉，遇到了一些网络问题，请稍后再试。";
    }
};
