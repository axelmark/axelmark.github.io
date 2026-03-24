<template>
  <div class="home">
    <h1>Мои проекты</h1>

    <div class="filters" v-if="tags.length">
      <button
          v-for="tag in ['all', ...tags]"
          :key="tag"
          :class="{ active: selectedTag === tag }"
          @click="selectedTag = tag"
      >
        {{ tag === 'all' ? 'Все' : tag }}
      </button>
    </div>

    <TransitionGroup name="fade" tag="div" class="projects-grid">
      <ProjectCard
          v-for="project in filteredProjects(selectedTag)"
          :key="project.id"
          :project="project"
      />
    </TransitionGroup>

    <div v-if="projects.length === 0" class="empty">
      Загрузка проектов...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { useProjects } from '../composables/useProjects'

const { projects, tags, loadProjects, filteredProjects } = useProjects()
const selectedTag = ref('all')

onMounted(async () => {
  await loadProjects()
  console.log('Loaded projects:', projects.value) // проверка
})
</script>

<style scoped>
.home h1 {
  text-align: center;
  margin-bottom: 2rem;
}
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.filters button {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text);
}
.filters button.active {
  background: var(--primary-light);
  color: white;
  border-color: var(--primary-light);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
.empty {
  text-align: center;
  padding: 2rem;
}
</style>