import { RouteConfig } from 'vue-router';

export default (): RouteConfig[] => {
  return [
    {
      path: '/terms',
      component: require('./terms.vue').default,
    },
  ];
};
