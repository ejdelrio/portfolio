'use strict';

var homeMain = $('#home-main');
var projectMain = $('#project-main');
var mainCSS = $('#display')

projectMain.hide();
var navMenu = $($('.navbar').find('nav'));

var portTab = navMenu.find('li').filter((x,y) => $($(y).find('a')).text() === 'Portfolio');
portTab.on('click', function() {
  homeMain.hide();
  mainCSS.attr('href', '../styles/projects.css');
  projectMain.show();
})

var homeTab = navMenu.find('li').filter((x,y) => $($(y).find('a')).text() === 'Home');
homeTab.on('click', function() {
  homeMain.show();
  mainCSS.attr('href', '../styles/home.css');
  projectMain.hide();
})
