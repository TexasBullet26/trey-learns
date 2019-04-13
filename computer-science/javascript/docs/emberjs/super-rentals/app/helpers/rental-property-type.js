// 02.07: Creating a Handlebars Helper
// ===============================================================
// Ember offers Handlebars template helpers to decorate the
// data in our templates. This helper allows our users to quickly
// see if a property is "Standalone" or part of a "Community".
import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

// 02.07: Creating a Handlebars Helper
// ====================================================
// Look if a property exists in the array `communityPropertyTypes`,
// if so, we'll return either `'Community'` or `'Standalone'`:
export function rentalPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  }

  return 'Standalone';
}

export default helper(rentalPropertyType);

// Each argument in the helper will be added to an array and passed
// to our helper. For example, `{{my-helper "foo" "bar"}}` would
// result in `myHelper(["foo", "bar"])`. Using array 2015 destructuring
// assignment, we can name expected parameters within the array.
// In the code above, the first argument in the template will be assigned
// to `propertyType`. This provides a flexible, expressive interface
// for your helpers, including optional arguments and default values.
// Now we should see that the first rental property is listed as
// "Standalone", while the other two are listed as "Community".
