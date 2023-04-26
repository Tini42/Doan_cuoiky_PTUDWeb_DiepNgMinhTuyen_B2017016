<template>
    <div class="detail-view">
        <div class="container my-4 p-4">
            <div class="row">
                <div class="col-md-6 beverage-img">
                    <img :src="this.path + beverage.img" class="image-responsive w-100">
                </div>

                <div class="col-md-6 beverage-info-detail">
                    <div class="row" style="margin: 20px;">
                        <div class="col-md-12">
                            <h1 class="beverage-title text-capitalize">{{ beverage.name }}</h1>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-12">
                            <p class="description text-justify">
                                {{ beverage.desccription }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import staticPath from '../assets/path';
export default {
    data() {
        return {
            beverage: null
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        path() {
            return staticPath;
        }
    },
    created() {
        axios
            .get('http://localhost:3000/beverages/detail/' + this.id)
            .then(res => {
                this.beverage = res.data;
            })
            .catch(err => {
                console.log(err)
            })
    },
}
</script>

<style scoped>
.detail-view {
    margin-top: 18px;
}
</style>