<template>
    <div class="footer-view">
        <!-- Footer -->
        <footer class="page-footer font-small text-white pt-4">

            <!-- Footer Links -->
            <div class="container text-center text-md-left">

                <!-- Grid row -->
                <div class="row">

                    <!-- Grid column -->
                    <div class="col-md-6 mt-md-0 mt-3">

                        <!-- Content -->
                        <h5 class="text-uppercase">Wimi Coffee</h5>
                        <div id="imginthefooter">
                            <img src="../assets/img/footer.jpg">
                        </div>



                    </div>
                    <!-- Grid column -->

                    <hr class="clearfix w-100 d-md-none pb-3">

                    <!-- Grid column -->
                    <div class="col-md-3 mb-md-0 mb-3">

                        <!-- Links -->
                        <h5 class="text-uppercase">Wimi Coffee</h5>

                        <ul class="list-unstyled " >
                            <li>
                                <a v-on:click="goToHome()" style="color:#fff">Trang chủ</a>
                            </li>

                            <li>
                                <a v-on:click="goToMenu()" style="color:#fff">Menu</a>
                            </li>

                            <li>
                                <a v-on:click="goToCoffee()" style="color:#fff">Coffee</a>
                            </li> 
                            
                            <li>
                                <a v-on:click="goToTea()" style="color:#fff">Tea</a>
                            </li>
                            
                        </ul>
                        <div v-if="!this.checkStorageAdmin">
                            <button class="btn text-primary" v-on:click="goToLogin() ">Quản trị viên</button>
                        </div>

                        <div v-else>
                            <button class="btn text-primary" v-on:click="isekai()">Đăng xuất</button>
                        </div>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-3 mb-md-0 mb-3">

                        <!-- Links -->
                        <h5 class="text-uppercase">Kết nối với chúng tôi</h5>

                        <ul class="list-unstyled ">
                            

                            <li>Địa chỉ: 25G, Mậu Thân, Xuân Khánh, Ninh Kiều, TPCT</li>
                            <li>Điện thoại: 0270 3718 119</li>

                        </ul>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/wimispecialty" style="color:#fff"> Facebook</a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/wimi.specialtycoffee/tylesheet" style="color:#fff">Instagram</a>
                            </li>
                        </ul>

                    </div>
                    <!-- Grid column -->

                </div>
                <!-- Grid row -->

            </div>
            <!-- Footer Links -->

            <!-- Copyright -->
            <div class="footer-copyright text-center py-3">© 2023 Copyright:
                <a href="/" style="color: #fff; text-decoration: none;"> Diệp Nguyễn Minh Tuyến</a>
            </div>
            <!-- Copyright -->

        </footer>
        <!-- Footer -->
    </div>
</template>

<script>
export default {
    computed: {
        checkStorageAdmin() {
            return localStorage.getItem("admin") != null;
        },
    },
    methods: {
        goToLogin() {
            this.$router.push('/auth/login');
        },
        
        goToMenu() {
            this.$router.push('/beverages/menu');
        },
        goToCoffee() {
            this.$router.push('/beverages/cafe');
        },
        goToTea() {
            this.$router.push('/beverages/tea');
        },
        isekai() {
            localStorage.clear();
            this.$router.push('/');
            window.location.reload();
        },
      
    },
    method : {
        goToHome() {
            this.$router.push('/');
        },
    }
}

</script>

<style scoped>
/* .media a {
    width: 28px;
    height: 28px;
} */
.footer-view {
    size: 500px;
    background-color: rgb(132, 163, 221);
}


.btn{
    background-color: #fff;
}
#imginthefooter img {
    margin-left: 20px;
    width: 310px;
    height: 150px;
}
</style>