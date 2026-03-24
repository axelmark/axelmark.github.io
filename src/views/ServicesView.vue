<template>
  <div class="services">
    <!-- Оглавление (якоря) -->
    <div class="section-nav">
      <a href="#android" class="nav-link">Android</a>
      <a href="#java" class="nav-link">Java Backend</a>
      <a href="#laravel" class="nav-link">Laravel</a>
      <a href="#students" class="nav-link">Студентам</a>
      <a href="#how-it-works" class="nav-link">Как работаем</a>
      <a href="#faq" class="nav-link">FAQ</a>
      <a href="#contact" class="nav-link">Связаться</a>
    </div>

    <!-- Заголовок и подзаголовок -->
    <h1 class="main-title">Разработка под ключ и помощь в учёбе:<br>Android, Java, Laravel — старт от 1 000 ₽</h1>
    <p class="subtitle">
      Недорого, качественно, с душой. Я начинающий разработчик, ищу реальные проекты для роста. Ваша идея станет моим следующим портфолио.
    </p>

    <!-- Обо мне -->
    <section class="about-me">
      <h2>Обо мне</h2>
      <p>
        Меня зовут <strong>Алексей</strong>, я Android‑разработчик (Kotlin/Java), backend-разработчик (Java, Spring, Laravel). Нахожусь в начале пути, поэтому каждый проект для меня — это шанс создать что‑то полезное и научиться новому. Я не беру огромных денег, но гарантирую ответственный подход и постоянную обратную связь.
      </p>
    </section>

    <!-- Android -->
    <section id="android" class="services-block">
      <h2><i class="fas fa-mobile-alt"></i> Android разработка</h2>
      <div class="service-cards">
        <div class="service-card">
          <i class="fas fa-id-card"></i>
          <h3>Приложение‑визитка</h3>
          <p>Контакты, карта, прайс‑лист, галерея изображений. Идеально для малого бизнеса.</p>
          <span class="price">от 1 000 ₽</span>
        </div>
        <div class="service-card">
          <i class="fas fa-list-ul"></i>
          <h3>Каталог / справочник</h3>
          <p>Удобный список товаров/услуг, поиск, фильтры, простая корзина.</p>
          <span class="price">от 3 000 ₽</span>
        </div>
        <div class="service-card">
          <i class="fas fa-calculator"></i>
          <h3>Калькулятор / конвертер</h3>
          <p>Любой математический или финансовый инструмент с красивым интерфейсом.</p>
          <span class="price">от 1 500 ₽</span>
        </div>
        <div class="service-card">
          <i class="fas fa-globe"></i>
          <h3>Оболочка для сайта (WebView)</h3>
          <p>Ваш сайт превращается в полноценное приложение с навигацией, пуш‑уведомлениями (опционально).</p>
          <span class="price">от 2 000 ₽</span>
        </div>
      </div>
    </section>

    <!-- Java Backend -->
    <section id="java" class="services-block">
      <h2><i class="fab fa-java"></i> Java Backend</h2>
      <div class="service-cards">
        <div class="service-card">
          <i class="fas fa-cloud-upload-alt"></i>
          <h3>Разработка REST API</h3>
          <p>Spring Boot, Spring Security, JPA, Hibernate. Документация Swagger.</p>
          <span class="price">от 3 000 ₽</span>
        </div>
        <div class="service-card">
          <i class="fas fa-database"></i>
          <h3>Интеграция с базами данных</h3>
          <p>Проектирование схем, оптимизация запросов (PostgreSQL, MySQL, MongoDB).</p>
          <span class="price">от 2 500 ₽</span>
        </div>
        <div class="service-card">
          <i class="fas fa-microchip"></i>
          <h3>Микросервисы</h3>
          <p>Spring Cloud, Docker, Kafka/RabbitMQ.</p>
          <span class="price">договорная</span>
        </div>
      </div>
    </section>

    <!-- Laravel разработка -->
    <section id="laravel" class="services-block">
      <h2><i class="fab fa-laravel"></i> Laravel разработка</h2>
      <div class="service-cards">
        <div class="service-card">
          <i class="fas fa-globe"></i>
          <h3>Веб-приложения</h3>
          <p>Полноценные сайты с админ-панелью, аутентификацией, API.</p>
          <span class="price">от 4 000 ₽</span>
        </div>
        <div class="service-card">
          <i class="fas fa-bug"></i>
          <h3>Доработка проектов</h3>
          <p>Правка багов, добавление функционала, рефакторинг.</p>
          <span class="price">от 1 500 ₽/час</span>
        </div>
        <div class="service-card">
          <i class="fas fa-exchange-alt"></i>
          <h3>Интеграции</h3>
          <p>Платёжные системы, CRM, рассылки.</p>
          <span class="price">от 2 000 ₽</span>
        </div>
      </div>
    </section>

    <!-- Помощь студентам -->
    <section id="students" class="services-block student-help">
      <h2><i class="fas fa-graduation-cap"></i> Помощь студентам и учащимся</h2>
      <div class="service-cards">
        <div class="service-card highlight">
          <i class="fas fa-laptop-code"></i>
          <h3>Лабораторные / курсовые</h3>
          <p>Java, Android, Laravel — с объяснением, а не просто готовый код.</p>
          <span class="price">от 500 ₽/задание</span>
        </div>
        <div class="service-card">
          <i class="fas fa-chalkboard-teacher"></i>
          <h3>Консультации</h3>
          <p>Разбор заданий, подготовка к собеседованиям, помощь с проектами.</p>
          <span class="price">1 000 ₽/час</span>
        </div>
        <div class="service-card">
          <i class="fas fa-file-alt"></i>
          <h3>Документация</h3>
          <p>Оформление лабораторных, пояснительные записки, презентации.</p>
          <span class="price">от 300 ₽</span>
        </div>
      </div>
    </section>

    <!-- Как мы работаем -->
    <section id="how-it-works" class="how-it-works">
      <h2>Как мы работаем</h2>
      <div class="steps">
        <div class="step">
          <i class="fas fa-comment-dots"></i>
          <h3>1. Заявка</h3>
          <p>Вы оставляете заявку или пишете в мессенджер.</p>
        </div>
        <div class="step">
          <i class="fas fa-clipboard-list"></i>
          <h3>2. Обсуждение</h3>
          <p>Уточняем детали, согласовываем сроки и стоимость.</p>
        </div>
        <div class="step">
          <i class="fas fa-code-branch"></i>
          <h3>3. Разработка</h3>
          <p>Промежуточные показы, быстрая обратная связь.</p>
        </div>
        <div class="step">
          <i class="fas fa-check-circle"></i>
          <h3>4. Сдача и поддержка</h3>
          <p>Передача исходного кода, помощь в настройке.</p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="faq">
      <h2>Часто задаваемые вопросы</h2>
      <div class="faq-grid">
        <div v-for="item in faq" :key="item.q" class="faq-item">
          <h3>{{ item.q }}</h3>
          <p>{{ item.a }}</p>
        </div>
      </div>
    </section>

    <!-- Социальное доказательство -->
    <section class="social-proof">
      <h2>Немного цифр</h2>
      <div class="stats">
        <div class="stat">
          <i class="fas fa-check-circle"></i>
          <span>5+</span>
          <p>Выполненных проектов</p>
        </div>
        <div class="stat">
          <i class="fas fa-users"></i>
          <span>10+</span>
          <p>Довольных клиентов</p>
        </div>
        <div class="stat">
          <i class="fas fa-graduation-cap"></i>
          <span>20+</span>
          <p>Помог студентам</p>
        </div>
      </div>
    </section>

    <!-- Контактная форма -->
    <section id="contact" class="contact-section">
      <h2>Свяжитесь со мной</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <input type="text" v-model="form.name" placeholder="Ваше имя" required>
        <input type="email" v-model="form.email" placeholder="Email" required>
        <textarea v-model="form.message" rows="4" placeholder="Опишите задачу или выберите услугу выше"></textarea>
        <button type="submit" :disabled="loading">{{ loading ? 'Отправка...' : 'Отправить' }}</button>
        <p v-if="status" :class="status.type">{{ status.message }}</p>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Услуги и цены | Android, Java, Laravel, помощь студентам',
  meta: [
    { name: 'description', content: 'Разработка Android-приложений, Java backend, Laravel, помощь студентам. Недорого, качественно, с душой.' }
  ]
})

