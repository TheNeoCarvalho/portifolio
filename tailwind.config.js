const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        colors: {
            gray: colors.coolGray,
            blue: colors.lightBlue,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        container: {
            center: true,
            padding: '15px'
        },
        screen: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '12000px',
        },
        fontFamily: {
            primary: 'var(--font-jetBrainsMono)'
        },
        extend: {
            colors: {
                primary: '#1c1c22',
                accent: {
                    DEFAULT: '#00ff99',
                    hover: '#00e187'
                }
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    },
    variants: {
        extend: {
            borderColor: ['focus-visible'],
            opacity: ['disabled'],
        }
    }
}