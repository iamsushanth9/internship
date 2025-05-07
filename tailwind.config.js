/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-40px) scale(1.08)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(30px) scale(1.04)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.07)' },
        },
        float4: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(20px) scale(1.03)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #00abe4' },
          '50%': { boxShadow: '0 0 25px #00abe4, 0 0 40px #00abe4' },
        },
        'gradient-shift': {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
      },
      animation: {
        float1: 'float1 8s ease-in-out infinite',
        float2: 'float2 10s ease-in-out infinite',
        float3: 'float3 12s ease-in-out infinite',
        float4: 'float4 9s ease-in-out infinite',
        slideUp: 'slideUp 1s ease-out forwards',
        shine: 'shine 1.2s linear infinite',
        glow: 'glow 1.5s infinite',
        'gradient': 'gradient-shift 12s ease-in-out infinite',
      },
      
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
};
