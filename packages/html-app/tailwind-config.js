tailwind.config = {
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/hero.webp')",
        "hero-main": "url('/images/hero-main.webp')",
        peak: "url('/images/peak.webp')",
        "tab-1": "url('/images/tab-1.webp')",
        "tab-2": "url('/images/tab-2.webp')",
      },
      colors: {
        dark: { 100: "rgb(77, 77, 77)" },
        blue: {
          100: "rgb(65, 79, 107)",
          200: "rgba(65, 79, 107, 0.5)",
          300: "rgba(65, 79, 107, 0.9)",
          400: "rgb(176, 180, 190)",
          500: "rgb(99, 118, 157)",
        },
        slate: {
          100: "rgb(176, 180, 190)",
        },
      },
      screens: {
        mobile: "576px",
      },
    },
  },
};
