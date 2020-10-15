<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class About extends Vue {
  @Watch('$route', { immediate: true })
  private changeRouter(route: Route) {
    console.log('route', route);
  }

  private beforeRouteEnter(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteEnter', to, from, next);
    next(); // 没有next将不会进入路由内部，跟vue文档用法一致
  }

  private beforeRouteUpdate(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteUpdate'); // 暂时不生效，版本问题
    next();
  }

  private beforeRouteLeave(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteLeave');
    next();
  }
}

</script>
