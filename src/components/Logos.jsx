import { useScrollReveal } from '../hooks/useScrollReveal'

function Logos() {
    const [sectionRef, isVisible] = useScrollReveal()

    const logos = [
        { icon: 'change_history', name: 'TechFlow' },
        { icon: 'all_inclusive', name: 'Infinity' },
        { icon: 'landscape', name: 'Summit' },
        { icon: 'language', name: 'GlobalNet' },
        { icon: 'bubble_chart', name: 'Spark' },
        { icon: 'hub', name: 'ConnectHub' },
        { icon: 'rocket_launch', name: 'LaunchPad' },
        { icon: 'diamond', name: 'Prestige' },
    ]

    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos]

    return (
        <div className="bg-white py-12 border-b border-gray-100 overflow-hidden">
            <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p
                    className={`text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    Confiado por líderes da indústria
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling Content */}
                <div
                    className={`flex items-center gap-16 animate-scroll-left transition-opacity duration-700 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
                    style={{ width: 'max-content' }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 text-xl font-bold text-slate-700 shrink-0 hover:text-black transition-colors cursor-default"
                        >
                            <span className="material-symbols-outlined text-3xl">{logo.icon}</span>
                            {logo.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Logos
