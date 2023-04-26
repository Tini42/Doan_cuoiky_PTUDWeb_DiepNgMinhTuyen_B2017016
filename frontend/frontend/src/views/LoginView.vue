<template>
    <div class="login-view container">
        <!-- Section: Design Block -->
        <section class="text-lg-start">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-lg-4 d-none d-lg-flex">
                        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
                            class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
                    </div>
                    <div class="col-lg-8">
                        <div class="card-body py-5 px-md-5">

                            <form method="POST" @submit.prevent="logIn">
                                <!-- Username input -->
                                <div class="form-outline mb-4">
                                    <input type="text" id="username" class="form-control" v-model="login.username"/>
                                    <label class="form-label" for="username">Username</label>
                                </div>

                                <!-- Password input -->
                                <div class="form-outline mb-4">
                                    <input type="password" id="pwd" class="form-control"  v-model="login.password"/>
                                    <label class="form-label" for="pwd">Password</label>
                                </div>

                                <!-- Submit button -->
                                <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->

    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            login: {
                username: null,
                password: null
            }
        }
    },
    methods: {
        async logIn() {
            await axios.post('http://localhost:3000/login', this.login)
                .then(res => {
                    if (res.data.status == 200) {
                        const value = res.data.user.name;
                        localStorage.setItem('admin', JSON.stringify(value));
                        this.$router.push('/');
                    }
                    if (res.data.status == 404) {
                        window.alert("Sai tài khoản hoặc mật khẩu")
                    }
                })
                .catch(err => console.log(err));
        },
    }
}
</script>
<style scoped>
.login-view {
    margin-top: 72px;
}
.rounded-t-5 {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    @media (min-width: 992px) {
      .rounded-tr-lg-0 {
        border-top-right-radius: 0;
      }

      .rounded-bl-lg-5 {
        border-bottom-left-radius: 0.5rem;
      }
    }
</style>