<template>
        <div class="login__box">
        <div class="col-8 m-auto  pt-5">
        <div class="form-floating">
        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
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
        <div class="d-flex justify-content-around mt-5">
          <label for="file-input" class="btn_submit mt-1 shadow-sm border">Ajouter un fichier</label>
          <input class="d-none" id="file-input" type="file" />
        </div>
          <router-link to='/post'><button type="button" class="btn_submit mt-5 shadow-sm border">Publier</button></router-link> 
        </div>
</template>

<script>


export default {
  name: 'PostMedia',
}
</script>

<style></style>
