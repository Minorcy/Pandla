import Vue from 'vue';
import App from './App';

import store from './store';
import filters from './common/js/filter.js';

/*lei start*/
import api from "./api/index.js";
import "./api/apiUrl.js";
import request from '@/api/request/request.js';
Vue.prototype.api = api;
Vue.prototype.$request = request;


import Request from '@/components/pocky-request/index.js';
Vue.prototype.$http = Request();
/*lei end*/


// import main from './pages/main/main.vue'
// Vue.component('index',main)

// import msg from './pages/msg/msg.vue'
// Vue.component('msg',msg)

// import pan from './pages/pan/pan.vue'
// Vue.component('pan',pan)

// import user from './pages/user/user.vue'
// Vue.component('user',user)

Vue.config.productionTip = false;
Vue.prototype.$store = store;
Object.keys(filters).forEach(key => { //返回filters对象中属性名组成的数组
	Vue.filter(key, filters[key])
})


App.mpType = 'app';

const app = new Vue({
	store,
	...App
})
app.$mount();
