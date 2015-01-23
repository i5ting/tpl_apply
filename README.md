# tpl_apply

tpl_apply with handlebars

[![npm version](https://badge.fury.io/js/tpl_apply.svg)](http://badge.fury.io/js/tpl_apply)

## Install

	npm install --save tpl_apply
	
## Test

	npm test
	
## Usage

方式1 ：basic

```
var tpl = require('./index');


var source = process.cwd() + '/tpl.js'
var dest = process.cwd() + '/test/tpl.generate.js'


tpl.tpl_apply(source, {
	title: "My New Post", body: "This is my first post!"
}, dest);

```

方式2 ：with helpers

```
source = process.cwd() + '/tpl2.js'
dest = process.cwd() + '/test/tpl2.generate.js'

var Handlebars = require('handlebars');

Handlebars.registerHelper('list', function(items, options) {
  var out = "<ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul>";
});


tpl.tpl_apply_with_register_helper(Handlebars, source, {
  people: [
   {firstName: "Yehuda", lastName: "Katz"},
   {firstName: "Carl", lastName: "Lerche"},
   {firstName: "Alan", lastName: "Johnson"}
 ]
}, dest);
```