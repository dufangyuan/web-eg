<template>
   <div>
   </div>
</template>
<script>
 export default{
     data(){
         return{
             name:"abc",
         }
     },
     created(){
         axios.get(http://www.wumeili.top/w/website/bannerList).then(function(res){
             console.log(res);
         })
     },
     methods:{

     }
 }
</script>