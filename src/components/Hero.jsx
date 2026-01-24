const EXTENSION_URL = 'https://chromewebstore.google.com/detail/lmbhhahjhhipppnogajmnclominmdfma?utm_source=item-share-cb'

function Hero() {
    return (
        <section className="relative min-h-screen bg-hero-green flex flex-col items-center pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center justify-center flex-1">

                {/* Headline */}
                <div className="text-center mb-10">
                    <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-bold leading-[0.95] tracking-tighter text-[#2C2E2A] mb-2 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                        Responda rápido
                    </h1>
                    <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-bold leading-[0.95] tracking-tighter text-[#2C2E2A] mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}>
                        e venda mais
                    </h1>

                    <p className="text-lg sm:text-xl text-[#2C2E2A] font-medium max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                        Economize horas todos os dias no WhatsApp Web.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}>
                        <a href={EXTENSION_URL} target="_blank" rel="noopener noreferrer" className="bg-[#2C2E2A] text-white px-8 py-3.5 rounded-full text-base font-bold transition-all hover:bg-black hover:scale-105 shadow-xl btn-animate">
                            Experimentar Grátis
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Sub-component for chat list items
function ChatListItem({ active = false }) {
    return (
        <div className={`h-18 p-3 flex gap-3 cursor-pointer border-b border-gray-50 ${active ? 'bg-gray-100 border-l-4 border-l-zap-green' : 'hover:bg-gray-50'
            }`}>
            <div className={`size-12 rounded-full shrink-0 ${active ? 'bg-gray-300' : 'bg-gray-200'}`}></div>
            <div className="flex-1 flex flex-col justify-center gap-1">
                <div className={`h-3 rounded w-1/2 ${active ? 'bg-gray-300' : 'bg-gray-200'}`}></div>
                <div className={`h-2 rounded w-3/4 ${active ? 'bg-gray-200' : 'bg-gray-100'}`}></div>
            </div>
        </div>
    )
}

export default Hero
