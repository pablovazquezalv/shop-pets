import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios';
import router from '@/router';

interface Group {
    id: string;
    grado: string;
    seccion: string;
}
export const useGroupStore = defineStore({
  id : 'group',
  state: () => {
    return {
      groups: [],
      group: {
        id: "",
        grado: "",
        seccion: ""     
      },
      
    };
    },
    actions: {
        
       
        async showGroups() {
            const token = localStorage.getItem("token");
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",

              },
            };

            const body = {
                idUser: 1,
                };


            let formDatas = new FormData();
            formDatas.append("idUser", "1"); 
            await axios.get("http://25.7.37.171:8000/api/grupo",{
                params: {
                    idUser: 1,
                  },
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                    },
                })
            .then((response) => {
                this.groups = response.data;
                
                console.log(response.data);
                

            })
            .catch((error) => {
                console.log(error);
            });
        }
    },
    })