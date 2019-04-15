import Route from '@ember/routing/route';

export default Route.extend({
  // route lifecycle hook that is called automatically when a route renders or data changes.
  beforeModel() {
    // replaceWith function will replace the current URL in the browser's history.
    // now visiting the root route at `/` will result in the `/rentals` URL loading.
    this.replaceWith('rentals');
  }
});
