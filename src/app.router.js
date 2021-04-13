import VueRouter from 'vue-router';
import Vue from 'vue';
import homeModule from './pages/home';
import servicesModule from './pages/services';

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
