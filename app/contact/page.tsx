"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult("送信中...");

        const formData = new FormData(e.currentTarget);
        // ここに取得した Access Key を入れてください
        formData.append("access_key", "95d397f0-79db-49d1-b3ba-11460d4019d7");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            setResult("メッセージありがとうございます！無事に届きました。");
            (e.target as HTMLFormElement).reset(); // フォームを空にする
        } else {
            setResult("エラーが発生しました。時間を置いて再度お試しください。");
        }
        setIsSubmitting(false);
    };

    return (
        <main className="min-h-screen bg-[#EBECE6] text-[#1a1a1a] pb-32 pt-0">
            <section className="relative w-full h-[50vh] md:h-screen overflow-hidden mb-20">
                <Image
                    src="/images/contact-top.png"
                    alt="contact visual"
                    fill
                    className="object-cover object-[center_20%] md:object-center" 
                    priority
                />
            </section>
            <div className="max-w-4xl mx-auto px-8 md:px-12">
                <section className="mb-16">
                    <p className="text-sm font-bold mb-2 tracking-widest">声をかける</p>
                    <h1 className="text-6xl font-bold tracking-tighter">CONTACT</h1>
                </section>

                <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Name */}
                    <div className="flex flex-col gap-4">
                        <label htmlFor="name" className="text-xl tracking-widest uppercase">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name" // Web3Formsで識別するために必要
                            required
                            className="w-full h-16 bg-white border-none focus:ring-2 focus:ring-gray-400 px-4 transition-all normal-case font-sans"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-4">
                        <label htmlFor="email" className="text-xl tracking-widest uppercase">Mail Adress</label>
                        <input
                            type="email"
                            id="email"
                            name="email" // Web3Formsで識別するために必要
                            required
                            className="w-full h-16 bg-white border-none focus:ring-2 focus:ring-gray-400 px-4 transition-all normal-case font-sans"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-4">
                        <label htmlFor="message" className="text-xl tracking-widest uppercase">Message</label>
                        <textarea
                            id="message"
                            name="message" // Web3Formsで識別するために必要
                            rows={6}
                            required
                            className="w-full bg-white border-none focus:ring-2 focus:ring-gray-400 p-4 transition-all normal-case font-sans"
                        ></textarea>
                    </div>

                    <div className="flex flex-col items-center gap-4 pt-8">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-12 py-4 bg-[#1a1a1a] text-white transition-colors tracking-widest text-sm ${
                                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
                            }`}
                        >
                            {isSubmitting ? "SENDING..." : "SEND"}
                        </button>
                        
                        {/* 結果表示用メッセージ */}
                        {result && (
                            <p className={`text-sm font-bold ${result.includes("エラー") ? "text-red-500" : "text-gray-600"}`}>
                                {result}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </main>
    );
}