import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const ITEMS = [{city: 'San Francisco'}, {city: 'Portland'}, {city: 'Seattle'}];
const FILTERED_ITEMS = [{city: 'San Francisco'}];

module('Integration | Component | list-filter', function(hooks) {
  setupRenderingTest(hooks);

  test('should initially load all listings', async function (assert) {
    // We want our actions to return promises,
    // since they are potentially fetching data asynchronously
    this.set('filterByCity', () => Promise.resolve({ results: ITEMS }));

    // With an integration test,
    // you can set up and use your component in the same way your application
    // will use it.
    await render(hbs`
      <ListFilter @filter={{action filterByCity}} as |results|>
        <ul>
          {{#each results as |item|}}
            <li class="city">
              {{item.city}}
            </li>
          {{/each}}
        </ul>
      </ListFilter>
    `);

    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.city').length, 3);
      assert.equal(this.element.querySelector('.city').textContent.trim(), 'San Francisco');
    });
  });

  test('should update with matching listings', async function (assert) {
    this.set('filterByCity', (val) => {
      if (val === '') {
        return Promise.resolve({
          query: val,
          results: ITEMS });
      } else {
        return Promise.resolve({
          query: val,
          results: FILTERED_ITEMS });
      }
    });

    await render(hbs `
      <ListFilter @filter={{action filterByCity}} as |results|>
        <ul>
          {{#each results as |item|}}
            <li class="city">
              {{item.city}}
            </li>
          {{/each}}
        </ul>
      </ListFilter>
    `);

    // Fill in the input field with 's'
    await fillIn(this.element.querySelector('.list-filter input'), 's');
    // Keyup event to invoke an action that will cause the list to be filtered
    await triggerKeyEvent(this.element.querySelector('.list-filter input'), "keyup", 83);

    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.city').length, 1, 'One result returned');
      assert.equal(this.element.querySelector('.city').textContent.trim(), 'San Francisco');
    });
  });

});
