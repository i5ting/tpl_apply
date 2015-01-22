var tpl = require('./index');

// way 1
var source = process.cwd() + '/tpl.js'
var dest = process.cwd() + '/test/tpl.generate.js'

tpl.tpl_apply(source, { 
	title: "My New Post", body: "This is my first post!"
},dest);

// way 2
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