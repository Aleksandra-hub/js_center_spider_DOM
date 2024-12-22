'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const coordsWall = wall.getBoundingClientRect();
const coordsSpider = spider.getBoundingClientRect();

spider.style.left = `${coordsWall.width / 2 - coordsSpider.width / 2}px`;
spider.style.top = `${coordsWall.height / 2 - coordsSpider.width / 2}px`;
