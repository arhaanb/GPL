import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/skeleton.css'
import '@/assets/global.css'


// import 'buefy/dist/buefy.css'

Vue.config.productionTip = false


new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
