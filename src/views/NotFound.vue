<template>
  <div class="NotFound">
    <BannerPage message="Votre réseau d'entreprise"></BannerPage>
    
    <h3 class="mt-5">Désolé la page demandée n'existe pas</h3>
    <router-link to='/'><button class="btn_submit mt-5" >Retour à l'acceuil</button></router-link>


  </div>
</template>

<script>
import BannerPage from '../components/header.vue'


export default {
  name: 'NotFound',
      components: {
    BannerPage,

    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
