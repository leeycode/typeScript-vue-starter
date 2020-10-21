import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({ namespaced: true, dynamic: true, name: 'home', store })

export default class Home extends VuexModule {
  public name: string = '游客';
  public message: string = '';

  get getMessage() {
    return `当前时间${new Date()}：${this.message}`;
  }

  @Mutation
  private SET_NAME(newName: string): void {
    this.name = newName;
  }

  @Mutation
  private SET_MESSAGE(message: string) {
    this.message = message;
  }

  @Action
  public updateMessage(newName: string): void {
    this.SET_NAME(newName);
    this.SET_MESSAGE('欢迎您');
  }
}

export const HomeModule = getModule(Home);
