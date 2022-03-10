<template>
<div class="deconnexion">
     <BannerPage message="Votre réseau d'entreprise"></BannerPage>
    <div class="deconnexion_body">
    <p>Vous êtes deconnecté</p>
    <h2>Au revoir</h2>
    <h3>A très bientôt sur votre réseau</h3>
    <router-link to='/'><button>Je veux me reconnecter</button></router-link>
    </div>


</div>
</template>

<script>
import BannerPage from '../components/header.vue'




export default {
    name: 'DeconnexionPage',
    components: {
    BannerPage,

    },

}
</script>

<style scoped>

.deconnexion {
   min-height:100%;

}

.deconnexion button {
    width:auto;
    padding: 8px 5px;
}
p, h2, h3 {
    margin: 40px 0;
}

</style>