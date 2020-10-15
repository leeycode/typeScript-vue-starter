<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goBack">go back</button>
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
    next();
  }

  private beforeRouteUpdate(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteUpdate'); // 暂时不生效，版本问题
    next();
  }

  private beforeRouteLeave(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteLeave');
    next();
  }

  private goBack() {
    this.$router.back();
  }
}

</script>
