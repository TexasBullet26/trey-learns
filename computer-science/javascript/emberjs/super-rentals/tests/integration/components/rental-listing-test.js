import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers'; // Step 6: Since we're using the new function "click", we need to import it.
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

// 02.06: Building a Simple Component: An Integration Test
// =======================================================================
// Ember components are commonly tested with component integration tests.
// Component integration tests verify the behavior of a component within
// the context of Ember's rendering engine. When running in an integration
// test, the component goes through its regular render lifecycle, and has
// access to dependent objects, loaded through Ember's resolver.

module('Integration | Component | rental-listing', function (hooks) {
  setupRenderingTest(hooks);

  // 02.06: An Integration Test - Step 2
  // ===================================================================
  // Pass the component a fake object that has all the properties
  // that our rental model has. We give the variable the name `rental`,
  // and in each test we set `rental` to our local scope, represented
  // by the `this` object The render template can access values in local scope:
  hooks.beforeEach(function () {
    this.rental = EmberObject.create({
      image: 'fake.png',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
    });
  });

  // The component should show details about the rental:
  test('should display rental details', async function(assert) {
    // 02.06: An Integration Test - Step 3
    // =========================================================================
    // Render our component using the `render` function. The `render` function
    // allows us to pass a template string, so that we can declare the component
    // in the same way we do in our templates. Since we set the `rental` variable
    // to our local scope in the `beforeEach` hook, we can access it as part of our render string:
    await render(hbs`<RentalListing @rental={{this.rental}} />`);
    // 02.06: An Integration Test - Step 4
    // =====================================================================================
    // Add our actions and assertions. In this first test, we just want to verify the output
    // of the component, so we just assert that the title and owner text match what
    // we provided in the fake `rental`:
    assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title', 'Title: test-title');
    assert.equal(this.element.querySelector('.listing .owner').textContent.trim(), 'Owner: test-owner', 'Owner: test-owner');
  });

  // The component should toggle the existence of a wide class on click,
  // to expand and shrink the photo of the rental:
  test('should toggle wide class on click', async function(assert) {
    // 02.06: An Integration Test - Step 3
    // ===========================================================
    await render(hbs`<RentalListing @rental={{this.rental}} />`);
    // 02.06: An Integration Test - Step 5
    // ======================================================================================
    // We will assert that the component is initially rendered without the `wide` class name.
    // Clicking the image will add the class `wide` to our element, and clicking it a second
    // time will take the `wide` class away. Note that we find the image
    // element using the CSS selector `.image`:
    assert.notOk(this.element.querySelector('.image.wide'), 'initially rendered small');
    await click('.image');
    assert.ok(this.element.querySelector('.image.wide'), 'rendered wide after click');
    await click('.image');
    assert.notOk(this.element.querySelector('.image.wide'), 'rendered small after second click');
  });
});

// Run `ember t -s` to verify that our new test is passing. To find the new test,
// locate "Integration | Component | rental listing" in the "Module" field of the test UI.
