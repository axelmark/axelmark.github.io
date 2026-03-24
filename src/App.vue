<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-links">
        <router-link to="/">Главная</router-link>
        <router-link to="/about">Обо мне</router-link>
        <router-link to="/services">Услуги</router-link>    <!-- новая ссылка -->
        <router-link to="/contact">Контакты</router-link>
        <router-link to="/github">GitHub</router-link>
      </div>
      <ThemeToggle />
    </nav>
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2026 | Портфолио на Vue 3 + Vite</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import ThemeToggle from './components/ThemeToggle.vue'
import { useTheme } from './composables/useTheme'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})

useHead({
  title: 'Портфолио разработчика',
  meta: [
    { name: 'description', content: 'Мои проекты и навыки' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbar {
  background: var(--primary);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.nav-links a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}
.nav-links a:hover, .nav-links a.router-link-active {
  color: var(--primary-light);
}
main {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}
footer {
  text-align: center;
  padding: 2rem;
  background: var(--primary);
  color: white;
  margin-top: 2rem;
}
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }
  .nav-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  .nav-links a {
    margin: 0;
  }
}
</style>