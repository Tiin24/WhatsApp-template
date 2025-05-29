<script setup lang="ts">
defineProps<{
  modelValue: string;
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const options = [
  { value: 'ALL', label: 'All' },
  { value: 'draft', label: 'Draft' },
  { value: 'approved', label: 'Approved' },
  { value: 'rejected', label: 'Rejected' }
]
</script>

<template>
  <div class="bg-white px-4 py-3 border-b border-gray-200 sticky top-0 z-10 shadow-sm">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold text-gray-800">WhatsApp Templates</h2>

      <div class="flex items-center space-x-2">
        <span class="text-sm text-gray-600">Status:</span>
        <div class="relative inline-block">
          <select
            class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-whatsapp-green focus:border-transparent"
            :value="modelValue" @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
            <option v-for="option in options" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>

          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
