<template>
<div class="contenu">
    <BannerPage message="Votre réseau d'entreprise"></BannerPage>
    <BodyPost></BodyPost>

</div>
</template>

<script>

import BannerPage from '../components/header.vue'
import BodyPost from '../components/post/post_body.vue'





export default {
    name: 'PostPage',
    components: {
    BannerPage,
    BodyPost
    },

}
</script>

<style src='../components/post/post.css'></style>
