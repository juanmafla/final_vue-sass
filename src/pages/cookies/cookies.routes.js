import { RouteConfig } from 'vue-router';

export default (): RouteConfig[] => {
  return [
    {
      path: '/cookies',
      component: require('./Cookies.vue').default,
    },
  ];
};
