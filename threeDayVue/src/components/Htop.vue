    
<template>
    <div>
        <ul class="Hnav">
            <!-- <li v-for="(item,index) in datalist" :key="index">{{item.name}}</li> -->
            <li @click="changetitle()">{{aa}}</li>
           <!--  <li>导航一</li>
            <li>导航一</li>
            <li>导航一</li>
            <li>导航一</li>
            <li>导航一</li>
            <li>导航一</li> -->
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                aa: "导航一",
            }
        },
        // props: {
        //     datalist: {
        //         type: Array,
        //         required: true,
        //     }
        // },
        methods: {
            changetitle() {
                console.log(11);
                this.$emit("titlechange", "子向父传值")
            }
        },
    }
</script>
<style>
    .Hnav {
        width: 90%;
        overflow: hidden;
        border: 2px solid #ccc;
        box-shadow: 0px 0px 5px #ddd;
        border-radius: 5px;
        margin: auto;
    }
    
    .Hnav li {
        width: 100px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        margin: 15px;
        float: left;
        background: green;
        color: white;
        border-radius: 5px;
    }
</style>