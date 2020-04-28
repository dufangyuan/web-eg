<template>
    <div>
        我是work组件
        <input type="button" @click="go()" value="带我飞~飞到page页面去">
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: "abc",
            }
        },
        methods: {
            go() {
                // localtion.href="页地址"
                //this.$router.push("/page?info=" + this.name);//path传值
                // name传值
                this.$router.push({
                    name: 'Page',
                    params: {
                        info: this.name
                    }
                });
            }
        },
    }
</script>
<style>
</style>