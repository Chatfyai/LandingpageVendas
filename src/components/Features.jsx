import { useScrollReveal } from '../hooks/useScrollReveal'

function Features() {
    const [headerRef, headerVisible] = useScrollReveal()
    const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 })

    const features = [
        {
            icon: 'mic',
            title: 'Envio de Áudio',
            description: 'Envie arquivos de áudio pré-gravados como se fossem gravados ao vivo (status de microfone). Aumente a confiança e o engajamento instantaneamente.',
            badge: null
        },
        {
            icon: 'psychology',
            title: 'Assistente IA',
            description: 'Receba sugestões inteligentes de respostas geradas pela IA para responder seus clientes com agilidade e precisão.',
            badge: { text: 'Novo', color: 'bg-blue-500 text-white' },
            highlight: true
        },
        {
            icon: 'event_available',
            title: 'Agendamento Inteligente',
            description: 'Agende mensagens para mais tarde e alcance clientes no momento certo. Perfeito para follow-ups e lembretes.',
            badge: null
        },
        {
            icon: 'folder_managed',
            title: 'Sequência de Mensagens',
            description: 'Ótimo para criar e disparar sequências de mensagens automáticas, ideal para onboarding ou vendas.',
            badge: null
        }
    ]

    return (
        <section className="py-24 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-20 max-w-2xl mx-auto transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <span className="text-zap-green font-bold tracking-widest uppercase text-xs mb-3 block">
                        Recursos
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Funcionalidades Poderosas
                    </h2>
                    <p className="text-xl text-slate-500 font-medium">
                        Tudo que você precisa para automatizar seu processo de vendas diretamente no seu app de mensagens favorito.
                    </p>
                </div>

                {/* Features Grid */}
                <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            isVisible={gridVisible}
                            delay={index * 150}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function FeatureCard({ icon, title, description, badge, highlight, isVisible, delay }) {
    return (
        <div
            className={`group p-10 rounded-[2rem] shadow-lg hover:bg-zap-green/10 hover-lift transition-all duration-500 ${highlight ? 'animated-green-border' : 'bg-gray-50'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Title with icon and optional badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-2xl text-zap-green group-hover:scale-110 transition-transform">{icon}</span>
                <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                {badge && (
                    <span className={`${badge.color} text-[10px] font-extrabold px-2 py-1 rounded-full uppercase tracking-wide`}>
                        {badge.text}
                    </span>
                )}
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
        </div>
    )
}

export default Features