const faq = [
  { q: 'Сколько времени занимает разработка?', a: 'В среднем от 3 до 10 дней, в зависимости от сложности. Сроки обсуждаем индивидуально.' },
  { q: 'Какая гарантия?', a: 'Предоставляю бесплатную поддержку в течение 2 недель после сдачи проекта. Исправляю ошибки, связанные с моим кодом.' },
  { q: 'Нужно ли будет платить за доработки?', a: 'Если доработки не входили в изначальное ТЗ – оплачиваются отдельно. Но я всегда предупреждаю о возможных изменениях.' },
  { q: 'Что нужно от меня для старта?', a: 'Чёткое описание идеи, примеры дизайна (если есть), доступ к серверу/домену (для веб-проектов).' }
]

const form = ref({ name: '', email: '', message: '' })
const loading = ref(false)
const status = ref(null)

const submitForm = async () => {
  loading.value = true
  status.value = null
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    if (response.ok) {
      status.value = { type: 'success', message: 'Спасибо! Я свяжусь с вами в ближайшее время.' }
      form.value = { name: '', email: '', message: '' }
    } else {
      throw new Error()
    }
  } catch (e) {
    status.value = { type: 'error', message: 'Ошибка отправки. Попробуйте позже или напишите напрямую в Telegram.' }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.services {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

/* Оглавление */
.section-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin: 1rem 0 2rem;
  padding: 0.75rem;
  background: var(--surface);
  border-radius: 2rem;
  box-shadow: 0 2px 4px var(--shadow);
  position: sticky;
  top: 1rem;
  z-index: 100;
  backdrop-filter: blur(8px);
}
.nav-link {
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  background: var(--bg);
  color: var(--text);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
  white-space: nowrap;
}
.nav-link:hover {
  background: var(--primary-light);
  color: white;
}
@media (max-width: 700px) {
  .section-nav {
    border-radius: 1rem;
    gap: 0.5rem;
    top: 0.5rem;
  }
  .nav-link {
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
  }
}

/* Заголовки */
.main-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--primary-light);
}
.subtitle {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-secondary);
}

