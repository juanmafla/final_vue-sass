import { RouteConfig } from 'vue-router';

export default: RouteConfig[] => {
  return [
    {
      path: '/home',
      component: () => import('./Home.vue'),
    }
  ];
};
