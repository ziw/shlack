import Route from '@ember/routing/route';

export default class TeamsTeamChannelRoute extends Route {

  model({ channelId }) {
    const teams = this.modelFor('teams.team');
    return teams.channels.find(channel => channel.id === channelId) || {};
  }
}
