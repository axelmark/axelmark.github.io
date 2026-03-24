import { ref, watch } from 'vue'

export function useTheme() {
    const isDark = ref(false)

    const applyTheme = () => {
        if (isDark.value) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    const toggleTheme = () => {
        isDark.value = !isDark.value
        applyTheme()
    }

    // Инициализация
    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            isDark.value = true
        } else if (savedTheme === 'light') {
            isDark.value = false
        } else {
            isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        applyTheme()
    }

    return { isDark, toggleTheme, initTheme }
}