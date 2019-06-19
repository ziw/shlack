import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ChannelChannelFooterComponent extends Component {

  @tracked
  inputValue = null;

  @action
  updateInput(e) {
    this.inputValue = e.target.value;
  }

  @action
  createMessage(event) {
    event.preventDefault();
    this.args.create(this.inputValue);
  }
}
