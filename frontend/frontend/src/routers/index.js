import { createRouter, createWebHistory } from 'vue-router'

import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'

import HomeView from '../views/HomeView.vue';
import CafeView from '../views/CafeView.vue';
import TeaView from '../views/TeaView.vue';
import DetailView from '../views/DetailView.vue';
import AddBeverage from '../views/AddBeverage.vue';
import LoginView from '../views/LoginView.vue';
import MenuView from '../views/MenuView.vue';
import AddBlog from '../views/AddBlog.vue';

// import NotFoundView from '../views/NotFoundView.vue'

// import BookCreateView from '../views/admin/BookCreateView.vue'
// import StoredBooksView from '../views/admin/StoredBooksView.vue'
// import EditBookView from '../views/admin/EditBookView.vue'
// import StoredUsersView from '../views/admin/StoredUsersView.vue';
// import RegisterUserView from '../views/admin/RegisterUserView.vue'
// import EditUserView from "../views/admin/EditUserView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: HomeView,
                HeaderView,
                FooterView
            }
        },
        {
            path: '/beverages/cafe',
            name: 'cafe',
            components: {
                default: CafeView,
                HeaderView,
                FooterView
            }
        },
        {
            path: '/beverages/tea',
            name: 'tea',
            components: {
                default: TeaView,
                HeaderView,
                FooterView
            }
        },
        {
            path: '/beverages/detail/:id',
            name: 'detail',
            components: {
                default: DetailView,
                HeaderView,
                FooterView
            }
        },
        {
            path: '/admin/beverages/add',
            name: 'add-beverage',
            components: {
                default: AddBeverage,
                HeaderView,
                FooterView
            }
        },
        {
            path: '/auth/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/beverages/menu',
            name: 'menu',
            components: {
                default: MenuView,
                HeaderView,
                FooterView
            }
        },

        {
            path: '/admin/blogs/add',
            name: 'add-blog',
            components: {
                default: AddBlog,
                HeaderView,
                FooterView
            }
        },
        // {
        //     path: '/beverages/blog',
        //     name: 'blog',
        //     components: {
        //         default: BlogView,
        //         HeaderView,
        //         FooterView
        //     }
        // },
        // {
        //     path: '/admin/users/:id/edit',
        //     name: 'edituser',
        //     component: EditUserView
        // },
        // {
        //     path: '/admin/auth/register',
        //     name: 'register',
        //     component: RegisterUserView
        // },
        // {
        //     path: '/admin/books/:id/edit',
        //     name: 'editbook',
        //     component: EditBookView
        // },
        // {
        //     path: '/admin/stored/books',
        //     name: 'storedbook',
        //     component: StoredBooksView
        // },
        // {
        //     path: '/auth/login',
        //     name: 'login',
        //     component: LogInView
        // },
        // {
        //     path: '/books/:slug',
        //     name: 'detailbook',
        //     component: DetailBookView
        // },
        // {
        //     path: '/:pathMatch(.*)*',
        //     name: 'notfound',
        //     component: NotFoundView
        // }
    ]
})

// router.beforeEach(async (to, from, next) => {
//     const localID = await localStorage.getItem('id');
//     if(!localID && to.name !== 'login') {
//         next({ name: 'login' });
//     }
//     else if(localID && to.name === 'login') {
//         next({ name: 'home' });
//     }
//     else next();
// })

export default router