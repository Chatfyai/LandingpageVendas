import { useState } from 'react'
const EXTENSION_URL = 'https://chromewebstore.google.com/detail/lmbhhahjhhipppnogajmnclominmdfma?utm_source=item-share-cb'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 pointer-events-none" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start pointer-events-auto">
                {/* Top Bar: Logo, Menu Button (Mobile) */}
                <div className="bg-white rounded-full shadow-lg shadow-black/5 px-6 py-3 flex items-center justify-between gap-8 w-full md:w-auto md:justify-start md:mx-0 relative z-50">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-3xl text-black">bolt</span>
                        <span className="text-xl font-bold tracking-tight text-dark-text">Zap Premium</span>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        <a className="text-base font-medium text-slate-800 hover:text-zap-green transition-colors" href="#features">
                            Funcionalidades
                        </a>
                        <a className="text-base font-medium text-slate-800 hover:text-zap-green transition-colors" href="#plans">
                            Planos
                        </a>
                        <a className="text-base font-medium text-slate-800 hover:text-zap-green transition-colors" href="#testimonials">
                            Depoimentos
                        </a>
                    </div>

                    {/* Menu Mobile Button */}
                    <button
                        className="md:hidden p-1 rounded-full text-slate-800 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 px-5 md:hidden pointer-events-auto">
                        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-6 flex flex-col gap-4 animate-fade-in-up">
                            <a
                                className="text-lg font-medium text-slate-800 hover:text-zap-green transition-colors px-4 py-2 hover:bg-gray-50 rounded-xl"
                                href="#features"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Funcionalidades
                            </a>
                            <a
                                className="text-lg font-medium text-slate-800 hover:text-zap-green transition-colors px-4 py-2 hover:bg-gray-50 rounded-xl"
                                href="#plans"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Planos
                            </a>
                            <a
                                className="text-lg font-medium text-slate-800 hover:text-zap-green transition-colors px-4 py-2 hover:bg-gray-50 rounded-xl"
                                href="#testimonials"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Depoimentos
                            </a>
                            <a
                                href={EXTENSION_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-zap-green text-white px-6 py-3.5 rounded-xl text-base font-bold text-center mt-2 shadow-lg hover:bg-green-500 transition-colors"
                            >
                                Começar Agora
                            </a>
                        </div>
                    </div>
                )}

                {/* CTA Desktop */}
                <div className="hidden md:block">
                    <a href={EXTENSION_URL} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-dark-text px-6 py-3.5 rounded-full text-base font-bold transition-all shadow-lg shadow-black/5 hover:-translate-y-0.5 flex items-center gap-2">
                        Começar Agora
                        <div className="size-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px]">
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header
