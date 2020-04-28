<template>
    <div>
      <h1>考试开始{{ this.canshu }}</h1>
    </div>
</template>
 <script>
    export default {
        data() {
            return {
                canshu: '',
            }
        },
        created() {
            console.log(this.$route.params.id);
            this.canshu = this.$route.params.id
        },
    }
</script>
<style>
</style>