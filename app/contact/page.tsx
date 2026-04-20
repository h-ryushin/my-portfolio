"use client";
import { useState } from "react";
import Image from "next/image";
import TopImage from "@/components/TopImage";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactPage() {
    const { isSubmitting, result, handleSubmit } = useContactForm();
    return (
        <main className="min-h-screen bg-[#EBECE6] text-[#1a1a1a] pb-32 pt-0">
            <TopImage src="/images/contact-top.png" alt="contact visual " isTopViwer={false} />
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
                            name="name"
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
                            name="email"
                            required
                            className="w-full h-16 bg-white border-none focus:ring-2 focus:ring-gray-400 px-4 transition-all normal-case font-sans"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-4">
                        <label htmlFor="message" className="text-xl tracking-widest uppercase">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            className="w-full bg-white border-none focus:ring-2 focus:ring-gray-400 p-4 transition-all normal-case font-sans"
                        ></textarea>
                    </div>

                    <div className="flex flex-col items-center gap-4 pt-8">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-12 py-4 bg-[#1a1a1a] text-white transition-colors tracking-widest text-sm ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
                                }`}
                        >
                            {isSubmitting ? "SENDING..." : "SEND"}
                        </button>
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