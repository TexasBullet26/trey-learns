//********************************************************************************************
// 02.09: Building a Complex Component - Filtering Data Based on Input                       *
//********************************************************************************************
// To implement the `filter` function to do the actual filter of rentals                     *
// by city, we've created a `rentals` controller. Controllers contain                        *
// actions and properties available to the template of its corresponding route.              *
// In this case, we generate a controller called `rentals`. Ember will know                  *
// that a controller with the name of `rentals` will apply to the route with the same name.  *
//********************************************************************************************
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    //**********************************************************************
    // When the user types in the text field in our component, the         *
    // `filterByCity` action in this controller is called. This            *
    // action takes in the `value` property, and filters the `rental`      *
    // data for records in data store that match what the user has         *
    // typed thus far. The result of the query is returned to the caller.  *
    //*****************************************************************************************
    // 02.09: Building a Complex Component - Handling Results Coming Back at Different Times  *
    //**************************************************************************************************
    // You might notice that if you type quickly that the results might get out of sync with the       *
    // current filter text entered. This is because our data filtering function is asynchronous,       *
    // meaning that the code in the function gets scheduled for later, while the code that calls       *
    // the function continues to execute. Often code that may make network requests is set up to       *
    // be asynchronous because the server may return its responses at varying times.                   *
    //**************************************************************************************************
    // We add some protective code to ensure our results do not get out of sync with our filter input  *
    // To do this we simply provide the filter text to the filter function, so that when the results   *
    // come back we can compare the original filter value with the current filter value. We will       *
    // update the results on screen only if the original filter value and the current                  *
    // filter value are the same.                                                                      *
    //**************************************************************************************************
    // In the `filterByCity` function, we've added a new property called `query` to the filter         *
    // results instead of just returning an array of rentals as before.                                *
    //**************************************************************************************************
    filterByCity(param) {
      if (param !== '') {
        return this.store
          .query('rental', { city: param }).then((results) => {
            return { query: param, results: results };
          });
      } else {
        return this.store
          .findAll('rental').then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }
});
