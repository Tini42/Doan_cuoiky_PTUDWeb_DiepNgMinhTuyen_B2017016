<template>
    <div class="tea-view container">
        <div class="sections row">
            <template v-for="(beverage, index) in beverages" :key="index">

                <div v-if="beverage.typeOf == 'trà'" class="card" style="width: 16rem;">
                    <router-link :to="'/beverages/detail/' + beverage._id" >
                        <img class="card-img-top" :src="path + beverage.img" alt="Card image cap">
                    </router-link>
                    <div class="card-body">
                        <h5 class="card-title">{{ beverage.name }}</h5>
                        <p class="card-text">{{ beverage.description }}</p>
                        <span>
                            <i class="id-book">Mã thức uống: {{ beverage.ID }}</i>
                        </span>
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
.tea-view {
    margin-top: 18px;
}
</style>