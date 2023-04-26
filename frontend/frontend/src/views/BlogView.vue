<template>
    <div class="blog-view container">
        <h1>123456</h1>

        <div class="sections row">
            <template v-for="(blog, index) in blogs" :key="index">

                <div class="card" style="width: 100rem;">
                    <!-- <router-link :to="'/beverages/detail/' + beverage._id" >
                        <img class="card-img-top" :src="path + beverage.img" alt="Card image cap">
                    </router-link> -->
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

.blog-view {
    margin-top: 18px;
}

.card {
    margin: 6px;
}
.card .card-body .card-title {
    min-height: 5rem;
    color: rgb(245, 65, 10);
}
.id-beverage {
    color: rgb(72, 186, 243);
}
</style>