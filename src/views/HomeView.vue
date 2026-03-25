<template>
  <div class="zen-layout">
    <div class="container">
      <!-- Стек технологий -->
      <nav class="stack-nav">
        <span>Android</span>
        <span class="separator">/</span>
        <span>Java Spring</span>
        <span class="separator">/</span>
        <span>Laravel</span>
        <span class="separator">/</span>
        <span>Vue</span>
        <span class="separator">/</span>
        <span>Помощь студентам</span>
      </nav>

      <!-- Главный месседж -->
      <main class="core">
        <h1 class="statement">
          Пишу код.<br />
          Помогаю учиться.
        </h1>
        <p class="meta">Engineering & Academic Support</p>
      </main>

      <!-- Контактный блок (кнопки-заглушки) -->
      <footer class="contact">
        <div class="contact-links">
          <button class="tg-button disabled">
            <i class="fab fa-telegram"></i> Telegram
          </button>
          <button class="email-button disabled">
            <i class="fas fa-envelope"></i> Email
          </button>
        </div>
        <div class="price-label">Старт 1 000 ₽</div>
        <div class="note">Контакты временно не активны — сайт в разработке</div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Пишу код. Помогаю учиться. | Android, Java, Laravel, Vue',
  meta: [
    { name: 'description', content: 'Разработка под ключ и помощь студентам. Android, Java Spring, Laravel, Vue. Старт от 1000 ₽.' }
  ]
})
</script>

<style scoped>
.zen-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.container {
  text-align: center;
  padding: 2rem 1rem;
}
.stack-nav {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 60px;
  color: var(--text-secondary);
}
.separator {
  margin: 0 10px;
  opacity: 0.3;
}
.statement {
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
  margin: 0 0 16px 0;
  color: var(--text);
}
.meta {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 400;
  margin-bottom: 60px;
}
.contact {
  margin-top: 40px;
}
.contact-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.tg-button, .email-button {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: default;
  transition: opacity 0.2s;
}
.tg-button {
  background: #26A5E4;
  color: white;
}
.email-button {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
}
.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.price-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-secondary);
  opacity: 0.7;
  margin-top: 1rem;
}
.note {
  margin-top: 1rem;
  font-size: 0.7rem;
  color: var(--text-secondary);
  opacity: 0.5;
}
@media (max-width: 500px) {
  .stack-nav {
    font-size: 9px;
    margin-bottom: 40px;
  }
  .statement {
    font-size: 2.2rem;
  }
}
</style>
