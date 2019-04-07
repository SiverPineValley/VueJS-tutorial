<template>
<!-- 가운대로 채움 -->
    <v-container fill-height style="max-width:450px;">
        <!-- 가운데로 내림 -->
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert
                class="mb-3"
                :value="isLoginError"
                type="error"
                >
                아이디와 비밀번호를 확인해주세요.
                </v-alert>
                <v-alert
                class="mb-3"
                :value="isLogin"
                type="success"
                >
                로그인이 되었습니다.
                </v-alert>
                <!-- 배경과 쉐도우로 구분 -->
                <v-card>
                    <v-toolbar flat>
                        <v-toolbar-title>로그인</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                        <v-text-field
                        v-model="email"
                        :rules="rules"
                        counter="30"
                        label="이메일을 입력하세요."
                        hint="이메일의 최대 길이는 30입니다."
                        >
                        </v-text-field>
                        <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'visibility' : 'visibility_off'"
                        :type="show1 ? 'text' : 'password'"
                        label="패스워드를 입력하세요."
                        @click:append="show1 = !show1"
                        name="input-10-1"
                        hint="최소 8글자 이상을 입력하세요."
                        >
                        </v-text-field>
                        <v-btn
                        color="primary"
                        block
                        large
                        depressed
                        @click="login({
                            email: email,
                            password: password
                        })"
                        >Log in</v-btn>
                        <!-- <v-btn @click="test">Test</v-btn>
                        <v-btn @click="postTest">Post Test</v-btn> -->
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
// mapState는 store의 변수, mapActions는 store의 메소드를 가져옴.
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
    computed: {
        ...mapState([ "isLogin", "isLoginError"])
    },
    methods: {
        ...mapActions(['login']),
        // test() {

        //     // Make a request for a user with a given ID
        //     axios
        //     .get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         // handle success
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         // handle error
        //         console.log(err);
        //     })
        //     .then(() => {
        //         // always executed
        //     });
        // },
        // postTest() {

        // }
    },
}
</script>
