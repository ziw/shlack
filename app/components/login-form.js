import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service} from '@ember/service';

export default class LoginFormComponent extends Component {

  @tracked
  userId = null;

  @service
  auth;

  get isDisabled() {
    return !this.userId;
  }

  handlerSignIn(userId) {
    this.auth.loginWithUserId(userId);
  }

  @action
  onSelectChanged(event) {
    this.userId = event.target.value;
  }

  @action
  onLoginFormSubmit(event) {
    event.preventDefault();
    this.handlerSignIn(this.userId);
  }
}
