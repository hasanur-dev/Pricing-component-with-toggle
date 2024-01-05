/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: 'Montserrat',
            },
            colors: {
                'grayish-blue-very-light': 'hsl(240, 78%, 98%)',
                'grayish-blue-light': 'hsl(234, 14%, 74%)',
                'grayish-blue': 'hsl(233, 13%, 49%)',
                'grayish-blue-dark': 'hsl(232, 13%, 33%)',
                'purple-light': 'hsl(236, 72%, 79%)',
                'purple-dark': 'hsl(237, 63%, 64%)',
            },
        },
    },
    plugins: [],
}
