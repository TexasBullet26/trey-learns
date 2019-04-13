import DS from 'ember-data';

// In order for Mirage to work, we need our application to default to making
// requests to the namespace of `/api`. To do this, we want to generate an application adapter.
// An Adapter is an object that Ember Data uses to determine how we communicate with our backend.
// This adapter will extend the JSONAPIAdapter base class from Ember Data.
export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});
