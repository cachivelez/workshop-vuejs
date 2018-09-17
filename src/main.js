import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import routes from './routes'

const router = new VueRouter({
	scrollBehavior() {
	    return { x: 1000, y: 0 };
	},
    routes
})

Vue.use(VueRouter)
Vue.use(VueMaterial.default)

new Vue({
  	el: '#app',
  	render: h => h(App),
    router,
    data: {
    	routes: routes.slice(1,routes.length)
    }
})
