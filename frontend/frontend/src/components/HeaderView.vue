<template>
    <div class="header-view">
        <header>
            <nav class="navbar navbar-expand-lg navbar-secondary ">
                <!-- Logo -->
                <router-link class="navbar-brand" to="/">
                    <img src="../assets/img/Wimi-logo.png" alt="logo" class="logo">
                </router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                        <li class="nav-item active">
                            <router-link to="/" class="nav-link">Home<span class="sr-only">(current)</span></router-link>
                        </li>

                        <li class="nav-item active">
                            <router-link to="/beverages/menu" class="nav-link">Menu<span class="sr-only">(current)</span></router-link>
                        </li>

                        <li class="nav-item active">
                            <router-link to="/beverages/cafe" class="nav-link">Cafe<span class="sr-only">(current)</span></router-link>
                        </li>

                        <li class="nav-item active">
                            <router-link to="/beverages/tea" class="nav-link">Trà<span class="sr-only">(current)</span></router-link>
                        </li>

                        <li class="nav-item active" v-if="this.checkStorageAdmin">
                            <router-link to="/admin/beverages/add" class="nav-link">Thêm thức uống<span class="sr-only">(current)</span></router-link>
                        </li>

                        <li class="nav-item active" v-if="this.checkStorageAdmin">
                            <router-link to="/admin/blogs/add" class="nav-link">Thêm bài viết<span class="sr-only">(current)</span></router-link>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    </div>
</template>

<script>

export default {
    computed: {
        checkStorageAdmin() {
            return localStorage.getItem("admin") != null;
        },
    },
}
</script>

<style scoped>
.header-view {
    min-height: 64px;
    background-color: rgb(132, 163, 221);
}
.logo {
    width: 50px;
}

a {
    color: #fff;
    text-decoration: none;
}

i {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin: 0 8px 0 0;
}
</style>