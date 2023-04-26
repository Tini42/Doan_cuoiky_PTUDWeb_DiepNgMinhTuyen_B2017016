<template>
    <div class="add-blog container">
        <h3 class="text-uppercase my-4">Thêm Bài Viết</h3>

        <form method="POST" @submit.prevent="addBlog">
            <div class="form-row mb-4">
                <div class="form-group col-md-2">
                    <label for="id-blog">ID</label>
                    <input type="text" class="form-control" id="id-blog" v-model="posts.ID">
                </div>

                <div class="form-group col-md-4">
                    <label for="name">Tên</label>
                    <input type="text" class="form-control" id="name" v-model="posts.name">
                </div>

                <div class="form-group">
                    <label for="desript">Nội dung</label>
                    <input type="text" class="form-control" id="desript" v-model="posts.description">
                </div>

                <div class="form-group">
                    <label for="desript">Tác giả</label>
                    <input type="text" class="form-control" id="desript" v-model="posts.author">
                </div>
            </div>

            <!-- <div class="form-group mb-4">
                <label class="form-label" for="type-of">Thể loại</label>
                <select class="select" id="type-of" v-model="posts.typeOf">
                    <option disabled value="">Thể loại</option>
                    <option>cafe</option>
                    <option>trà</option>
                </select>
            </div> -->

            <div class="form-group mb-4">
                <label class="form-label" for="pathURL">Chọn hình ảnh</label><br>
                <input type="file" name="name-file" id="pathURL">
            </div>

            <button type="submit" class="btn btn-success btn-lg mb-1 mt-4 text-uppercase" @click="getNameFileImg">
                Thêm bài viết
            </button>

            <button type="button" v-on:click="comebackHome()" class="btn btn-info btn-lg mb-1 mx-5 mt-4 text-white">
                Về trang chủ
            </button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            posts: {
                ID: null,
                name: null,
                desccription: null,
                img: null,
                author: null
            }
        }
    },
    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.posts.img = fake_path.split("\\").pop();
        },
        addBlog() {
            axios.post('http://localhost:3000/admin/blogs/store', this.posts)
                .then(res => {
                    if (res.data.status === 200) {
                        window.alert("Thêm bài viết thành công")
                        this.posts.ID = "";
                        this.posts.name = "";
                        this.posts.desccription = "";
                        this.posts.author = "";
                        document.getElementById('pathURL').value = "";
                    }
                    else if (res.data.status === 500) {
                        window.alert("Thêm bài viết thất bại")
                    }
                })
                .catch(err => console.log(err))
        },
        comebackHome() {
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
    
</style>