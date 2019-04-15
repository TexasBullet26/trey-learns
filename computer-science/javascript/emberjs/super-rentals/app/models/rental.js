// 02.08: Using Ember Data
// -------------------------------------------------------------------
// Before section 02.08 of tutorial, our app is using hard-coded data
// for our rental listings, defined in the `rentals` route handler.
// As our application grows, we will want to persist our rental data on
// a server, and make it easier to do advanced operations on the data, such as querying.

// Ember comes with a data management library called Ember Data to help
// provide to your application by extending DS.Model:
import DS from 'ember-data';

// We define the structure of a rental object using the same attributes for
// our rental that we previously used in our hard-coded array of JavaScript
// objects - title, owner, city, category, image, bedrooms and description.
// Define attributes by giving them the result of the function `DS.attr()`.
// We now have a model object that we can use for our Ember Data implementation:
export default DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr()
});
