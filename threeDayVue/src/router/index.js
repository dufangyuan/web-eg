import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/page'
import Work from '@/components/work'
import frist from '@/components/frist'
const User = {
    template: `<div>
    <h3><font color="green">我是父组件 {{$route.params.id}} </font></h3>
    <router-view/>
    </div>`
}
const Profile = {
    template: `<div><h3><font color="red">我是Profile子组件 </font></h3></div>`
}
const Posts = {
    template: `<div><h3><font color="green">我是posts组件 </font></h3></div>`
}
const NotFount = {
    template: `<div><h3>  404您访问的页面不存在 </h3></div>`
}
Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'nav',
    routes: [{
            path: '/',
            redirect: "/page"
                // name: 'HelloWorld',
                // component: HelloWorld
        },
        {
            path: "/page",
            name: "Page",
            component: Page
        },
        {
            path: "/work",
            name: "Work",
            component: Work
        },
        {
            path: "/frist/:id",
            name: "frist",
            component: frist
        },
        {
            path: '/user/:id',
            name: "User",
            component: User,
            children: [
                //  {
                //    path: 'profile',
                //    name: "Profile",
                //    component: Profile,
                //  },
                {
                    path: '',
                    name: "Profile",
                    component: Profile,
                }, {
                    path: '/posts',
                    name: "Posts",
                    component: Posts,
                }
            ]
        },
        // 路由的重定向：表示将你原来在转发列表中发向路由的路径改成另一条路由的路径，
        // 你的数据会存到另一路由的服务器上
        // {
        //     path: "*",
        //     // component: NotFount,
        //     redirect: (to) => {
        //         console.log(to);
        //         if (to.path === "/aaa") {
        //             return "/page"
        //         } else if (to.path === "/bbb") {
        //             return "/work"
        //         } else {
        //             return '/'
        //         }
        //     }
        // }
    ]
})