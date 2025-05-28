<script setup>
import Sidebar from '../components/Sidebar.vue';


</script>
<template>
    <div class="flex min-h-screen bg-gray-100">
        <Sidebar v-model:currentSection="currentSection" />
        <!-- aca va el dashboard -->
    </div>
</template>

<style></style>