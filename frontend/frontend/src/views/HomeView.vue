<template>
    <div class="home-view container">

        <div class="sections row">
            <template v-for="(blog, index) in blogs" :key="index">

                <div class="card" style="width: 100rem;">
                    <router-link :to="'/blogs/detail/' + blog._id" >
                        <img class="card-img-top img" :src="path + blog.img" alt="Card image cap" style="height: 700px; width: 500px;">
                    </router-link>
                    <div class="card-body">
                        <h5 class="card-title">{{ blog.name }}</h5>
                        <p class="card-text">{{ blog.description }}</p>
                    </div>
                </div>

            </template>  


        </div>
    </div>
</template>

<script>
import axios from 'axios';
import staticPath from '../assets/path';
export default {
    data() {
        return {
            // search: '',
            blogs: []
        };
    },
    computed: {
        path() {
            return staticPath;
        }
    },
    created() {
        axios
            .get("http://localhost:3000/")
            .then(res => {
                this.blogs = res.data.blogs;
            })
            .catch(err => {
                console.log(err);
            });
    },
}
</script>

<style scoped>

.home-view {
    margin-top: 18px;
}

.card {
    margin: 6px;
}
.card .card-body .card-title {
    min-height: 5rem;
    color: rgb(245, 65, 10);
}
.img{
    margin-left: 20rem;
}
.id-beverage {
    color: rgb(72, 186, 243);
}
</style>