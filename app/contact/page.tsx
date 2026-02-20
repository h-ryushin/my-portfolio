import Image from "next/image";
export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#EBECE6] text-[#1a1a1a] font-serif px-8 md:px-12 py-32">
            <section className="w-full h-screen flex flex-col items-center justify-center px-12 text-center">
                <Image
                    src="/images/contact-top.png"
                    alt="icon"
                    fill
                    className="object-cover"
                    priority
                />
            </section>
            <div className="max-w-4xl mx-auto">

                {/* タイトルセクション */}
                <section className="mb-16">
                    <p className="text-sm font-bold mb-2 tracking-widest">声をかける</p>
                    <h1 className="text-6xl font-bold tracking-tighter">CONTACT</h1>
                </section>

                {/* フォームセクション */}
                <form className="space-y-12">

                    {/* NAME */}
                    <div className="flex flex-col gap-4">
                        <label htmlFor="name" className="text-xl tracking-widest uppercase">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full h-32 bg-white border-none focus:ring-2 focus:ring-gray-400 px-4 transition-all"
                        />
                    </div>

                    {/* MAIL ADDRESS */}
                    <div className="flex flex-col gap-4">
                        <label htmlFor="email" className="text-xl tracking-widest uppercase">Mail Adress</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full h-32 bg-white border-none focus:ring-2 focus:ring-gray-400 px-4 transition-all"
                        />
                    </div>

                    {/* MESSAGE */}
                    <div className="flex flex-col gap-4">
                        <label htmlFor="message" className="text-xl tracking-widest uppercase">Message</label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full bg-white border-none focus:ring-2 focus:ring-gray-400 p-4 transition-all"
                        ></textarea>
                    </div>

                    {/* 送信ボタン（おまけ） */}
                    <div className="flex justify-end pt-8">
                        <button
                            type="submit"
                            className="px-12 py-4 bg-[#1a1a1a] text-white hover:bg-gray-800 transition-colors tracking-widest text-sm"
                        >
                            SEND
                        </button>
                    </div>

                </form>
            </div>
        </main>
    );
}