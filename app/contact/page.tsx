import Image from "next/image";

export default function ContactPage() {
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
                <form className="space-y-12">

                    <div className="flex flex-col gap-4">
                        <label htmlFor="name" className="text-xl tracking-widest uppercase">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full h-32 bg-white border-none focus:ring-2 focus:ring-gray-400 px-4 transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="email" className="text-xl tracking-widest uppercase">Mail Adress</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full h-32 bg-white border-none focus:ring-2 focus:ring-gray-400 px-4 transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="message" className="text-xl tracking-widest uppercase">Message</label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full bg-white border-none focus:ring-2 focus:ring-gray-400 p-4 transition-all"
                        ></textarea>
                    </div>

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