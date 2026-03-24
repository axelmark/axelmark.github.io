<template>
  <button class="theme-toggle" @click="toggleTheme">
    <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'
const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text);
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.3s;
}
.theme-toggle:hover {
  background: var(--border);
}
</style>