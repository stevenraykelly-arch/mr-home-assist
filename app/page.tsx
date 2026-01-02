import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Phone, Star } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between font-sans text-stone-900 bg-stone-50">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
                            <Star className="text-white w-7 h-7 fill-current" />
                        </div>
                        <span className="font-black text-2xl tracking-tighter text-stone-900 uppercase">Handyman <span className="text-amber-600">Phillip Island</span></span>
                    </div>
                    <div className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-widest text-stone-500">
                        <Link href="#services">Services</Link>
                        <Link href="tel:0400000000" className="bg-stone-900 text-white px-6 py-3 rounded-full hover:bg-stone-800 transition-all flex items-center gap-2">
                            <Phone className="w-4 h-4" /> 0400 000 000
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-40 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-black uppercase tracking-widest mb-10 border border-amber-100">
                            🏝️ Trusted Island Local
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black text-stone-900 leading-[0.85] mb-10 tracking-tighter">
                            Your Home, <br />
                            <span className="text-amber-600">Insulated</span> <br />
                            & Fixed.
                        </h1>
                        <p className="text-stone-500 text-xl md:text-2xl mb-14 max-w-xl font-medium leading-relaxed">
                            Expert maintenance for Phillip Island holiday homes. Specializing in deck restoration, coastal repairs, and property care while you're away.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link href="#quote" className="px-12 py-6 bg-amber-600 text-white rounded-2xl font-black text-xl hover:bg-amber-700 transition-all shadow-2xl shadow-amber-200 flex items-center justify-center gap-3 group">
                                Get Your Quote <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="mt-16 flex flex-wrap items-center gap-10 opacity-70">
                            <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest">
                                <Check className="w-5 h-5 text-amber-600" /> Salt-Air Proofing
                            </div>
                            <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest">
                                <Check className="w-5 h-5 text-amber-600" /> Deck Restoration
                            </div>
                            <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest">
                                <Check className="w-5 h-5 text-amber-600" /> Fully Insured
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-6 bg-amber-200/30 rounded-[60px] -rotate-2 blur-2xl" />
                        <div className="relative z-10 aspect-square rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
                            <div className="w-full h-full bg-[url('/handyman_pi_hero.jpg')] bg-cover bg-center" />
                        </div>
                        <div className="absolute -bottom-12 -right-12 bg-white p-10 rounded-[40px] shadow-2xl z-20 border border-stone-100 hidden xl:block">
                            <div className="flex gap-1 text-amber-400 mb-3">
                                <Star className="w-6 h-6 fill-current" />
                                <Star className="w-6 h-6 fill-current" />
                                <Star className="w-6 h-6 fill-current" />
                                <Star className="w-6 h-6 fill-current" />
                                <Star className="w-6 h-6 fill-current" />
                            </div>
                            <div className="font-black text-3xl text-stone-900 leading-none">Local Favourite</div>
                            <div className="text-stone-400 font-bold uppercase text-xs tracking-[0.2em] mt-2">Serving Cowes to San Remo</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specializations */}
            <section id="services" className="w-full py-32 bg-white border-t border-stone-200 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-24 tracking-tight underline decoration-amber-500/30 decoration-8 underline-offset-[12px]">Coastal Specializations</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Deck Restoration", desc: "Sanding, oiling, and repairing weathered decks to withstand harsh Bass Strait conditions.", icon: <Star className="w-10 h-10 text-amber-600" /> },
                            { title: "Holiday Home Care", desc: "Pre-arrival inspections, key-holding, and fast repairs for your beachfront investment.", icon: <Check className="w-10 h-10 text-amber-600" /> },
                            { title: "General Maintenance", desc: "From leaking taps to window repairs—no island job is too small for us.", icon: <MapPin className="w-10 h-10 text-amber-600" /> }
                        ].map((s, i) => (
                            <div key={i} className="group p-12 bg-stone-50 rounded-[40px] hover:bg-stone-900 hover:text-white transition-all duration-500 cursor-default">
                                <div className="mb-8">{s.icon}</div>
                                <h3 className="text-3xl font-black mb-6 tracking-tight">{s.title}</h3>
                                <p className="text-stone-500 group-hover:text-stone-300 leading-relaxed font-medium text-lg">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="quote" className="w-full py-40 px-6 bg-amber-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">Ready for Island Time?</h2>
                    <p className="text-amber-100 text-xl md:text-2xl mb-16 font-medium">Leave the repairs to us. Relax and enjoy the island vida. Free estimates within 24 hours.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="tel:0400000000" className="px-12 py-6 bg-white text-stone-900 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                            📞 Call 0400 000 000
                        </Link>
                        <Link href="mailto:island@handyman.com.au" className="px-12 py-6 bg-stone-900 text-white rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                            💬 Message Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-20 bg-stone-950 text-stone-500 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="font-black text-white tracking-[0.4em] uppercase text-xs">Handyman Phillip Island • Est 2026</div>
                    <div className="flex gap-10 font-bold uppercase text-[10px] tracking-[0.3em]">
                        <span>Cowes</span>
                        <span>Smiths Beach</span>
                        <span>San Remo</span>
                        <span>Cape Woolamai</span>
                    </div>
                </div>
            </footer>
        </main>
    );
}
