<template>
<div class="ml-10">        
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
    <router-link to="/materias">Grupos</router-link>
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">GRUPO</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">{{tittle}}</p>
</a>
</div>
</template>
<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        tittle: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const tittle = ref(props.tittle);
        return {
            tittle
        }
    }
})
</script>