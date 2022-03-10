<template>
<div>
<BannerPage message="Votre réseau d'entreprise"></BannerPage>

  <div class="container mt-5 ">
    <!-- <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Pseudo</th>
          <th scope="col">Email</th>
          <th scope="col">Statut</th>
          <th scope="col">Level</th>
        </tr>
      </thead>
        <tbody>
    <tr>
      <th  v-bind:key='index' v-for="(item, index ) in users"></th>
    </tr>
      </tbody>
    </table> -->


    <b-table bordered striped hover responsive :items="users"></b-table>
  </div>
  <router-link to='/post'><button type="button" class="btn_submit mt-5 shadow-sm">Retour</button></router-link> 
  </div>
</template>

<script>
import axios from 'axios';

import BannerPage from '../components/header.vue';

  export default {
    name: 'AdminPage',
    components: {
        BannerPage
    },
    data() {
      return {
        users: [
          
        ],
      }
    },
    methods: {
        loadUser(){
            axios.get('http://localhost:3000/api/user')
            .then(res=> this.users = res.data.user)
            .catch(error => this.users = [error,{title: "Erreur lors de la recuperation des données"}])
        }
    },
    mounted: function () {
        this.loadUser()
    }
  }
</script>
<style></style>