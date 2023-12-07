<template>
    <NavBar></NavBar>
    <h1 class="ml-20">MATERIAS </h1>

    <div v-for="materia in materias" :key="materia.id">
        <div class="ml-10">
            <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                <router-link to="/calificaciones">Materias</router-link>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">MATERIA</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">NOMBRE: {{ materia.nombre }}</p>
           </a>
        </div>
    </div>  
   
</template>
<script lang="ts">
import NavBar from '../components/NavBar.vue';
import Materias from '../components/Grupos.vue';
import { defineComponent, ref } from 'vue';
import {useMateriaStore} from '../stores/materia';

export default defineComponent ({

    components: {
        NavBar
    },

    data() {
        const materiaStore = useMateriaStore();
        const materias = ref([]);
        return {
            materiaStore,
            materias,
            materia: {}
        }
    },
    async  mounted() {
        await this.materiaStore.showMaterias();
        this.materias = this.materiaStore.materials;
        console.log(this.materiaStore.materials.length);
         },
    methods: {
        showMateriass()
        {
            this.materiaStore.showMaterias();
            this.materias = this.materiaStore.materials;
  
        }
    }

})
</script>


