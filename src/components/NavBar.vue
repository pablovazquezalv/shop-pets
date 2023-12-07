<template>
    <nav class="bg-white border-b-2 border-gray-100">
        <div class="flex justify-between">
            <div class="w-full h-16 md:flex items-center justify-center md:w-auto md:items-center md:justify-center md:mx-10">
          
                <router-link to="/home"> <a class="flex items-center justify-start">
                <img src="../assets/harvadlogo.png" alt="logo" class="h-10 w-10" />
            </a></router-link>
               
        </div>

            <div class="hidden w-full md:flex items-center justify-center md:w-auto md:items-center md:justify-center md:mx-10"
                id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-3 rounded-lg md:flex-row md:space-x-14">
                    <!-- <li>
                    <router-link to="/">Inicio</router-link></li>
                    <li> -->
                        
                    <router-link to="/catalog">Grupos</router-link>
                    <!-- <router-link to="/catalog"></router-link> -->

                </ul>
            </div>

            <div class="mx-10 ">
                <ul class="flex flex-row justify-center items-center md:space-x-8 mt-6">
                  
                    <li>
                        <a><RouterLink to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg></RouterLink>
                            
                        </a>
                    </li>
                 
                </ul>
            </div>
        </div>
    </nav>
</template>
