<script setup lang="ts">
import { ref } from 'vue'
import { MoreVertical, Phone, MoreHorizontal, Reply, Link, ChevronUp } from 'lucide-vue-next'
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
    return `<span class="bg-teal-100 text-teal-800 px-1 rounded font-medium">${match}</span>`
  })
}


const highlightedBody = computed(() => {
  return highlightVariables(props.template.components.body.content)
})

const getButtonIcon = (type: string) => {
  switch (type) {
    case 'QUICK_REPLY':
      return Reply
    case 'PHONE_NUMBER':
      return Phone
    case 'STATIC_URL':
      return Link
    case 'EXPLORE':
      return MoreHorizontal
    case 'COLLAPSE':
      return ChevronUp
    default:
      return MoreHorizontal
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
  <div class="bg-[#f1f5f9] rounded-xl shadow-sm border border-gray-200 h-80 flex flex-col overflow-hidden">

    <!-- Header -->
    <div class="flex items-center justify-between p-4 gap-1 bg-slate-100 rounded-t-xl">
      <div class="flex flex-col gap-1">
        <!-- Nombre con truncado -->
        <span class="text-xs text-gray-700 font-medium truncate max-w-[20ch]" :title="template.name">
          {{ template.name }}
        </span>
        <div class=" text-xs rounded-full inline-flex items-center w-fit">
          <div :class="statusClass">
            <span class="font-medium">{{ template.status }}</span>
          </div>

          <div>
            <!-- Código de lenguaje en mayúsculas -->
            <span class="truncate ml-1 text-gray-500">{{ template.category }}</span>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          class="h-7 px-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2">
          View
        </button>
        <div class="relative">
          <button @click="toggleDropdown"
            class="h-7 w-7 px-2 bg-white border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2">
            <MoreVertical :size="12" />
            <span class="sr-only">More options</span>
          </button>

          <div v-if="isDropdownOpen">
            <div class="fixed inset-0 z-10" @click="closeDropdown"></div>
            <div class="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-20">
              <div class="py-1">
                <button @click="handleEdit"
                  class="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Edit
                </button>
                <button @click="handleDuplicate"
                  class="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Duplicate
                </button>
                <button @click="handleDelete"
                  class="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-300"></div>

    <!-- Main -->
    <div class="flex-1 overflow-y-auto p-4">
      <!-- header -->
      <div class="bg-white rounded-lg p-4 shadow-sm">
        <h3 class="text-gray-800 font-medium mb-3">{{ template.components.header.content }}</h3>
        <!-- body -->
        <div class="space-y-3">
          <div class="text-gray-700 text-sm leading-relaxed">

            <div class="text-gray-700 text-sm leading-relaxed" v-html="highlightedBody"></div>
          </div>

          <!-- footer main -->

          <div class="border-t border-gray-300"></div>
          <!-- buttons -->
          <div v-if="visibleButtons.length" class="mt-4">
            <div v-for="(button, index) in visibleButtons" :key="button.id" class="flex flex-col">

              <div v-if="index !== 0" class="border-t border-gray-300 my-2"></div>
              <div class="flex items-center justify-center gap-2 text-sm text-blue-600 hover:underline cursor-pointer">
                <component :is="getButtonIcon(button.type)" :size="16" />
                {{ button.text }}
              </div>
            </div>

            <!-- Botón para togglear mostrar más/menos -->
            <div v-if="hasMoreButtons"
              class="mt-2 pt-2 border-t border-gray-300 text-sm text-blue-600 hover:underline cursor-pointer flex items-center justify-center gap-1"
              @click="toggleShowButtons">
              <component :is="getButtonIcon(showAllButtons ? 'COLLAPSE' : 'EXPLORE')" :size="16" />
              {{ showAllButtons ? 'Mostrar menos' : 'Explorar más' }}
            </div>
          </div>


        </div>
      </div>
    </div>

    <!-- Footer -->
    <!-- Footer -->
    <div class="flex items-center justify-between px-4 py-3 text-sm text-gray-500 border-t border-gray-200">
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
