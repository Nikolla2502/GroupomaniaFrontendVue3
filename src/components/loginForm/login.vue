<template>
        <div class="login__box">
          <h1>Bonjour</h1>
          <p>Merci de vous connecter</p>
          <form>
            <input type="email" v-model="email" placeholder="Votre Email">
            <input type="password" v-model="password" placeholder="Votre Mot de Passe">
          </form>
          <router-link to='/post'><button class="btn_submit mt-5" >Connexion</button></router-link>

        </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email : '',   
      password : ''
    }
  },
}
</script>

<style></style>
