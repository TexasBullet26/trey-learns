import Route from '@ember/routing/route';

/**************************************************************************************
 *  In ember, route handlers are responsible for loading the model                    *
 *  with data for the page. It loads the data in a function called                    *
 *  `model`. The `model` function acts as a hook, meaning that ember                  *
 *  will call it for us during different times in our app. The model                  *
 *  function we've added to our `rentals` route handler will be called                *
 *  when a user navigates to the rentals route via root URL `http://localhost:4200`,  *
 *  or via `http://localhost:4200/rentals`                                            *
 **************************************************************************************/
export default Route.extend({
  /***************************************************************************
   *  ES6 shorthand method definition syntax (same as `model: function()`):  *
   ***************************************************************************/
  model() {
    // 02.08: Using Ember Data - Updating the Model Hook
    // ----------------------------------------------------------------
    // We replaced the hard-coded array with the following call to the
    // Ember Data Store service. The store service is injected into all
    // routes and their corresponding controllers in Ember. It is the
    // main interface you use to interact with Ember Data.
    // In this case, call the `findAll` function on the store and provide
    // it with the name of your newly created rental model class:
    return this.store.findAll('rental');
    // When we call `findAll`, Ember Data will attempt to fetch rentals
    // from `api/rentals`. If you recall, in the section titled
    // Installing Addons we set up an adapter to route data requests through `/api`.
    // ------------------------------------------------------------------
    // Since we already set up Ember Mirage in our development environment,
    // Mirage will return the data we requested without actually making a network request.
    // ------------------------------------------------------------------
    // When we deploy our app to a production server, we will likely want to
    // replace Mirage with a remote server for Ember Data to communicate with
    // for storing and retrieving persisted data. A remote server will allow
    // for data to be shared and updated across users.
    /******************************************************************
     *  Return an array of rental objects from the `model` function:  *
     ******************************************************************/
    /*
     return [{
      id: 'grand-old-mansion',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      category: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }, {
      id: 'urban-living',
      title: 'Urban Living',
      owner: 'Mike TV',
      city: 'Seattle',
      category: 'Condo',
      bedrooms: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
    }, {
      id: 'downtown-charm',
      title: 'Downtown Charm',
      owner: 'Violet Beauregarde',
      city: 'Portland',
      category: 'Apartment',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
    }];
    */
  }
});

/**********************************************************************
 *  Ember will use the model object returned above and save it as an  *
 *  attribute called `model`, available to the rentals template we    *
 *  generated with our route.                                         *
 **********************************************************************/
