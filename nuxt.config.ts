import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css", "veloce-vue/styles.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["motion-v/nuxt", "@vueuse/nuxt"],
  app: {
    head: {
      script: [
        {
          innerHTML: `    const userPref = localStorage.getItem('color-mode');

    if (userPref === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.background = 'oklch(20.5% 0 0)';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.background = '#fff';
    }`,
          type: "text/javascript",
        },
      ],
    },
  },
});