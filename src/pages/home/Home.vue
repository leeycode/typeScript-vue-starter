<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <hello-world msg="vue.js" />
    {{ $store.state.home.name }}
    <br/>
    {{ info }}
    <button @click="handleClick">点击</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import { HomeModule } from '@/store/modules/home';

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  get info() {
    return HomeModule.getMessage;
  }

  private handleClick() {
    HomeModule.updateMessage('liwu');
  }
}

</script>
