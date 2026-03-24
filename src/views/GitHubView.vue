<template>
  <div class="github">
    <h1>Мои GitHub репозитории</h1>
    <div v-if="loading" class="loading">Загрузка...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="repos-grid">
      <div v-for="repo in repos" :key="repo.id" class="repo-card">
        <h3>
          <a :href="repo.html_url" target="_blank" rel="noopener">{{ repo.name }}</a>
        </h3>
        <p>{{ repo.description || 'Нет описания' }}</p>
        <div class="repo-meta">
          <span v-if="repo.language" class="language">{{ repo.language }}</span>
          <span v-if="repo.stargazers_count" class="stars">⭐ {{ repo.stargazers_count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const repos = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/users/axelmark/repos?sort=updated&per_page=10')
    if (!response.ok) throw new Error('Не удалось загрузить репозитории')
    const data = await response.json()
    repos.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.github h1 {
  text-align: center;
  margin-bottom: 2rem;
}
.repos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
.repo-card {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow);
}
.repo-card h3 {
  margin-top: 0;
}
.repo-card a {
  color: var(--primary-light);
  text-decoration: none;
}
.repo-card a:hover {
  text-decoration: underline;
}
.repo-meta {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
}
.loading, .error {
  text-align: center;
  padding: 2rem;
}
</style>