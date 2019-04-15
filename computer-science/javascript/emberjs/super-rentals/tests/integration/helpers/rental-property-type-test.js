import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

// 02.07: Creating a Handlebars Helper - Integration Test
module('Integration | Helper | rental-property-type', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders correctly for a Standalone rental', async function(assert) {
    this.set('inputValue', 'Estate');

    await render(hbs`{{rental-property-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Standalone');
  });

  test('it renders correctly for a Community rental', async function (assert) {
    this.set('inputValue', 'Apartment');

    await render(hbs `{{rental-property-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Community');
  });
});
