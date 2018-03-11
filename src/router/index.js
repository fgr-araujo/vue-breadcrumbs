import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Area1 from '@/components/Area1'
import Area12 from '@/components/Area12'
import Area2 from '@/components/Area2'
import Area121 from '@/components/Area121'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        breadcrumb: [
          { name: 'Hello World' }
        ]
      }
    },
    {
      path: '/area1',
      name: 'Area1',
      component: Area1,
      meta: {
        breadcrumb: [
          { name: 'Area 1' }
        ]
      }
    },
    {
      path: '/area12',
      name: 'Area12',
      component: Area12,
      meta: {
        breadcrumb: [
          { name: 'Area 1', link: 'area11' },
          { name: 'Area 2' }
        ]
      }
    },
    {
      path: '/area121',
      name: 'Area121',
      component: Area121,
      meta: {
        breadcrumb: [
          { name: 'Area 1', link: 'area11' },
          { name: 'Area 2', link: 'area2' },
          { name: 'Area 3' }
        ]
      }
    },
    {
      path: '/area2',
      name: 'Area2',
      component: Area2,
      meta: {
        breadcrumb: [
          { name: 'Area 2' }
        ]
      }
    }
  ]
})
