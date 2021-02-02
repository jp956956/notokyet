import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '中華職棒大檸檬'
    }
  },
  {
    path: '/teamrecord',
    name: 'Teamrecord',
    component: () => import(/* webpackChunkName: "teamrecord" */ '../views/Teamrecord.vue'),
    meta: {
      title: '中華職棒大檸檬的球隊戰績'
    }
  },
  {
    path: '/perform',
    name: 'Perform',
    component: () => import(/* webpackChunkName: "perform" */ '../views/Perform.vue'),
    meta: {
      title: '中華職棒大檸檬逐日戰績'
    }
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component: () => import(/* webpackChunkName: "introduce" */ '../views/Introduce.vue'),
    meta: {
      title: '中華職棒大檸檬的球員介紹'
    }
  },
  {
    path: '/connection',
    name: 'Connection',
    component: () => import(/* webpackChunkName: "connection" */ '../views/Connection.vue'),
    meta: {
      title: '中華職棒大檸檬的youtuber連結'
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
    meta: {
      title: '中華職棒大檸檬的商店'
    }
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import(/* webpackChunkName: "game" */ '../views/Game.vue'),
    meta: {
      title: '中華職棒大檸檬的今日賽事'
    }
  },
  {
    path: '/live',
    name: 'Live',
    component: () => import(/* webpackChunkName: "live" */ '../views/Live.vue'),
    meta: {
      title: '轉播台'
    }
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
