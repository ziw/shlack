import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | login-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<LoginForm />`);
    assert.deepEqual(this.element.textContent.trim().replace(/\s*\n+\s*/g, '\n').split('\n'),
    [
      "Select a user",
      "Testy Testerson",
      "Sample McData",
      "A validation message",
    ]);
  });

  test('initially no user selected, sign in button disabled', async function(assert){
    await render(hbs`<LoginForm />`);
    const select = find('.login-form__select');
    const button = find('input[type="submit"]');
    assert.equal(select.value, "");
    assert.equal(button.disabled, true);
  });
});
