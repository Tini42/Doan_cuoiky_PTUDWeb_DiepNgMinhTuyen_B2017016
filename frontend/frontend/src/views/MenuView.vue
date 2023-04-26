<template>
    <div class="menu-view container">
        <!-- <div class="sections row mb-3 justify-content-center">
            Search books
            <form class="form-inline my-2 my-lg-0">
                <label class=" form-label my-2 my-sm-0 mr-3">Tìm kiếm thức uống: </label>
                <input class="form-control mr-sm-2 col-xs-4" type="search" v-model="search"
                    placeholder="Tiêu đề bài viết" aria-label="Search">
            </form>
        </div> -->

        <div class="sections row">
            <template v-for="(beverage, index) in beverages" :key="index">

                <div class="card" style="width: 16rem;">
                    <router-link :to="'/beverages/detail/' + beverage._id" >
                        <img class="card-img-top" :src="path + beverage.img" alt="Card image cap">
                    </router-link>
                    <div class="card-body">
                        <h5 class="card-title">{{ beverage.name }}</h5>
                        <p class="card-text">{{ beverage.description }}</p>
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
            beverages: []
        };
    },
    computed: {
        path() {
            return staticPath;
        }
    },
    created() {
        axios
            .get("http://localhost:3000/menu")
            .then(res => {
                this.beverages = res.data.beverages;
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
.id-beverage {
    color: rgb(72, 186, 243);
}
</style>