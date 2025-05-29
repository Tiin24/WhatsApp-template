<script setup lang="ts">
// import Sidebar from '../components/Sidebar.vue'
import { RouterView } from 'vue-router'
import NavBar from '../components/NavBar.vue';
import { ref } from 'vue';

const status = ref<'ALL' | 'draft' | 'approved' | 'rejected'>('ALL');
</script>

<template>
    <div class="min-h-screen bg-gray-100">
      <!-- <Sidebar /> -->
      <NavBar v-model="status" />
      <div class="flex-1 p-6 overflow-hidden">
        <RouterView />
      </div>
    </div>
  </template>
  
