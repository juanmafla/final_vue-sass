import VueRouter from 'vue-router';
import Vue from 'vue';
import homeModule from './pages/home';
import servicesModule from './pages/services';
import termsModule from './pages/terms';
import privacyModule from './pages/privacy';
import cookiesModule from './pages/cookies';

Vue.use(VueRouter);

export function router() {
  return new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: '/home',
        beforeRouteLeave(to, from, next) {
          const slider = this.$refs.flickity.$el;
          slider.style.transition = 'opacity .25s ease';
          slider.style.opacity = 0;
          setTimeout(() => {
            next();
          }, 250);
        },
      },
      ...homeModule.routes(),
      ...servicesModule.routes(),
    ],
  });
}
