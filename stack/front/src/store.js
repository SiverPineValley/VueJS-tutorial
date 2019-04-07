import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import router from "./router"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        current: null,
        isLogin: false,
        isLoginError: false
    },
    // state를 변화시키는 로직
    mutations: {
        // 로그인이 성공했을 때
        loginSuccess(state, payload) {
            state.isLoginError = false;
            state.isLogin = true;
            state.current = payload
        },
        // 로그인이 실패했을 때
        loginError(state) {
            state.isLogin = false;
            state.isLoginError = true;
            state.current = null;
        },
        logout(state) {
            state.isLogin = false;
            state.isLoginError = false;
            state.current = null;
        }
    },
    // vue.js 로직
    actions: {
        // 로그인 시도
        login({ commit }, loginObj) {
            // // 전체 유저에서 해당 이메일로 유저를 찾는다.
            // let selectedUser = null;
            // state.allUsers.forEach(user => {
            //     if (user.email === loginObj.email) {
            //         selectedUser = user;
            //     }
            // });
            // // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
            // if (selectedUser === null || selectedUser.password !== loginObj.password)
            //     commit('loginError');
            // else {
            //     commit('loginSuccess', selectedUser);
            //     router.push({ name: "mypage" });
            // }
            // post는 두번째 파라미터로 body 부분
            // 로그인 -> 토큰 반환
            axios.post('https://reqres.in/api/login', loginObj)
                .then(res => {
                    // 성공시 토큰을 받아온다.
                    // 토큰을 헤더에 포함시켜서 유저 정보를 요청
                    // get은 두번째 파라미터로 config
                    let token = res.data.token;
                    let config = {
                        headers: {
                            "access-token": token
                        }
                    };
                    // 토큰 -> 멤버 정보 반환
                    // 새로 고침 -> 토큰만 가지고 멤버 정보 교환
                    axios.get('https://reqres.in/api/users/2', config)
                        .then(response => {
                            let current = {
                                id: response.data.data.id,
                                first_name: response.data.data.first_name,
                                last_name: response.data.data.last_name,
                                avatar: response.data.data.avatar
                            }
                            commit('loginSuccess', current);
                            router.push({ name: "mypage" });
                        })
                        .catch(() => {
                            commit('loginError');
                        })
                })
                .catch(() => {
                    commit('loginError');
                });
        },
        logout({ commit }) {
            commit('logout');
            router.push({ name: "home" });
        }
    }
});