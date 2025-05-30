<script setup lang="ts">
const handleCreate = () => {
    console.log('Crear nuevo template');
};

const handleLibraryLink = () => {
    console.log('Ir a la librería de templates');
};
</script>

<template>
    <div class="bg-card rounded-xl shadow-sm border border-gray-200 h-85 flex flex-col overflow-hidden">

        <!-- Header -->
        <div class="flex flex-col items-center justify-center p-4 bg-card rounded-md w-full">
            <h3 class="text-base font-semibold text-gray-800 mb-4 text-center">Create new template</h3>
        </div>
        <div class="border-t border-gray-300"></div>

        <!-- Main -->
        <div class="flex-1 flex items-center justify-center">
            <div @click="handleCreate"
                class="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition">
                <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </div>
        </div>

        <!-- Footer -->
        <div class="text-center pb-4">
            <button @click="handleLibraryLink" class="text-sm text-gray-500 hover:text-gray-700 underline">
                Create new from our library →
            </button>
        </div>
    </div>
</template>