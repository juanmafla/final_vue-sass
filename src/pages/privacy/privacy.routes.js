import { RouteConfig } from 'vue-router';

export default (): RouteConfig[] => {
  return [
    {
      path: '/privacy',
      component: require('./Privacy.vue').default,
    },
  ];
};
