import { ref } from 'vue'

// Функция для парсинга frontmatter из markdown
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
            // Убираем кавычки
            if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1)
            if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1)
            // Парсим массив тегов
            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''))
            }
            data[key] = value
        }
    })
    const restContent = content.slice(match[0].length)
    return { data, content: restContent }
}

export function useProjects() {
    const projects = ref([])
    const tags = ref([])

    const loadProjects = async () => {
        // Обновлённый glob с query вместо as
        const modules = import.meta.glob('../data/projects/*.md', { eager: true, query: '?raw', import: 'default' })
        const loaded = []
        const allTags = new Set()

        for (const [path, raw] of Object.entries(modules)) {
            const { data, content } = parseFrontmatter(raw)
            const id = path.split('/').pop().replace('.md', '')
            const title = data.title || content.match(/# (.+)/)?.[1] || 'Без названия'
            const description = data.description || content.split('\n').find(line => line.trim() && !line.startsWith('#')) || ''
            const project = {
                id,
                title,
                description,
                content,
                date: data.date || null,
                tags: data.tags || [],
                image: data.image || null,
                demo: data.demo || null,
                github: data.github || null
            }
            loaded.push(project)
            project.tags.forEach(tag => allTags.add(tag))
        }

        // Сортировка по дате (новые сверху)
        loaded.sort((a, b) => new Date(b.date) - new Date(a.date))
        projects.value = loaded
        tags.value = Array.from(allTags).sort()
    }

    const filteredProjects = (selectedTag) => {
        if (selectedTag === 'all') return projects.value
        return projects.value.filter(p => p.tags.includes(selectedTag))
    }

    return { projects, tags, loadProjects, filteredProjects }
}