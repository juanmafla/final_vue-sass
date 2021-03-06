// import Vue from 'vue';

// import store from '@/store';
// import App from '@/App';
// import { router } from './app.router';

// import './scss/style.scss';

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   store,
//   router: router(),
//   render: h => h(App),
// });

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './scss/style.scss';
import './js/script';

//Components
import Home from './pages/home/Home.vue';
import Services from './pages/services/Services.vue';
import Terms from './pages/terms/Terms.vue';
import Privacy from './pages/privacy/Privacy.vue';
import Cookies from './pages/cookies/Cookies.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/services/', component: Services },
  { path: '/delivery/', component: Home },
  { path: '/contact/', component: Home },
  { path: '/account/', component: Home },
  { path: '/terms/', component: Terms },
  { path: '/privacy/', component: Privacy },
  { path: '/cookies/', component: Cookies },
  { path: '/', component: Home },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
