import { useScrollReveal } from '../hooks/useScrollReveal'

function Testimonials() {
    const [headerRef, headerVisible] = useScrollReveal()
    const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 })

    const testimonials = [
        {
            name: 'Laert Vitor',
            role: 'Empresário',
            initials: 'LV',
            text: '"Essa ferramenta mudou completamente como eu gerencio meus leads. O recurso de áudio é um divisor de águas para construir confiança com clientes."'
        },
        {
            name: 'Lunna Beatriz',
            role: 'Assistente de Vendas',
            initials: 'LB',
            text: '"Economizo cerca de 3 horas por dia só usando as respostas inteligentes. Parece nativo do WhatsApp, o que eu adoro."'
        },
        {
            name: 'Lucas Vinicius',
            role: 'Vendedor',
            initials: 'LV',
            text: '"A organização com o calendário para fazer o pós-venda mudou meu jogo. Agora não perco nenhum acompanhamento importante."'
        }
    ]

    return (
        <section className="py-24 bg-white" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Quem atende bem, usa
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            {...testimonial}
                            isVisible={gridVisible}
                            delay={index * 150}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ name, role, initials, text, isVisible, delay }) {
    return (
        <div
            className={`bg-gray-50 p-8 rounded-[1.5rem] hover-lift shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Stars */}
            <div className="flex text-zap-green mb-6">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className="material-symbols-outlined fill-current text-lg transition-transform hover:scale-125"
                        style={{ transitionDelay: `${i * 50}ms` }}
                    >
                        star
                    </span>
                ))}
            </div>

            {/* Quote */}
            <p className="text-slate-800 text-lg mb-8 font-medium">{text}</p>

            {/* Author */}
            <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-zap-green flex items-center justify-center text-white font-bold text-lg transition-transform hover:scale-110">
                    {initials}
                </div>
                <div>
                    <div className="font-bold text-slate-900">{name}</div>
                    <div className="text-sm text-slate-500">{role}</div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
