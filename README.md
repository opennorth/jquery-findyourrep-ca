# Find Your Rep Widget: Canada

A basic jQuery plugin that renders a form into the specified target, geocoding input and displaying results from [Open North](http://opennorth.ca/)'s [Represent API](https://represent.opennorth.ca/).

This plugin extends and reuses code from the [Sunlight Foundation](https://sunlightfoundation.com/)'s [jQuery Find-Your-Rep](https://github.com/sunlightlabs/jquery-findyourrep) plugin.

For another take on this, check out The Tyee's [plugin](https://github.com/TheTyee/jquery-findyournextrep-ca) and [demo](http://thetyee.github.io/jquery-findyournextrep-ca/).

## Example

Try the [demo](https://opennorth.github.io/jquery-findyourrep-ca/) (a good test address is `A1A1A1` for St. John's, NL). The full example code is:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Find Your Rep example</title>
    <link rel="stylesheet" href="css/jquery.findyourrep.min.css" />
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="js/jquery.findyourrep-pack.min.js"></script>
    <script src="js/jquery.findyourrep.ca.min.js"></script>
</head>
<body>
    <script>
        $('body').append('<div class="fyr"></div>')
                 .find('div.fyr')
                 .findYourRep({apis: 'represent'});
    </script>
</body>
</html>
```

## Usage

1. Link, in this order:
  1. jQuery
  1. [`dist/js/jquery.findyourrep-pack.min.js`](https://raw.githubusercontent.com/sunlightlabs/jquery-findyourrep/master/dist/js/jquery.findyourrep-pack.min.js) from jQuery Find-Your-Rep
  1. [`dist/js/jquery.findyourrep.ca.min.js`](https://raw.githubusercontent.com/opennorth/jquery-findyourrep-ca/master/dist/js/jquery.findyourrep.ca.min.js) from this package
1. Call `findYourRep({apis: 'represent'})` on an element:

```javascript
    $('.myDiv').findYourRep({apis: 'represent'});
```

For further documentation, see the [jQuery Find-Your-Rep](https://github.com/sunlightlabs/jquery-findyourrep#readme) plugin.

Copyright (c) 2014 Open North Inc., released under the BSD3 license
