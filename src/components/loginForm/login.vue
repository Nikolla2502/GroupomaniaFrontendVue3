<template>
        <div class="login__box">
          <h1>Bonjour</h1>
          <p>Merci de vous connecter</p>
          <form>
            <input type="email" v-model="email" placeholder="Votre Email">
            <input type="password" v-model="password" placeholder="Votre Mot de Passe">
          </form>
          <button class="btn_submit" :class="{'button--disabled' : !validatedFields}" >Connexion</button>
          <!-- <router-link to='/post'><button class="btn_submit mt-5" >Connexion</button></router-link> -->

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
    computed: {
    validatedFields: function () {
        if(this.email !== "" && this.password !== ""){
          return true;
        } else {
          return false;
        }

    }
  },
}
</script>

<style></style>
