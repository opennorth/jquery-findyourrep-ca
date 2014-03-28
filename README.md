# Find Your Rep Widget: Canada

A basic jQuery plugin that renders a form into the specified target, geocoding input and displaying results from [Open North](http://opennorth.ca/)'s [Represent API](http://represent.opennorth.ca/).

This plugin extends and reuses code from the [Sunlight Foundation](https://sunlightfoundation.com/)'s [jQuery Find-Your-Rep](https://github.com/sunlightlabs/jquery-findyourrep) plugin.

## Usage

1. Link, in this order:
  1. jQuery
  1. [`dist/jquery.findyourrep-pack.min.js`](https://raw.githubusercontent.com/sunlightlabs/jquery-findyourrep/master/dist/js/jquery.findyourrep-pack.min.js) from jQuery Find-Your-Rep
  1. [`dist/jquery.findyourrep.ca.min.js`](https://raw.githubusercontent.com/opennorth/jquery-findyourrep-ca/master/dist/js/jquery.findyourrep.ca.min.js) from this package
1. Call `findYourRep({apis: 'represent'})` on an element:

```javascript
    $('.myDiv').findYourRep({apis: 'represent'});
```

Try the [demo](http://opennorth.github.io/jquery-findyourrep-ca/) (a good test address is `A1A1A1` for St. John's, NL).

For further documentation, see the [jQuery Find-Your-Rep](https://github.com/sunlightlabs/jquery-findyourrep#readme) plugin.

## Bugs? Questions?

This project's main repository is on GitHub: [http://github.com/opennorth/jquery-findyourrep-ca](http://github.com/opennorth/jquery-findyourrep-ca), where your contributions, forks, bug reports, feature requests, and feedback are greatly welcomed.

Copyright (c) 2014 Open North Inc., released under the BSD3 license
