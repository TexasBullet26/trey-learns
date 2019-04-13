//***************************************
// 02.09: Building a Complex Component  *
//**************************************************************************************************
// This new filter component will allow the user to provide input in the form of filter criteria.  *
// We want our component to filter the list of rentals based on input.                             *
//**************************************************************************************************
import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  //*******************************************************************************
  // 02.09: Building a Complex Component - Filtering Data Based on Input          *
  //*******************************************************************************
  // We use the `init` hook to seed our initial listings by calling the `filter`  *
  // action with an empty value.                                                  *
  //*******************************************************************************
  init() {
    this._super(...arguments);
    this.filter('').then((allResults) => {
      this.set('results', allResults.results);
    });
  },

  actions: {
    //***************************************************************************
    // 02.09: Building a Complex Component - Apply the filter to our rentals    *
    //***************************************************************************
    // The `handleFilterEntry` action will apply the search term filter         *
    // to the list of rentals, and set a component attribute called `results`:  *
    //***************************************************************************
    // 02.09: Building a Complex Component - Filtering Data Based on Input      *
    //***************************************************************************
    // The `handleFilterEntry` action calls a function called `filter` based    *
    // on the `value` attribute set by the input helper.                        *
    //***************************************************************************
    // The `filter` function is passed in by the calling object. This is a      *
    // pattern known as closure actions.                                        *
    //***************************************************************************
    // Notice the `then` function called on the result of calling the `filter`  *
    // function. The code expects the `filter` function to return a promise.    *
    // A promise is a JavaScript object that represents the result of an        *
    // asynchronous function. A promise may or may not be executed at the       *
    // time you receive it. To account for this, it provides functions, like    *
    // `then` that let you give it code it will run when it eventually          *
    // does receive a result.                                                   *
    //***************************************************************************
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then((filterResults) => {
        // We use the `query` property to compare to the `value`
        // property of the component. The `value` property
        // represents the latest state of the input field.
        // Therefore we now check that results match the input
        // field, ensuring that results will stay in sync
        // with the last thing the user has typed.
        if (filterResults.query === this.value) {
          this.set('results', filterResults.results);
        }
      });
    }
  }

});
