<template>
<!-- 가운대로 채움 -->
    <v-container fill-height style="max-width:450px;">
        <!-- 가운데로 내림 -->
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert
                class="mb-3"
                :value="isError"
                type="error"
                >
                아이디와 비밀번호를 확인해주세요.
                </v-alert>
                <v-alert
                class="mb-3"
                :value="isSuccess"
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
                        @click="login()"
                        >Log in</v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            allUsers: [
                {id: 1, name: 'Jongin Park', email: 'whddls9632@ajou.ac.kr', password: 'jongin1234' },
                {id: 2, name: 'Juho Woo', email: 'einjuho7@ajou.ac.kr', password: 'juho1234' }
            ],
            isError: false,
            isSuccess: false,
            Errormessage: null
        }
    },
    methods: {
        login() {
            // 전체 유저에서 해당 이메일로 유저를 찾는다.
            let selectedUser = null;
            this.allUsers.forEach(user => {
                if(user.email === this.email) selectedUser = user;
            });
            // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
            selectedUser === null
                ? (this.isError = true)
                : selectedUser.password !== this.password
                    ? (this.isError = true, this.isSuccess = false)
                    : (this.isSuccess = true, this.isError = false);
        }
    },
}
</script>
