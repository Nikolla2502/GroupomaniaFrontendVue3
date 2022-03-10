<template>
    <div class='body_post'>
   
        <section class='aside col-10 col-md-2 mx-auto'>
            <ul class="aside_item py-3">
                <li class="id_categoryAll" v-on:click="loadPost">Tous les posts</li>
                <li class="id_category1" v-on:click="loadCinema">Cinema</li>
                <li class="id_category2" v-on:click="loadVacance">Vacances</li>
                <li class="id_category3" v-on:click="loadSport">Sports</li>
            </ul>
            <ul class='aside_item py-3'>
                <router-link to='/profil' class="text-decoration-none"><li>Mon Profil</li></router-link>
                <router-link to='/deconnexion' class="text-decoration-none "><li >Deconnexion</li></router-link>
            </ul>

                <router-link to='/user' class="btn_submit text-decoration-none fs-6">Administration</router-link>

        </section>

        <section class="post mt-4 m-auto ps-0 col-8">
            <ul>
                <li class="post_create py-3">
                <router-link to='/edit' class="text-decoration-none"><button class="btn_submit">Publier un Post</button></router-link>
                </li>

                <li v-bind:key='index' v-for="(post, index ) in posts">
                    <section class='post__header'>
                        <div class="user__name">
                        {{ post.category }} <br>
                        by {{ post.pseudo}} <br>
                        <p class="class-text"><small class="text-muted">Date : {{ post.date_create}}</small></p>
                        </div>
                        <p class="post__title"> {{ post.title }} </p>
                    </section>
                    <div class="post__comment"> {{ post.comment }}</div>
                    <div class="update"><svg viewBox="0 0 512 512">
                    <path fill="currentColor" d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"/></svg></div>
                    <section class="post__footer">
                        <div class="like__dislike">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="thumbs-up" 
                            class="like svg-inline--fa fa-thumbs-up fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 512 512">
                            <path fill="currentColor" d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z">
                            </path>
                            </svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="thumbs-down" 
                            class="dislike svg-inline--fa fa-thumbs-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 512 512">
                            <path fill="currentColor" d="M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99 2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4 13.667 13.667 10.153 108.6 71.76 108.6 57.58 0 95.27-31.936 95.27-104.73 0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58 0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54 0 23.75 0 56.73-47.27 56.73-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9 15.2 8.16 26.5 36.44 13.94 57.57 21.581 20.384 18.699 51.065 5.21 65.62 9.45 0 22.36 18.91 22.27 37.81-.09 18.91-16.71 37.82-37.82 37.82z">
                            </path>
                            </svg>
                        </div>

                     

                        <router-link class="text-dark" to='/comment'>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-dots" 
                        class="comments svg-inline--fa fa-comment-dots fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512">
                        <path fill="currentColor" d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z">
                        </path>
                        </svg>
                        </router-link>

                    </section>


                </li>
            </ul>
        </section>
    </div>
</template>


<script>
import instance from '/services/axiosInterceptor';



export default {
    name: 'BodyPost',

    data() {
        return {
            posts: [],
            comments: [],
    
            
        }

    },
    methods: {
        loadPost(){
            instance.get('http://localhost:3000/api/thread') 
                .then(res => this.posts = res.data.post)
                .catch(error => this.posts = [error,{ title: "Erreur de chargement"}]);
                console.log(this.posts)
            },
        loadCinema() {
                instance.get('http://localhost:3000/api/thread') 
                    .then(res => this.posts = res.data.post)
                    .catch(error => this.posts = [error,{ title: "Erreur de chargement"}])
                    let filter =this.posts.filter(posts => posts.id_category == 1 );
                    console.log(filter)
                
        },

        loadVacance() {
                instance.get('http://localhost:3000/api/thread') 
                    .then(res => this.posts = res.data.post)
                    .catch(error => this.posts = [error,{ title: "Erreur de chargement"}])
                    let filter =this.posts.filter(posts => posts.id_category == 2 )
                    console.log(filter)
        },
        loadSport() {
                instance.get('http://localhost:3000/api/thread') 
                    .then(res => this.posts = res.data.post)
                    .catch(error => this.posts = [error,{ title: "Erreur de chargement"}])
                    let filter =this.posts.filter(posts => posts.id_category == 3 )
                    console.log(filter)
        }

        },

        mounted: function () {
            this.loadPost()
    },


}
</script>

<style scoped>

label {
    padding: 0;
}
label svg {
    width: 1.5rem;
    margin-bottom:0;
}



</style>