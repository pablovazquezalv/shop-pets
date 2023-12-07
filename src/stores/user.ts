import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios';
import router from '@/router';
export const useUserStore = defineStore({
  id : 'user',
  state: () => {
    return {
      users: [],
      user: {
        id: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        nombre: "",
        apellidoMaterno: "",
        apellidoPaterno: "",
        edad: "",
        calificacion_1: "",
        calificacion: ""
              
      },
    };
    },
    actions: {
        
       
        async login() {
          await axios.post("http://25.7.37.171:8000/api/login",this.user)
          .then((response: any) => {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            router.push({ name: "home" });
          })
          .catch((error) => {
            console.log(error);
  
            alert(error.response.data.message);
          });
          
        },
        async showUsers() {
          const token = localStorage.getItem("token");
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          };
         
          await axios.get("http://25.7.37.171:8000/api/alumno",
            { headers: { Authorization: `Bearer ${token}` }, 
            params: { idAlumno: 0 }
          } 
          ).then((response) => {
              this.users = response.data;
              console.log(this.users);
            }).catch((error) => {
              console.log(error);
            });
        },
        async updateUser(calif: any) {
          let formDatas = new FormData();
          formDatas.append("calificacion", calif);

          const token = localStorage.getItem("token");
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          };
          await axios.post("http://25.7.37.171:8000/api/calificacion/modificar", formDatas, config)
          .then((response) => {
            console.log(response);
            
            alert("Calificacion actualizada")

          })
          .catch((error) => {
            console.log(error);
          });

        },
        async deleteCalif() {
          const token = localStorage.getItem("token");
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          };
          await axios.delete("http://25.7.37.171:8000/api/calificacion",config).then((response) => {
            console.log(response);
            alert("Calificacion eliminada");
          }
          ).catch((error) => {
            console.log(error);
          });
        },
        async asignCalifUser(calif2: any)
        {

          let formDatas = new FormData();
          formDatas.append("calificacion_1", calif2);

          const token = localStorage.getItem("token");
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          };
          await axios.post("http://25.7.37.171:8000/api/calificacion",formDatas,config).then((response) => {
            console.log(response);
            alert("Calificacion asignada");
          }).catch((error) => {
            console.log(error);
          } 
          )
        }

      },
    })
