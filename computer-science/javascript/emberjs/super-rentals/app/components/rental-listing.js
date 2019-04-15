import Component from '@ember/component';

export default Component.extend({
  // Since we want the image to be smaller at first,
  // we will set the property to start as false:
  isWide: false,
  // To allow the user to widen the image, we added
  // an action that toggles the value of isWide.
  actions: {
    // The toggleImageSize action is used to toggle
    // the isWide property on our component. In order
    // to trigger this action, we need to use the
    // {{action}} helper in the template named
    // app/templates/components/rental-listing.hbs.
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
