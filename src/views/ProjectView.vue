<template>
  <div class="project">
    <button @click="$router.back()" class="back-btn">← Назад</button>
    <div v-if="project" class="project-content">
      <div v-if="project.image" class="hero-image">
        <img :src="project.image" :alt="project.title" />
      </div>
      <h1>{{ project.title }}</h1>
      <div class="meta">
        <div v-if="project.date" class="date">{{ formatDate(project.date) }}</div>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="links">
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener">Демо</a>
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
      <div class="markdown-content" v-html="renderedContent"></div>
    </div>
    <div v-else>Загрузка...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

// Функция парсинга frontmatter
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/
  const match = content.match(frontmatterRegex)
  if (!match) return { data: {}, content }

  const frontmatterStr = match[1]
  const data = {}
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      let value = line.slice(colonIndex + 1).trim()
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1)
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1)
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''))
      }
      data[key] = value
    }
  })
  const restContent = content.slice(match[0].length)
  return { data, content: restContent }
}

marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  }
})

const route = useRoute()
const project = ref(null)
const renderedContent = ref('')

onMounted(async () => {
  const id = route.params.id
  try {
    const raw = await import(`../data/projects/${id}.md?raw`)
    const { data, content } = parseFrontmatter(raw.default)
    project.value = {
      id,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      image: data.image,
      demo: data.demo,
      github: data.github
    }
    renderedContent.value = marked.parse(content)
  } catch (e) {
    console.error(e)
    renderedContent.value = '<p>Проект не найден</p>'
  }
})

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('ru-RU')
}
</script>

<style scoped>
/* те же стили, что были */
.project {
  max-width: 800px;
  margin: 0 auto;
}
.back-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background 0.3s;
}
.back-btn:hover {
  background: var(--primary-light);
}
.hero-image {
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.hero-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}
.tags {
  display: flex;
  gap: 0.5rem;
}
.tag {
  background: var(--border);
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
}
.links a {
  margin-left: 1rem;
  color: var(--primary-light);
  text-decoration: none;
}
.links a:hover {
  text-decoration: underline;
}
.markdown-content {
  background: var(--surface);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow);
}
.markdown-content :deep(pre) {
  background: #2d2d2d;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}
.markdown-content :deep(code) {
  font-family: monospace;
}
</style>