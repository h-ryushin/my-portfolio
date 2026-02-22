import Image from "next/image";

export default function ContactPage() {
    return (
        /* mainのpxを削除し、pt-0にすることで写真が画面上部・左右の端までピッタリ広がります */
        <main className="min-h-screen bg-[#EBECE6] text-[#1a1a1a] pb-32 pt-0">
            
            {/* 写真セクション：スマホでは高さ半分(50vh)、PCでは少し余裕を持たせた(80vh)設定 */}
            <section className="relative w-full h-[50vh] md:h-screen overflow-hidden mb-20">
                <Image
                    src="/images/contact-top.png"
                    alt="contact visual"
                    fill
                    className="object-cover object-[center_20%] md:object-center" 
                    priority
                />
            </section>

            {/* コンテンツ部分：ここだけに px-8 md:px-12 を適用して横幅を整えます */}
            <div className="max-w-4xl mx-auto px-8 md:px-12">

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

                    {/* 送信ボタン */}
                    <div className="flex justify-center pt-8">
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