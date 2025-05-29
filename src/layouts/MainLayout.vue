<script setup lang="ts">
// import Sidebar from '../components/Sidebar.vue'
import { RouterView } from 'vue-router'
import NavBar from '../components/NavBar.vue';
</script>

<template>
    <div class="min-h-screen bg-gray-100">
      <!-- <Sidebar /> -->
        <NavBar/>
      <div class="flex-1 p-6 overflow-hidden">
        <RouterView />
      </div>
    </div>
  </template>
  
