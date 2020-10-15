import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { Component } from 'vue-property-decorator';
import { Route } from 'vue-router';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
]);

Vue.config.productionTip = false;

router.beforeEach((to: Route, from: Route, next: () => void) => {
  console.log(to, from);
  next();
});
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
