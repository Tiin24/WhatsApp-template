<template>
  <div class="bg-[#f1f5f9] rounded-xl shadow-sm border border-gray-200 h-80 flex flex-col overflow-hidden">

    <!-- Header -->
    <div class="flex items-center justify-between p-4 gap-1 bg-slate-100 rounded-t-xl">
      <div class="flex flex-col gap-1">
        <span class="text-xs text-gray-700 font-medium truncate">basic_feedback_templ...</span>
        <div class=" text-xs rounded-full inline-flex items-center w-fit">
          <div class="bg-green-100 text-green-800">

            <span class="font-medium">Active - Pending</span>
          </div>
          <div>
            <span class="truncate ml-1 text-gray-500">UTIL...</span>
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
      <div class="bg-white rounded-lg p-4 shadow-sm">
        <h3 class="text-gray-800 font-medium mb-3">Liked our service?</h3>

        <div class="space-y-3">
          <div class="text-gray-700 text-sm leading-relaxed">
            <div class="font-medium">Awesome</div>
            <span class="text-teal-600 font-medium">VARIABLE_CUSTOMER_NAME</span><span class="text-gray-700">,</span>
          </div>

          <p class="text-gray-700 text-sm leading-relaxed">
            Looks like you have completed the scheduled service today.
          </p>

          <div class="mt-6">
            <p class="text-gray-700 text-sm mb-3">How was your experience?</p>

            <div class="flex items-center gap-2 text-blue-500">
              <ThumbsUp :size="16" />
              <span class="text-sm font-medium">Loved it!</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between px-4 py-3 text-sm text-gray-500 border-t border-gray-200">
      <span>en</span>
      <span>6 May</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MoreVertical, ThumbsUp } from 'lucide-vue-next'

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const handleEdit = () => {
  console.log('Edit clicked')
  closeDropdown()
}

const handleDuplicate = () => {
  console.log('Duplicate clicked')
  closeDropdown()
}

const handleDelete = () => {
  console.log('Delete clicked')
  closeDropdown()
}
</script>

<style scoped>
/* Custom scrollbar styling */
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