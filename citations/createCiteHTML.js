const Cite = require('citation-js');
const fs = require("fs");


// Adding plugin for citation style from csl
// let templateName = 'custom'
// let template = '<?xml version="1.0" encoding="utf-8"?><style ...>...</style>' // The actual XML file

// let config = Cite.plugins.output.config.get('csl')
// config.templates.add(templateName, template)



// Reading the conferences.bib file
var text = fs.readFileSync('./citations/conferences.bib').toString();


// Generating HTML from the bib file read in 'text' variable

let conferences = new Cite(text);

let output = conferences.get({
  type: 'html',
  style: 'citation-apa',
  lang: 'en-US',
  prepend: '<i class="fas fa-circle"></i>'
});


// Writing the html created to src/templates/partials/conferences.njk

fs.writeFile("./src/templates/partials/conferences.njk", output, function(err){
	if(err){
		return console.log(err);
	}
	// console.log("The conferences.njk was created in src/templates/partials");
});