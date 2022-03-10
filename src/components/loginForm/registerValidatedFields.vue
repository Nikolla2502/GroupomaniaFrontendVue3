<template>
    <div class="register__box">
        <h1>Rejoignez-nous</h1>
        <p>sur votre réseau d'entreprise</p>
        <form>
            <input type="text" v-model="pseudo" placeholder="Votre Pseudo">
            <input type="text" v-model="email" placeholder="Votre Email">
            <input type="password" v-model="password.password" placeholder="Votre Mot de Passe">
            <input type="password" v-model="password.confirm" placeholder="Confirmer votre Mot de Passe">
        </form>
          <button class="btn_submit" :class="{'button--disabled' : !validatedFields}" >Inscription</button>

        <!-- <router-link to='/post'><button class="btn_submit">Inscription</button></router-link> -->
</div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      pseudo: '',
      email : '',   
      password : {
        password: '',
        confirm: ''
      }
    }
  },
  computed: {
    validatedFields: function () {
        if(this.pseudo == "" && this.email == "" && this.password.password == "" && this.password.confirm == ""){
          return true;
        } else {
          return false;
        }

    }
  },

}
</script>


<style></style>
