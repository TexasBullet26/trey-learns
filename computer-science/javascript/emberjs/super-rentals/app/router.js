import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this tells the ember router to run our /app/routes/about.js file when a visitor navigates to /about.
  this.route('about');
  this.route('contact');
  this.route('rentals');
});

export default Router;
