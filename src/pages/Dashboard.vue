<script setup>
import CreateNewTemplate from '../components/CreateNewTemplate.vue';
import TemplateCard from '../components/TemplateCard.vue';

const templates = [
    {
        name: 'basic_feedback_template',
        status: 'Active',
        substatus: 'Pending',
        message: `Awesome <b>VARIABLE_CUSTOMER_NAME</b>,<br/>Looks like you have completed the scheduled service today.<br/>How was your experience?`,
        language: 'en',
        date: '6 May'
    },
    {
        name: 'basic_order_template',
        status: 'Active',
        substatus: 'Pending',
        message: `Confirmation of Your Order<br>Your order <b>12345</b> has been confirmed. We will notify you once it is shipped.`,
        language: 'en',
        date: '6 May'
    },
    {
        name: 'basic_order_template',
        status: 'Rejected',
        message: `Looks like someone placed an order!<br>Your order <b>1234</b> is confirmed. We'll notify you when it's on its way.`,
        language: 'en',
        date: '6 May'
    },
    {
        name: 'welcome_basic_template',
        status: 'Active',
        substatus: 'Pending',
        message: `Hi <b>VARIABLE_CUSTOMER_NAME</b>,<br/>We’re thrilled to welcome you to Gallabox!<br/>Thank you for choosing us. 🥳`,
        language: 'en',
        date: '6 May'
    }
];
</script>

<template>
    <h1 class="text-2xl font-bold mb-6">Hola desde Dashboard</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CreateNewTemplate />
        <TemplateCard v-for="(template, index) in templates" :key="index" v-bind="template" />
    </div>
</template>

<style></style>
