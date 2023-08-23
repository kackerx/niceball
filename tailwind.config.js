/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                text: '#b7a7e5',
                btnbg: '#8669d3',
            },
            gridTemplateColumns: {
                // Simple 8 row grid
                '8': 'repeat(auto-fill, minmax(100px, 1fr))',

                // Complex site-specific row configuration
                'layout': '200px minmax(900px, 1fr) 100px',
            },
        },
        plugins: [],
    }
}

