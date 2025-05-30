<script setup lang="ts">
import { ref } from 'vue'
import type { Template } from '../types/Template'
import { computed } from 'vue'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const formattedDate = computed(() => {
  return format(new Date(props.template.createdAt), 'd MMM', { locale: es })
})

const props = defineProps<{
  template: Template
}>()

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const handleEdit = () => {
  console.log('Edit clicked', props.template.id)
  closeDropdown()
}

const handleDuplicate = () => {
  console.log('Duplicate clicked', props.template.id)
  closeDropdown()
}

const handleDelete = () => {
  console.log('Delete clicked', props.template.id)
  closeDropdown()
}

const highlightVariables = (text: string) => {
  return text.replace(/(\{\{[^}]+\}\}|[A-Z_]+_[A-Z_]+)/g, (match) => {
    return `<span class="bg-gray-200 text-green-700 px-1 rounded font-medium">${match}</span>`
  })
}

const highlightedBody = computed(() => {
  return highlightVariables(props.template.components.body.content)
})

const getIconName = (type: string) => {
  switch (type) {
    case 'QUICK_REPLY':
      return 'bi-reply-fill'
    case 'PHONE_NUMBER':
      return 'bi-telephone-outbound-fill'
    case 'STATIC_URL':
      return 'la-external-link-alt-solid'
    case 'EXPLORE':
      return 'md-morehoriz'
    case 'COLLAPSE':
      return 'fa-chevron-up'
    default:
      return 'md-morevert'
  }
}

const maxVisible = 2
const showAllButtons = ref(false)

const visibleButtons = computed(() => {
  const all = props.template.components.buttons || []
  return showAllButtons.value ? all : all.slice(0, maxVisible)
})

const hasMoreButtons = computed(() => {
  return (props.template.components.buttons?.length || 0) > maxVisible
})

const toggleShowButtons = () => {
  showAllButtons.value = !showAllButtons.value
}

const statusClass = computed(() => {
  switch (props.template.status.toLowerCase()) {
    case 'approved':
      return 'bg-green-100 text-green-800 rounded p-1'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 rounded p-1'
    case 'rejected':
      return 'bg-red-100 text-red-800 rounded p-1'
    case 'draft':
      return 'bg-gray-100 text-gray-700 rounded p-1'
    default:
      return 'bg-blue-100 text-blue-800 rounded p-1'
  }
})
</script>

<template>
  <div class="bg-card rounded-xl shadow-sm border border-gray-200 h-85 flex flex-col overflow-hidden">
    <!-- Header -->
    <div class="flex items-center justify-between p-3 gap-1 bg-[#dde2ec] rounded-t-xl">
      <div class="flex flex-col gap-1">
        <span class="text-xs text-gray-700 font-bold truncate max-w-[20ch]" :title="template.name">
          {{ template.name }}
        </span>
        <div class="text-xs rounded-full inline-flex items-center w-fit">
          <div :class="statusClass">
            <span class="font-medium">{{ template.status }}</span>
          </div>
          <div>
            <span class="truncate ml-1 text-gray-500">{{ template.category }}</span>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-1">
        <button
          class="h-6 w-10 px-1 bg-white border border-gray-300 rounded-md text-xs font-normal text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2">
          View
        </button>
        <div class="relative">
          <button @click="toggleDropdown"
            class="h-6 w-6 bg-white border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2">
            <v-icon name="md-morevert" scale="0.75" />
            <span class="sr-only">More options</span>
          </button>

          <div v-if="isDropdownOpen">
            <div class="fixed inset-0 z-10" @click="closeDropdown"></div>
            <div class="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-20">
              <div class="py-1">
                <button @click="handleEdit"
                  class="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</button>
                <button @click="handleDuplicate"
                  class="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Duplicate</button>
                <button @click="handleDelete"
                  class="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main -->
    <div class="bubble flex-1 overflow-y-auto p-4">
      <div class="bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg p-4 shadow-sm w-60 relative">
        
        <!-- Tail -->
        <div class="absolute top-0 -left-2 w-0 h-0 border-t-3 border-b-8 border-r-8 border-transparent border-r-white">
        </div>


        <!-- header -->
        <h3 class="text-gray-800 font-medium text-sm mb-1">{{ template.components.header.content }}</h3>

        <!-- body -->
        <div class="space-y-3">
          <div class="text-gray-700 text-xs">
            <div class="text-gray-700 text-xs" v-html="highlightedBody"></div>
          </div>

          <!-- footer main -->
          <div class="border-t border-gray-300"></div>

          <!-- buttons -->
          <div v-if="visibleButtons.length" class="mt-4">
            <div v-for="(button, index) in visibleButtons" :key="button.id" class="flex flex-col">
              <div v-if="index !== 0" class="border-t border-gray-300 my-2"></div>
              <div class="flex items-center justify-center gap-2 text-xs text-blue-600 hover:underline cursor-pointer">
                <v-icon :name="getIconName(button.type)" scale="1" />
                {{ button.text }}
              </div>
            </div>

            <!-- Mostrar más/menos -->
            <div v-if="hasMoreButtons"
              class="mt-2 pt-2 border-t border-gray-300 text-xs text-blue-600 hover:underline cursor-pointer flex items-center justify-center gap-1"
              @click="toggleShowButtons">
              <v-icon :name="getIconName(showAllButtons ? 'COLLAPSE' : 'EXPLORE')" scale="1" />
              {{ showAllButtons ? 'Mostrar menos' : 'Explorar más' }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="bg-[#dde2ec] flex items-center justify-between px-4 py-2 text-sm text-gray-500 border-t border-gray-200">
      <span class="bg-white w-5 rounded justify-center items-center flex">{{ template.language }}</span>
      <span>{{ formattedDate }}</span>
    </div>
  </div>
</template>

<style scoped>
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
