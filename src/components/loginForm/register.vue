<template>
    <div class="register__box">
        <h1>Rejoignez-nous</h1>
        <p>sur votre réseau d'entreprise</p>
        <form>
            <input type="text" v-model="pseudo" placeholder="Votre Pseudo">
            <input type="text" v-model="email" placeholder="Votre Email"><br>
            <span v-if="v$.email.$error">Le mot de passe n'est pas conforme</span>
            <input type="password" v-model="password.password" placeholder="Votre Mot de Passe"><br>
            <span v-if="v$.password.password.$error">{{ v$.password.password.$errors[0].$message }}</span>

            <input type="password" v-model="password.confirm" placeholder="Confirmer votre Mot de Passe"><br>
            <span v-if="v$.password.confirm.$error">Le mot de passe doit etre identique</span>

        </form>
          <button @click="signUp()" class="btn_submit" :class="{'button--disabled' : !validatedFields}" >Inscription</button>

        <!-- <router-link to='/post'><button class="btn_submit">Inscription</button></router-link> -->
</div>
</template>

<script>
import useValidate from'@vuelidate/core';
import { required, email, sameAs } from'@vuelidate/validators';


export default {
  name: 'RegisterPage',
  data() {
    return {
      v$: useValidate(),
      pseudo: '',
      email : '',   
      password : {
        password: '',
        confirm: ''
      }
    }
  },
  validations() {
    return {
      pseudo: { required },
      email : { required, email },   
      password : {
        password: { required },
        confirm: { required, sameAs: sameAs(this.password.password) }
      }
    }

  },
  
  computed: {
    validatedFields: function () {
        if(this.pseudo !== "" && this.email !== "" && this.password.password !== "" && this.password.confirm !== ""){
          return true;
        } else {
          return false;
        }

    }
  },
  methods: {
    signUp: function () {
      this.v$.$validate()
      if (!this.v$.$error){
        alert('Form OK')
      }else {
        alert('Form noOK')
      }
      const self = this;
      this.$store.dispatch('signUp', {
        pseudo: this.pseudo,
        email: this.email,
        password: this.password.password,
      })
      .then(function() {
        self.login();
      },function(error) {
        console.log(error);
      })
    }
  }

}
</script>


<style>

</style>
