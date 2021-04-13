import { RouteConfig } from 'vue-router';

export default (): RouteConfig[] => {
  return [
    {
      path: '/services',
      component: require('./Services.vue').default,
    },
  ];
};
