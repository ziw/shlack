import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('login');
  this.route('teams', function() {
    this.route('team', {
      path: ':teamId'
    }, function() {
      this.route('channel', {
        path: ':channelId'
      });
    });
  });
});

export default Router;
