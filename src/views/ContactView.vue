<template>
  <div class="contact">
    <h1>Свяжитесь со мной</h1>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Имя</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Сообщение</label>
        <textarea id="message" v-model="form.message" rows="5" required></textarea>
      </div>
      <button type="submit" :disabled="loading">{{ loading ? 'Отправка...' : 'Отправить' }}</button>
      <p v-if="status" :class="status.type">{{ status.message }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const form = ref({ name: '', email: '', message: '' })
const loading = ref(false)
const status = ref(null)

onMounted(() => {
  const service = route.query.service
  if (service) {
    form.value.message = `Интересует услуга: ${service}\n\n`
  }
})

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
      status.value = { type: 'success', message: 'Сообщение отправлено!' }
      form.value = { name: '', email: '', message: '' }
    } else {
      throw new Error('Ошибка отправки')
    }
  } catch (error) {
    status.value = { type: 'error', message: 'Произошла ошибка. Попробуйте позже.' }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
}
.contact h1 {
  text-align: center;
  margin-bottom: 2rem;
}
.contact-form {
  background: var(--surface);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow);
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--bg);
  color: var(--text);
}
button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}
button:hover:not(:disabled) {
  background: var(--primary-light);
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.success {
  color: green;
  margin-top: 1rem;
}
.error {
  color: red;
  margin-top: 1rem;
}
</style>