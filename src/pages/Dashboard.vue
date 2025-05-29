<script setup lang="ts">
import CreateNewTemplate from '../components/CreateNewTemplate.vue'
import { onMounted, onBeforeUnmount } from 'vue'
import TemplateCard from '../components/TemplateCard.vue'
import { useTemplate } from '../composables/useTemplates'


const {
  templates,
  loading,
  hasMore,
  fetchTemplates
} = useTemplate()

const handleScroll = () => {
  const scrollTop = window.scrollY
  const windowHeight = window.innerHeight
  const fullHeight = document.body.scrollHeight

  if (scrollTop + windowHeight >= fullHeight - 200) {
    fetchTemplates()
  }
}

onMounted(() => {
  fetchTemplates()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>


<template>
  <h1 class="text-2xl font-bold mb-6">Hola desde Dashboard</h1>

  <TransitionGroup name="fade" tag="div" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <CreateNewTemplate />
    <TemplateCard v-for="template in templates" :key="template.id" :template="template" />
  </TransitionGroup>


  <div v-if="loading" class="text-center mt-4 text-gray-500">Cargando Templates</div>
  <div v-else-if="!hasMore" class="text-center mt-4 text-gray-400">No hay más resultados</div>
</template>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
