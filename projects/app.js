'use strict';

var proj = [];
function Projects(myProject) {
  Object.keys(myProject).forEach(x => this[x] = myProject[x]);
}

Projects.prototype.insertion = function() {

  var template = $('#my-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this)
};

projectObjects.forEach(item => proj.push(new Projects(item)));

proj.forEach(item => $('#project-main').append(item.insertion()));
