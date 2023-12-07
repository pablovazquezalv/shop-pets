<template>
    <NavBar></NavBar>
   
    <h1 class="font-mono ml-32 text-xl">CALIFICACIONES</h1>
    <div class="flex ml-20 mt-5 mr-20">
    
        
    <table class="w-full text-sm text-left rtl:text-right text-red-500 dark:text-red-400">
        <thead class="text-xs text-white uppercase bg-red-700">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                    Apellido Materno
                </th>
                <th scope="col" class="px-6 py-3">
                    Apellido Paterno
                </th>
                <th scope="col" class="px-6 py-3">
                    Edad
                </th>
                <th scope="col" class="px-6 py-3">
                    Calificacion
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id" class="bg-white border-b text-black">
                <th scope="row" class="px-6 py-4 font-medium ">
                    {{ usuario.nombre }}
                </th>
                <td class="px-6 py-4">
                    {{ usuario.apellidoMaterno}}
                </td>
                <td class="px-6 py-4">
                    {{ usuario.apellidoPaterno }}
                </td>
                <td class="px-6 py-4">
                    {{ usuario.edad }}
                </td>
                <td class="px-6 py-4">
                    {{ usuario.calificacion_1 }}
                </td>
                <td class="px-6 py-4">
                    <button @click="isOpenAsignar = true" class="px-6 py-2 text-white bg-green-600 rounded shadow"
                    type="button">Asignar Calificacion</button>
                </td> 
                <td class="px-6 py-4">
                    <button @click="isOpen = true" class="px-6 py-2 text-white bg-blue-600 rounded shadow"
                    type="button">Editar Calificacion</button>
                </td>
                <td class="px-6 py-4">
                    <button @click="isOpenDelete = true  " class="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-700">Eliminar</button>
                </td>

            </tr>
          
        </tbody>
    </table>

<!--ASIGNAR CALIF-->
  
  <div
        v-show="isOpenAsignar"
        class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-red-700 bg-opacity-50
        "
      >
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Asignar Calificacion</h3>
            <svg
              @click="isOpenAsignar = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-red-900 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4">
            <label class="block mb-2 text-sm font-bold text-red-700">Ingrese la calificacion</label>
           <form  @submit.prevent="onAsignCalifUser">
            <input v-model="usuario.calificacion"
              class="w-full px-3 py-2 leading-tight text-red-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Calificacion"
            />
            <button 
              @click="isOpenAsignar = false" type="button"
              class="px-6 py-2 mt-5 text-blue-800 border border-blue-600 rounded"
            >
              Cancelar
            </button>
            <button class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded">
              Asignar
            </button>
        </form>
          </div>
        </div>
      </div>  

   <!-- UPDATE --> 
    <div
        v-show="isOpen"
        class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-red-700 bg-opacity-50
        "
      >
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Editar Calificacion</h3>
            <svg
              @click="isOpen = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-red-900 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4">
            <label class="block mb-2 text-sm font-bold text-red-700">Ingrese la calificacion</label>
           <form  @submit.prevent="onUpdateUser">
            <input v-model="usuario.calificacion"
              class="w-full px-3 py-2 leading-tight text-red-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Calificacion"
            />
            <button 
              @click="isOpen = false" type="button"
              class="px-6 py-2 mt-5 text-blue-800 border border-blue-600 rounded"
            >
              Cancelar
            </button>
            <button class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded">
              Guardar
            </button>
        </form>
          </div>
        </div>
      </div>  

      <!-- DELETE -->
      <div
        v-show="isOpenDelete"
        class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-red-700 bg-opacity-50
        "
      >
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Eliminar Calificacion</h3>
            <svg
              @click="isOpenDelete = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-red-900 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4">
            <label class="block mb-2 text-sm font-bold text-red-700">Ingrese la calificacion</label>
           <form  @submit.prevent="deleteCalif">
           <p>¿Esta seguro de eliminar la calificacion?</p>
            <button 
              @click="isOpen = false" type="button"
              class="px-6 py-2 mt-5 text-blue-800 border border-blue-600 rounded"
            >
              Cancelar
            </button>
            <button class="px-6 py-2 ml-2 text-blue-100 bg-red-600 rounded">
              Eliminar
            </button>
        </form>
          </div>
        </div>
      </div> 

</div>
   

</template>
<script lang="ts">
import NavBar from '../components/NavBar.vue';
import Materias from '../components/Grupos.vue';
import { defineComponent, ref } from 'vue';
import { useUserStore} from '../stores/user';

export default defineComponent ({

    components: {
        NavBar
    },

    data() {
        const userStore = useUserStore();
        const usuarios = ref([]);
        return {
            userStore,
            usuarios,
            usuario: {},
            isOpen: false,
            isOpenDelete: false,
            isOpenAsignar: false
        }
    },
    async  mounted() {
        await this.userStore.showUsers();
        this.usuarios = this.userStore.users;
        console.log(this.userStore.users.length);
         },
    methods: {
        showUsers()
        {
            this.userStore.showUsers();
            this.usuarios = this.userStore.users;
  
        },
        onUpdateUser()
        {
            this.userStore.updateUser(this.usuario.calificacion);
            //refresh page
            this.isOpen = false;
        },
        deleteCalif()
        {
            this.userStore.deleteCalif();
            this.isOpenDelete = false;
        },
        onAsignCalifUser()
        {
            this.userStore.asignCalifUser(this.usuario.calificacion);
            this.isOpenAsignar = false;
        }
    }

})
</script>


