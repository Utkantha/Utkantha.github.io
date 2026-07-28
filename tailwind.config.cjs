/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        border: 'var(--border-color)',
        bg: {
          primary:   'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card:      'var(--bg-card)',
          hover:     'var(--bg-hover)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          light:   'var(--accent-light)',
          subtle:  'rgba(108,99,255,0.08)',
        },
        ink: {
          primary:   'var(--ink-primary)',
          secondary: 'var(--ink-secondary)',
          muted:     'var(--ink-muted)',
        },
      },
      boxShadow: {
        glow:     '0 0 40px rgba(108,99,255,0.28)',
        'glow-sm':'0 4px 22px rgba(108,99,255,0.22)',
        card:     'var(--shadow-card)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6c63ff 0%, #a78bfa 50%, #c084fc 100%)',
        'gradient-text':   'linear-gradient(135deg, var(--gradient-text-start), var(--gradient-text-mid), var(--gradient-text-end))',
        'gradient-hero':   'var(--hero-glow)',
        'grid-lines': [
          'linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)',
        ].join(', '),
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      animation: {
        float:     'float 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.65s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
