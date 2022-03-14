<template>
        <div class="login__box">
          <h1>Bonjour</h1>
          <p>Merci de vous connecter</p>
          <form>
            <input type="email" v-model="email" placeholder="Votre Email"><br>
            <span v-if="v$.email.$error">Votre adresse Email n'est pas conforme</span>
            <input type="password" v-model="password" placeholder="Votre Mot de Passe"><br>
            <!-- <span v-if="v$.email.$error">Le mot de passe n'est pas conforme</span> -->

          </form>
          
          <button @click="login()" class="btn_submit mt-5" :class="{'button--disabled' : !validatedFields}" >Connexion</button>
          <router-link to='/post'><button class="btn_submit mt-5" >Connexion</button></router-link>

        </div>
</template>

<script>
import useValidate from'@vuelidate/core';
import { required, email } from'@vuelidate/validators';

export default {
  name: 'LoginPage',
  data() {
    return {
      v$: useValidate(),
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
  validations() {
    return {
      email : { required, email },   
      password: { required },
    }

  },
  methods: {
      login: function () {
      this.v$.$validate()
      if (!this.v$.$error){
        alert('Form OK')
      }else {
        alert('Form noOK')
      }
        const self = this;
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password.password,
      })
      .then(function() {
        self.$router.push('/post')
      },function(error) {
        console.log(error);
      })
    }
  }
  
}
</script>

<style></style>
