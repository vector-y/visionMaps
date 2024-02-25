import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        'kollektif': ['kollektif', 'sans-serif'],
        'inter': ['inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
