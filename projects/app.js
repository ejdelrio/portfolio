'use strict';

var proj = [];
function Projects(myProject) {
  Object.keys(myProject).forEach(x => this[x] = myProject[x]);
}

Projects.prototype.insertion = function() {
  var $newProject = $('.template').first().clone();

  $newProject.find('a').attr('href', this['url']);
  $newProject.find('img').attr('src', this['imgSrc']);
  $newProject.find('h3').text(this['title']);
  $newProject.find('p').text(this['body']);
  return $newProject;
};

projectObjects.forEach(item => proj.push(new Projects(item)));

proj.forEach(item => $('#project-main').append(item.insertion()));

$('.template').first().remove();
