<template>
    <div>
        <h1>{{ current.name }}님, 환영합니다! </h1>
    </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data: () => ({
      drawer: null
    }),
    computed: {
      ...mapState(["isLogin", "current"])
    },
    props: {
      source: String
    }
  }
</script>