// We can define our API endpoints and our data in this file.
// Mirage works by overriding the JS code that makes network requests
// and instead returns the JSON you specify. Our update to mirage/config.js
// configures Mirage so that whenever Ember Data makes a GET request
// to /api/rentals, Mirage will return this JS object as JSON and
// no network request is actually made.

export default function() {
  // specified a namespace of /api in mirage configuration. without this change,
  // navigation to /rentals in our application would conflict with Mirage. In order
  // for this to work, we need our application to default to making requests
  // to the namespace of /api. To do this, we want to generate an application adapter.
  // An Adapter is an object that Ember Data uses to determine how we communicate with our backend.
  this.namespace = '/api'; // make this `/api`, for example, if your API is namespaced

  let rentals = [{
    type: 'rentals',
    id: 'grand-old-mansion',
    attributes: {
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      category: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
    }
  }, {
    type: 'rentals',
    id: 'urban-living',
    attributes: {
      title: 'Urban Living',
      owner: 'Mike Teavee',
      city: 'Seattle',
      category: 'Condo',
      bedrooms: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
    }
  }, {
    type: 'rentals',
    id: 'downtown-charm',
    attributes: {
      title: 'Downtown Charm',
      owner: 'Violet Beauregarde',
      city: 'Portland',
      category: 'Apartment',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
    }
  }];

  //**************************************************************************
  // 02.09: Building a Complex Component - Faking Query Results              *
  //**************************************************************************
  // Our Mirage HTTP GET handler for `rentals` will return rentals matching  *
  // the string provided in the URL query parameter called `city`.           *
  //**************************************************************************
  // Now we should see a simple filter on the home screen that will update   *
  // the rental list as you type.                                            *
  //**************************************************************************
  this.get('/rentals', function(db, request) {
    if(request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });
}
