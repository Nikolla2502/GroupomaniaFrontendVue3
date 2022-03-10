import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((request) => {
  //on vérifie que le token d'authentification existe
  //Si il existe, on manipule l'en-tête de la requête pour y ajouter le token dans le bearer

  return request;
})

export default instance;
