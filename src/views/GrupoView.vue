
<template>
    <NavBar></NavBar>
    <div class="flex-row">
<div class="align-center" v-for="grupo in grupos" :key="grupo.id">
        
    <div class="ml-10 mt-5 "> 
        <router-link to="/calificaciones">
    <a class="block max-w-sm p-6 bg-red-400 border border-gray-200 rounded-lg shadow h-32">
       
    <p class="font-bold text-lg text-gray-900 ">SECCION: {{ grupo.seccion }}</p>
    <p class="font-bold text-xl text-gray- mt-4 ">GRUPO: {{ grupo.grado }}</p>    

    </a>
</router-link>  
    </div>
</div>
</div>
    
    <!-- <GruposComponent tittle="{{ grupo.grado }}"></GruposComponent> -->
</template>
<script lang="ts">
import NavBar from '../components/NavBar.vue';
//import GruposComponent from '../components/Grupos.vue';
import { defineComponent, ref } from 'vue';
import {useGroupStore} from '../stores/group';
export default  defineComponent({
    components: {
        NavBar
    },

    data() {
        const groupStore = useGroupStore();
        const grupos = ref([]);
        return {
            groupStore,
            grupos,
            grupo: {}
        }
    },

    async mounted() {
        await this.groupStore.showGroups();
        this.grupos = this.groupStore.groups;
    },

    methods: {
     
        showGroups()
        {   
            this.groupStore.showGroups();
        }
    }
})
</script>
