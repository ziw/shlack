import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class IndexRoute extends Route {

  @inject
  auth;

  beforeModel(){
    //@ts-ignore
    super.beforeModel(...arguments);
    this.transitionTo(
      this.auth.currentUserId  ? 'teams' : 'login'
    );
  }
}
