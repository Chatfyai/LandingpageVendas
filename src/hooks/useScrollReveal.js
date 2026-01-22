import { useEffect, useRef, useState } from 'react'

/**
 * Hook para animar elementos quando entram na viewport
 * @param {Object} options - Opções do Intersection Observer
 * @returns {Array} [ref, isVisible] - Ref para o elemento e estado de visibilidade
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(element) // Só anima uma vez
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
                ...options
            }
        )

        observer.observe(element)

        return () => {
            if (element) observer.unobserve(element)
        }
    }, [options.threshold, options.rootMargin])

    return [ref, isVisible]
}

/**
 * Hook para múltiplos elementos com stagger
 * @param {number} count - Número de elementos
 * @param {number} staggerDelay - Delay entre cada elemento (ms)
 * @returns {Array} Array de [ref, isVisible] para cada elemento
 */
export function useStaggerReveal(count, staggerDelay = 100) {
    const [visibleItems, setVisibleItems] = useState(new Set())
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Anima itens com stagger
                    for (let i = 0; i < count; i++) {
                        setTimeout(() => {
                            setVisibleItems(prev => new Set([...prev, i]))
                        }, i * staggerDelay)
                    }
                    observer.unobserve(container)
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        observer.observe(container)

        return () => {
            if (container) observer.unobserve(container)
        }
    }, [count, staggerDelay])

    return [containerRef, visibleItems]
}

export default useScrollReveal
