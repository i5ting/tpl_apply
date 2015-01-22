'use strict';
var fs = require('fs');
var BufferHelper = require('bufferhelper');
var Handlebars = require('handlebars');

function log(t){
	console.dir('[TPL_APPLY LOG] ' + t);
}

function tpl_apply(template_path, data_obj, dest_file_path) {
		var rs = fs.createReadStream(template_path, {encoding: 'utf-8', bufferSize: 11}); 
		var bufferHelper = new BufferHelper();

		rs.on("data", function (trunk){
				bufferHelper.concat(trunk);
		});
	
		rs.on("end", function () {
			var source = bufferHelper.toBuffer().toString();
			var template = Handlebars.compile(source);
		
			log(template);
			
			var content = template(data_obj);

			fs.writeFile(dest_file_path, content , function (err) {
			  if (err) throw err;
			  log('It\'s saved!');
			});

		});
};

function tpl_apply_with_register_helper(Handlebars, template_path, data_obj, dest_file_path) {
		var rs = fs.createReadStream(template_path, {encoding: 'utf-8', bufferSize: 11}); 
		var bufferHelper = new BufferHelper();

		rs.on("data", function (trunk){
				bufferHelper.concat(trunk);
		});
	
		rs.on("end", function () {
			var source = bufferHelper.toBuffer().toString();
			var template = Handlebars.compile(source);
		
			log(template);
			
			var content = template(data_obj);

			fs.writeFile(dest_file_path, content , function (err) {
			  if (err) throw err;
			  log('It\'s saved!');
			});

		});
};

exports.tpl_apply_with_register_helper = tpl_apply_with_register_helper;
exports.tpl_apply = tpl_apply;