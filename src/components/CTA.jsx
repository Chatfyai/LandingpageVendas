import { useScrollReveal } from '../hooks/useScrollReveal'

const EXTENSION_URL = 'https://chromewebstore.google.com/detail/lmbhhahjhhipppnogajmnclominmdfma?utm_source=item-share-cb'

function CTA() {
    const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2 })

    return (
        <section className="py-24 bg-white px-4">
            <div
                ref={sectionRef}
                className={`max-w-6xl mx-auto rounded-[3rem] overflow-hidden relative bg-hero-green shadow-2xl transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >

                {/* Content */}
                <div className="relative z-10 px-8 py-24 text-center">
                    <h2
                        className={`text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        style={{ transitionDelay: '150ms' }}
                    >
                        Pronto para Vender Mais?
                    </h2>

                    <p
                        className={`text-slate-900/80 text-xl mb-12 max-w-2xl mx-auto font-medium transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        Leve seu atendimento para outro nível
                    </p>

                    <a
                        href={EXTENSION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-black text-white hover:bg-slate-900 px-12 py-5 rounded-full text-xl font-bold transition-all shadow-xl hover:scale-105 active:scale-95 inline-block btn-animate ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        style={{ transitionDelay: '450ms' }}
                    >
                        Começar Agora Grátis
                    </a>

                    <p
                        className={`text-slate-900/60 text-sm mt-8 font-medium transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        Cancele quando quiser
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CTA
