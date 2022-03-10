<template>
  <div class="login__box">
    <div class="col-8 m-auto pt-5">
        <div class="form-floating">
        <select class="form-select " id="floatingSelectGrid" aria-label="Floating label select example">
            <option selected></option>
            <option value="1">Cinéma</option>
            <option value="2">Vacances</option>
            <option value="3">Sport</option>
        </select>
        <label for="floatingSelectGrid">Categorie</label>
        </div>
    </div>
    <div class="col-10 m-auto my-2">
        <div class="form-floating">
        <input type="text" class="form-control" id="floatingInputGrid" placeholder="" value="">
        <label for="floatingInputGrid">Le titre de votre post</label>
        </div>
    </div>

    <div class="form-floating col-10 m-auto">
    <b-form-textarea
      class="mt-3"
      id="textarea"
      type="text"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <label for="textarea">Le texte de votre post</label>
    </div>
    <router-link to='/post'><button type="button" class="btn_submit mt-5 shadow-sm">Publier</button></router-link> 
  </div>
</template>

<script>
export default {
  name: 'PostText',
}
</script>

<style src='./post.css'>

</style>
