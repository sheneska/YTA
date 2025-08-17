import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030213",
        secondary: "#6D28D9",
        night: "#0d1116",
      },
      boxShadow: {
        card: "0 30px 60px -15px rgba(0,0,0,0.3)"
      },
      borderRadius: { "2xl": "1rem" }
    }
  },
  plugins: [],
};
export default config;
