<template>
<div class="essai">
    <BannerPage message="Bienvenue sur votre réseau d'entreprise"></BannerPage>

    <div class="connexion">
        <div class="login__header">
            <div class="login" v-bind:style='{"background-color" : (cardLoginActive? "white" : "#dfe9f5" ),"border-bottom" : (cardLoginActive? "none" : "solid 1px black" )}' v-on:click='toggleLogin()'>Connexion</div>
            <div class="register" v-bind:style='{"background-color" : (cardRegisterActive? "white" : "#dfe9f5" ),"border-bottom" : (cardRegisterActive? "none" : "solid 1px black" )}' v-on:click='toggleRegister()'>Inscription</div>
        </div>
        <LoginPage v-if ='cardLogin'></LoginPage>
        <RegisterPage v-if='cardRegister'></RegisterPage>
    </div>

</div>
</template>

<script>
import BannerPage from '@/components/header.vue'


import LoginPage from '@/components/loginForm/login.vue'
import RegisterPage from '@/components/loginForm/register.vue'

export default {
    name: 'ConnexionPage',
    components: {
    BannerPage,
    LoginPage,
    RegisterPage
    },
    data() {
        return {
            cardLogin:true,
            cardRegister:false,
            cardLoginActive: true,
            cardRegisterActive:false,
        }
    },
    methods : {
    toggleLogin: function(){
      this.cardLogin = true,
      this.cardRegister = false
      this.cardLoginActive = true,
      this.cardRegisterActive = false
    },
    toggleRegister: function(){
      this.cardLogin = false,
      this.cardRegister = true
      this.cardLoginActive = false,
      this.cardRegisterActive = true
    }
    }
}
</script>

<style src='../components/loginForm/loginForm.css'></style>