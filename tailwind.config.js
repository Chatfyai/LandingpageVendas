/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#25D366",
                "primary-dark": "#047857",
                "primary-light": "#d1fae5",
                "background-light": "#ffffff",
                "background-dark": "#1f2938",
                "zap-green": "#82D059",
                "hero-green": "#86D65D",
                "dark-text": "#1a1a1a",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "2xl": "2rem",
                "3xl": "3rem",
                "full": "9999px"
            },
            letterSpacing: {
                tighter: '-0.05em',
            }
        },
    },
    plugins: [],
}
