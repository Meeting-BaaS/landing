/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sansCondensed: [
                    'Sofia Sans Condensed',
                    'Poppins',
                    'sans-serif',
                ],
                sans: ['Sofia Sans', 'Poppins', 'sans-serif'],
                serif: ['Poppins', 'sans-serif'],
                mono: ['DM Sans', 'sans-serif'],
            },

            screens: {
                '2xl': '1440px',
            },
            dropShadow: {
                '4xl': [
                    '0 48px 48px rgba(0, 0, 0, 0.12)',
                    '0 14px 20px rgba(35, 34, 87, 0.4)',
                ],
                mainButton: ['0px 0px 30px rgba(3, 63, 236, 0.4)'],
                buttonShadow: ['0px 2px rgb(0, 0, 0)'],
            },

            colors: {
                primary: {
                    500: '#78FFF0',
                    700: '#447671',
                },
                neutral: {
                    50: '#F4F9F8',
                    400: '#5A5A5A',
                    500: '#343D3C',
                    700: '#2B2B2B',
                    900: '#232323',
                },
                warning: {
                    500: '#FFFF93',
                },
            },
            keyframes: {
                'progress-bar': {
                    '0%': {
                        height: '0%',
                    },
                    '100%': {
                        height: '100%',
                    },
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                'fade-out': {
                    '100%': {
                        opacity: '0',
                    },
                    '0%': {
                        opacity: '1',
                    },
                },
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform:
                            'translateY(-100px) translateX(-100px) rotate(40deg)',
                    },
                    '100%': {
                        opacity: '1',
                        transform:
                            'translateY(0px) translateX(0px) rotate(20deg)',
                    },
                },
                'fade-in-down2': {
                    '0%': {
                        opacity: '0',
                        transform:
                            'translateY(-100px) translateX(-100px) rotate(40deg)',
                    },
                    '100%': {
                        opacity: '1',
                        transform:
                            'translateY(0px) translateX(0px) rotate(120deg)',
                    },
                },
                'fade-in-down3': {
                    '0%': {
                        opacity: '0',
                        transform:
                            'translateY(100px) translateX(100px) rotate(40deg)',
                    },
                    '100%': {
                        opacity: '1',
                        transform:
                            'translateY(0px) translateX(0px) rotate(70deg)',
                    },
                },
                'little-move': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(5px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
            },
            animation: {
                'progress-bar': 'progress-bar 9.5s',
                'fade-in': 'fade-in 2s',
                'fade-out': 'fade-out 1s ',
                'fade-in-down': 'fade-in-down 0.1s ease-out',
                'fade-in-down2': 'fade-in-down2 0.1s ease-out',
                'fade-in-down3': 'fade-in-down3 0.1s ease-out',
                'little-move': 'little-move 2s ease-in-out infinite',
            },
        },
    },
    safelist: [
        {
            pattern:
                /bg-(success|warning|primary|secondary|neutral|pink|error)-(50|300|500|600|700|900)/,
        },
        {
            pattern:
                /text-(success|warning|primary|secondary|neutral|pink|error)-(50|300|500|600|700|900)/,
        },
        {
            pattern:
                /ring-(success|warning|primary|secondary|neutral|pink|error)-(50|300|500|600|700|900)/,
        },
    ],
    plugins: [require('@tailwindcss/aspect-ratio')],
}
