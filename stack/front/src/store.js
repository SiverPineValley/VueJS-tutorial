import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        allUsers: [
            { id: 0, name: 'Jongin Park', email: 'whddls9632@ajou.ac.kr', password: 'jongin1234' },
            { id: 1, name: 'Juho Woo', email: 'einjuho7@ajou.ac.kr', password: 'juho1234' }
        ],
        current: -1,
        isLogin: false,
        isLoginError: false
    },
    // state를 변화시키는 로직
    mutations: {
        // 로그인이 성공했을 때
        loginSuccess(state) {
            state.isLoginError = false;
            state.isLogin = true;
        },
        // 로그인이 실패했을 때
        loginError(state) {
            state.isLogin = false;
            state.isLoginError = true;
            state.current = -1;
        }
    },
    // vue.js 로직
    actions: {
        // 로그인 시도
        login({ state, commit }, loginObj) {
            // 전체 유저에서 해당 이메일로 유저를 찾는다.
            let selectedUser = null;
            state.allUsers.forEach(user => {
                if (user.email === loginObj.email) {
                    selectedUser = user;
                    state.current = user.id;
                }
            });
            // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
            selectedUser === null ?
                commit('loginError') :
                selectedUser.password !== loginObj.password ?
                commit('loginError') :
                commit('loginSuccess');
        }
    }
});