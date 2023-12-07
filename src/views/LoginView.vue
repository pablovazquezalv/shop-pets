<template>
    <div class="flex">
        <div class="w-1/2 bg-black min-h-max">
            <img src="../../public/harvard-university8762.jpg" alt="">
        </div>
        <div class="w-1/2 ">
            <form @submit.prevent="onsubmitLogin">
            <h1 class="text-red-400 font-bold m-10 ml-10 text-xl">INICIAR SESION</h1>
            <input v-model="userStore.user.email"  class=" ml-10 border border-red-200 h-10 w-3/4 mt-10 " type="text" placeholder=" Email o Usuario">
            <input v-model="userStore.user.password" type="password" class="m-10 ml-10 mt-10 border border-red-200 h-10 w-3/4" placeholder=" Contraseña">
          
            <button class="rounded bg-red-500 h-10 w-3/4 ml-10 mt-10 text-white">ENTRAR</button>
            <br>
            </form>
           
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/user';


export default defineComponent({
    name: 'LoginView',
    components: {
        
    },
    data() {
        
        const userStore = useUserStore();

        return {
            userStore,
        }
    },
    methods: {

       async onsubmitLogin()
        {
            await this.userStore.login();
            //this.$router.push('/home');
            
        }
        
    }
})
</script>