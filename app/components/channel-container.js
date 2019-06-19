import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';
import { inject } from '@ember/service';

export default class ChannelContainerComponent extends Component {


  @tracked
  messages = [];

  @inject
  auth;

  @action
  async loadMessages() {
    const { channel } = this.args;
    const resp = await fetch(`/api/teams/${channel.teamId}/channels/${channel.id}/messages`);
    this.messages = await resp.json();
  }

  @action
  async createMessage(body) {
    const { channel } = this.args;
    const { id: channelId, teamId } = channel;
    const userId = this.auth.currentUserId;

    const resp = await fetch(`/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        boday: JSON.stringify({
          body,
          teamId,
          channelId,
          userId,
        }),
      }
    });
    if(this.isDestroying || this.isDestroyed ) {
      return;
    }
    if(!resp.ok) {
      throw new Error('problem creating message ' + await resp.text());
    }
    this.messages = [
      ...this.messages,
      {
        ...await resp.json(),
        user: this.auth.currentUser,
        body,
      },
    ];
  }
}
