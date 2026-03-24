<template>
  <router-link :to="'/project/' + project.id" class="project-card">
    <div v-if="project.image" class="card-image">
      <img :src="project.image" :alt="project.title" loading="lazy" />
    </div>
    <h3>{{ project.title }}</h3>
    <p class="description">{{ project.description }}</p>
    <div class="tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div v-if="project.date" class="date">{{ formatDate(project.date) }}</div>
  </router-link>
</template>

<script setup>
defineProps({
  project: Object
})
const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('ru-RU')
}
</script>

<style scoped>
.project-card {
  display: block;
  background: var(--surface);
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: var(--text);
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px var(--shadow);
}
.card-image {
  width: 100%;
  height: 180px;
  overflow: hidden;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.project-card:hover .card-image img {
  transform: scale(1.05);
}
.project-card h3 {
  margin: 1rem 1rem 0.5rem;
  font-size: 1.2rem;
}
.description {
  margin: 0 1rem 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 1rem 0.5rem;
}
.tag {
  background: var(--border);
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  color: var(--text);
}
.date {
  margin: 0 1rem 1rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
}
</style>