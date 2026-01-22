import { useScrollReveal } from '../hooks/useScrollReveal'

const EXTENSION_URL = 'https://chromewebstore.google.com/detail/lmbhhahjhhipppnogajmnclominmdfma?utm_source=item-share-cb'

function Pricing() {
    const [headerRef, headerVisible] = useScrollReveal()
    const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 })

    return (
        <section className="py-24 bg-gray-50" id="plans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Planos feitos para crescer
                    </h2>
                    <p className="text-xl text-slate-500">
                        Comece grátis, faça upgrade quando precisar de mais poder.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">

                    {/* Free Plan */}
                    <div
                        className={`bg-white p-10 rounded-[2rem] border border-gray-200 shadow-sm relative hover-lift transition-all duration-500 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Clássico</h3>
                        <p className="text-slate-500 mb-6 text-sm">Perfeito para quem está começando.</p>

                        <div className="text-5xl font-bold text-slate-900 mb-8 tracking-tighter">Grátis</div>

                        <ul className="space-y-4 mb-10">
                            <PricingFeature>Respostas rápidas limitado</PricingFeature>
                            <PricingFeature>Áudio e imagem limitado</PricingFeature>
                            <PricingFeature>Docs limitado</PricingFeature>
                            <PricingFeature>Privacidade</PricingFeature>
                        </ul>

                        <a href={EXTENSION_URL} target="_blank" rel="noopener noreferrer" className="w-full py-4 px-6 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition-all text-lg text-center block hover:scale-[1.02] active:scale-[0.98]">
                            Começar Grátis
                        </a>
                    </div>

                    {/* Premium Plan */}
                    <div
                        className={`bg-[#1a1a1a] p-10 rounded-[2rem] shadow-2xl relative transform md:scale-105 z-10 text-white hover-glow transition-all duration-500 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: '150ms' }}
                    >
                        {/* Popular Badge */}
                        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                            <span className="bg-zap-green text-white text-xs font-black px-4 py-2 rounded-full shadow-lg uppercase tracking-wide animate-pulse-glow">
                                MAIS POPULAR
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                        <p className="text-gray-400 mb-6 text-sm">Para profissionais e equipes de vendas.</p>

                        <div className="flex items-end gap-1 mb-8">
                            <div className="text-5xl font-bold text-white tracking-tighter">R$ 29,90</div>
                            <div className="text-gray-400 mb-2 font-medium">/mês</div>
                        </div>

                        <ul className="space-y-4 mb-10">
                            <PricingFeature light><span className="font-bold">Ilimitado</span> Respostas rápidas</PricingFeature>
                            <PricingFeature light><span className="font-bold">Ilimitado</span> Áudio e imagem</PricingFeature>
                            <PricingFeature light><span className="font-bold">Ilimitado</span> Docs</PricingFeature>
                            <PricingFeature light><span className="font-bold">Ilimitado</span> Calendário</PricingFeature>
                            <PricingFeature light>IA</PricingFeature>
                            <PricingFeature light>Privacidade</PricingFeature>
                            <PricingFeature light>Suporte Prioritário</PricingFeature>
                        </ul>

                        <a href={EXTENSION_URL} target="_blank" rel="noopener noreferrer" className="w-full py-4 px-6 bg-zap-green text-white font-bold rounded-xl hover:bg-green-500 transition-all shadow-lg text-lg text-center block btn-animate hover:scale-[1.02] active:scale-[0.98]">
                            Assinar Agora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

function PricingFeature({ children, light = false }) {
    return (
        <li className={`flex items-center gap-3 transition-transform hover:translate-x-1 ${light ? 'text-white' : 'text-slate-600'}`}>
            <span className="material-symbols-outlined text-zap-green text-xl">check_circle</span>
            {children}
        </li>
    )
}

export default Pricing