.about-me {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px var(--shadow);
}
.about-me h2 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: var(--primary-light);
}

.services-block, .how-it-works, .faq, .social-proof, .contact-section {
  margin-top: 2rem;
}
h2 {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-light);
}

/* Карточки услуг */
.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.service-card {
  background: var(--surface);
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow);
  transition: transform 0.2s;
}
.service-card:hover {
  transform: translateY(-4px);
}
.service-card i {
  font-size: 1.8rem;
  color: var(--primary-light);
  margin-bottom: 0.5rem;
  display: inline-block;
}
.service-card h3 {
  margin: 0.5rem 0;
}
.service-card .price {
  display: inline-block;
  margin-top: 1rem;
  font-weight: bold;
  color: var(--primary-light);
  border-top: 1px solid var(--border);
  padding-top: 0.5rem;
}
.service-card.highlight {
  border-left: 4px solid var(--primary-light);
}

/* Этапы */
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  text-align: center;
}
.step i {
  font-size: 2rem;
  color: var(--primary-light);
  margin-bottom: 0.5rem;
}
.step h3 {
  margin: 0.5rem 0;
}

/* FAQ */
.faq-grid {
  display: grid;
  gap: 1rem;
}
.faq-item {
  background: var(--surface);
  padding: 1rem;
  border-radius: 8px;
}
.faq-item h3 {
  margin: 0 0 0.5rem;
  color: var(--primary-light);
}

/* Цифры */
.stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: center;
}
.stat i {
  font-size: 2rem;
  color: var(--primary-light);
}
.stat span {
  font-size: 1.8rem;
  font-weight: bold;
  display: block;
  margin: 0.5rem 0;
}

/* Контактная форма */
.contact-section {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 2rem;
}
.contact-form input, .contact-form textarea {
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.6rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--bg);
  color: var(--text);
}
.contact-form button {
  background: var(--primary-light);
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
}
.contact-form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.success {
  color: green;
}
.error {
  color: red;
}

@media (max-width: 768px) {
  .service-cards {
    grid-template-columns: 1fr;
  }
  .steps {
    grid-template-columns: 1fr;
  }
  .stats {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>