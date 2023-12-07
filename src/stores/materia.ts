import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios';
import router from '@/router';



interface Material {
    id: string;
    nombre: string;
    idGrupo: string;
}

export const useMateriaStore = defineStore({
    id : 'materia',
    state: () => {
        return {
            materials: [],
            materia: {
                id: "",
                nombre: "",
                idGrupo: ""     
            },
        };
    },

    actions: {
        async showMaterias() {
            const token = localStorage.getItem("token");
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            };
           
            await axios.get("http://25.7.37.171:8000/api/materia/1",config).then((response) => {
                this.materials = response.data;
                console.log("materias");
                console.log(this.materials.length);
                
            }).catch((error) => {
                console.log(error);
            });
        }
    },
});
    