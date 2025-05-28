<script setup lang="ts">
import {
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/vue/24/outline'

const emit = defineEmits(['update:currentSection'])

const menuItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '#' },
  { name: 'Analytics', icon: ChartBarIcon, path: '#' },
  { name: 'Users', icon: UserGroupIcon, path: '#' },
  { name: 'Settings', icon: CogIcon, path: '#' },
]

const handleClick = (name: string) => {
  emit('update:currentSection', name)
}
</script>

<template>
  <aside class="bg-gray-800 text-white w-64 min-h-screen p-4 flex-shrink-0">
    <div class="mb-8">
      <h2 class="text-2xl font-bold">My App</h2>
    </div>

    <nav>
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.name">
          <b-button @click="handleClick(item.name)"
            class="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors text-left cursor-pointer">
            <component :is="item.icon" class="w-6 h-6" />
            <span>{{ item.name }}</span>
          </b-button>

        </li>
      </ul>
    </nav>
  </aside>
</template>