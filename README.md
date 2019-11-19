## Akash Pushkar - Personal Website

The live website is available at [akashpushkar.github.io](akashpushkar.github.io)

### Installation

This build process of this webite requires: [nunjucks](https://mozilla.github.io/nunjucks/) (used for HTML templating), [citation-js](https://citation.js.org/) (for automating conversion of .bib file to html)

```markdown
Building the project requires two steps:
1. creating the _src/templates/partials/conferences.njk_ from the _citations/conferences.bib_ file using the command: `node citations/createCiteHTML.js`. (Note: This command should be run from the root location)

2. running the gulp task created in _gulpfile.js_ using command `gulp nunjucks`

Alternative, we can combine the steps and run `node citations/createCiteHTML.js && gulp nunjucks`

```


