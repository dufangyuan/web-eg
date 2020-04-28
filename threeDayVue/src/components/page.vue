<template>
    <div>
        <!-- <top :datalist="peoplelist"></top> -->
        <top @titlechange="getdata($event)" ></top>
        <div class="content">
            <h3>{{aa}}
            <font color="red">{{info}}</font>
        </h3>
        </div>
        <!-- <top></top> -->
        <!-- 父向子传值（属性传值） -->
        <!-- 子向父传值（事件传值） -->
    </div>
</template>
<script>
    import top from './Htop'
    export default {
        // props: {
        //     aa: {
        //         type: String,
        //         required: true,
        //     }
        // },
        data() {
            return {
                bb: '',
                aa: '',
                info: "我是page页面",
                peoplelist: [{
                    name: "导航一",
                    age: 18,
                    hobby: "睡觉"
                }, {
                    name: "导航二",
                    age: 18,
                    hobby: "睡觉"
                }, {
                    name: "导航三",
                    age: 18,
                    hobby: "睡觉"
                }, {
                    name: "导航四",
                    age: 18,
                    hobby: "睡觉"
                }, {
                    name: "导航5",
                    age: 18,
                    hobby: "睡觉"
                }, {
                    name: "导航6",
                    age: 18,
                    hobby: "睡觉"
                }, {
                    name: "导航7",
                    age: 18,
                    hobby: "睡觉"
                }, {
                    name: "导航8",
                    age: 18,
                    hobby: "睡觉"
                }, ]
            }
        },
        components: {
            top,
        },
        created() {
            //name传值比较安全 传值获取路径参数的值
            console.log(this.$route);
            this.bb = this.$route.params.info;
            console.log(this.bb)
                //path传值获取路径参数的值
                // this.bb = this.$route.query.info;
                // console.log(this.bb);
        },
        methods: {
            getdata(el) {
                console.log(el);
                this.aa = el;
            }
        },
    }
</script>
<style>
    .content {
        width: 90%;
        height: 300px;
        background: yellowgreen;
        margin: 50px auto;
    }
</style>