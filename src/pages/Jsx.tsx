import { Vue, Component } from 'vue-property-decorator';
import { CreateElement } from 'vue';
@Component
export default class JSX extends Vue {
  private count: number = 0;
  private showInfo() {
    this.count++;
  }

  protected render(h: CreateElement) {
    return <h2 onMouseenter={this.showInfo}>JSX Test{this.count}</h2>;
  }
}
