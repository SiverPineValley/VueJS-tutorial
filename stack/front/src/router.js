import Vue from "vue";
import Router from "vue-router";
import store from "./store"

Vue.use(Router);

const rejectAuthUser = (to, from, next) => {
    if (store.state.isLogin === true) {
        // 이미 로그인 된 유저니까
        alert('이미 로그인을 하였습니다.');
        next('/');
    } else {
        next();
    }
}

const onlyAuthUser = (to, from, next) => {
    if (store.state.isLogin === false) {
        // 로그인이 안된 유저니까.
        alert('마이페이지에 접속하려면 로그인이 필요합니다.');
        next('/login');
    } else {
        next();
    }
}

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: "/",
        name: "home",
        component: () =>
            import ( /* webpackChunkName: "home" */ "./views/Home.vue")
    }, {
        path: "/login",
        name: "login",
        beforeEnter: rejectAuthUser,
        component: () =>
            import ( /* webpackChunkName: "login" */ "./views/Login.vue")
    }, {
        path: "/mypage",
        name: "mypage",
        beforeEnter: onlyAuthUser,
        component: () =>
            import ( /* webpackChunkName: "mypage" */ "./views/Mypage.vue")
    }]
});